import { useState, useRef, useEffect } from 'react';

interface ChatTextareaProps {
  placeholder?: string;
  onSend: (message: string) => void;
}

const Input: React.FC<ChatTextareaProps> = ({ placeholder = "Type your message...", onSend }) => {
  const [message, setMessage] = useState<string>('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    adjustTextareaHeight();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (message.trim() !== '') {
        onSend(message);
        setMessage('');
        if (textareaRef.current) {
          textareaRef.current.style.height = '';
        }
      }
    }
  };

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = ''; // Reset the height
      const scrollHeight = textareaRef.current.scrollHeight;
      const lineHeight = 20; // Adjust this value to the actual line height in your textarea.
      const maxRows = 6;
      const maxHeight = lineHeight * maxRows;

      if (scrollHeight > maxHeight) {
        textareaRef.current.style.overflowY = 'auto';
        textareaRef.current.style.height = `${maxHeight}px`;
      } else {
        textareaRef.current.style.overflowY = 'hidden';
        textareaRef.current.style.height = `${scrollHeight}px`;
      }
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [message]);

  return (
    <form
      className="flex w-full p-2"
      onSubmit={(e) => {
        e.preventDefault();
        if (message.trim() !== '') {
          onSend(message);
          setMessage('');
          if (textareaRef.current) {
            textareaRef.current.style.height = '';
          }
        }
      }}
    >
      <textarea
        ref={textareaRef}
        className="flex-1 p-2 border rounded resize-none focus:outline-none bg-white border-2 border-black text-black"
        placeholder={placeholder}
        value={message}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        rows={2}
        style={{
          overflowY: 'hidden', 
          resize: 'none', 
        }}
      />
    </form>
  );
};

export default Input;