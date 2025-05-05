import { create } from 'zustand';

interface Message {
  id: string;
  content: string | React.ReactElement;
  types: 'user' | 'bot' | 'button';
  timestamp: Date;
}

interface MessageStore {
  messages: Message[];
  addMessage: (id: string, content: string | React.ReactElement, types: 'user' | 'bot' | 'button') => void;
  updateMessage: (id: string, newContent: string | React.ReactElement) => void;
  clearMessages: () => void;
  sendMessage: (timestamp:string, input: string) => Promise<void>;
  stopMessage: (id: string) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  readerStore: { [key: string]: ReadableStreamDefaultReader };
}

interface UIStore {
  modalOpen: boolean;
  setModalOpen: (modalOpen: boolean) => void;
}

export const useUIStore = create<UIStore>((set) => ({
  modalOpen: false,
  setModalOpen: (modalOpen) => set({ modalOpen }),
}))

export const useMessageStore = create<MessageStore>((set, get) => ({
  messages: [],
  loading: false,
  readerStore: {},

  addMessage: (id, content, types) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          id,
          content,
          types,
          timestamp: new Date(),
        },
      ],
    })),

  updateMessage: (id, newContent) =>
    set((state) => ({
      messages: state.messages.map(message =>
        message.id === id
          ? { ...message, content: newContent }
          : message
      ),
    })),

  clearMessages: () => set({ messages: [] }),

  setLoading: (loading) => set({ loading }),

  sendMessage: async (timestamp: string, input: string) => {
    const url = 'https://junki-portfolio.jkapa0417.workers.dev/';

    get().addMessage(`${timestamp}-user`, input, 'user');
    get().addMessage(`${timestamp}-bot`, 'loading', 'bot');
    get().setLoading(true);
    
    const chatMessages = [
      { role: 'user', content: input }
    ];
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ chatMessages }),
      });

      if (!response.body) {
        throw new Error('ReadableStream not supported in this browser.');
      }

      const reader = response.body.getReader();

      set((state) => ({
        readerStore: {
          ...state.readerStore,
          [timestamp]: reader,
        },
      }));

      const decoder = new TextDecoder('utf-8');
      let done = false;
      let accumulatedText = '';
      let buffer = '';

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;

        if (value) {
          buffer += decoder.decode(value, { stream: true });
        }

        let lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (let line of lines) {
          line = line.trim();
          if (line.startsWith('data:')) {
            const jsonString = line.replace(/^data:\s*/, '');
            if (jsonString === '[DONE]') {
              break;
            }

            try {
              const chunkJson = JSON.parse(jsonString);
              const responseContent = chunkJson?.response;
              if (responseContent) {
                accumulatedText += responseContent;
                get().updateMessage(`${timestamp}-bot`, accumulatedText);
              }
            } catch (err) {
              console.error('Error parsing JSON:', err);
            }
          }
        }
      }

      // Clean up the reader from the store
      set((state) => {
        const { [timestamp]: _, ...rest } = state.readerStore;
        return { readerStore: rest };
      });

    } catch (error) {
      console.error('Streaming error:', error);
      get().stopMessage(`${timestamp}-bot`);
    } finally {
      get().setLoading(false);
    }
  },

  stopMessage: (id) => {
    const { readerStore } = get();
    const reader = readerStore[id.replace('-bot', '')];

    if (reader) {
      reader.cancel().catch(console.error); // Cancel the streaming
      set((state) => {
        const { [id.replace('-bot', '')]: _, ...rest } = state.readerStore;
        return {
          readerStore: rest,
        };
      });
    }

    get().setLoading(false);
  },
}));