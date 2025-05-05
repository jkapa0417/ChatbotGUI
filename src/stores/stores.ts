import { create } from 'zustand';

// Define the structure of a message
interface Message {
  id: string;
  content: string | React.ReactElement
  types: 'user' | 'bot' | 'button';
  timestamp: Date;
}

// Define the structure of our store
interface MessageStore {
  messages: Message[];
  addMessage: (content: string | React.ReactElement, types: 'user' | 'bot' | 'button') => void;
  clearMessages: () => void;
}

// Create the store
export const useMessageStore = create<MessageStore>((set) => ({
  messages: [],

  addMessage: (content: string | React.ReactElement, types: 'user' | 'bot' | 'button') => set((state) => ({
    messages: [
      ...state.messages,
      {
        id: Date.now().toString(),
        content,
        types,
        timestamp: new Date(),
      },
    ],
  })),

  clearMessages: () => set({ messages: [] }),
}));