import { useState, useRef, useEffect } from 'react';
import IconButton from "../atoms/IconButton";
import StopIcon from "@assets/stop.svg?react"
import SendIcon from "@assets/send.svg?react";

interface ChatTextareaProps {
  placeholder?: string;
  loading: boolean;
  onSend: (timestamp: string, message: string) => void;
  onStop: (id: string) => void;
}

const Input: React.FC<ChatTextareaProps> = ({ placeholder = "Type your message...", loading, onSend, onStop }) => {
  const [message, setMessage] = useState<string>('');
  const [timestamp, setTimestamp] = useState<string>('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    adjustTextareaHeight();
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (loading) return;
    e.preventDefault();
    if (message.trim() !== '') {
      const timestamp = Date.now().toString();
      setTimestamp(timestamp)
      onSend(timestamp, message);
      setMessage('');
      if (textareaRef.current) {
        textareaRef.current.style.height = '';
      }
    }
  };

  const handleStop = () => {
    onStop(`${timestamp}-bot`)
    setTimestamp('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (loading) return;
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (message.trim() !== '') {
        const timestamp = Date.now().toString();
        setTimestamp(timestamp)
        onSend(timestamp, message);
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
    <div className="flex w-full h-full items-center">
      <form
        className="flex w-full p-2"
        onSubmit={(e) => {
          e.preventDefault();
          if (message.trim() !== '') {
            const timestamp = Date.now().toString();
            setTimestamp(timestamp)
            onSend(timestamp, message);
            setMessage('');
            if (textareaRef.current) {
              textareaRef.current.style.height = '';
            }
          }
        }}
      >
        <textarea
          ref={textareaRef}
          className="flex-1 px-8 py-2 rounded-[32px] resize-none focus:outline-none bg-white text-black"
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
      <IconButton
        className="flex w-fit h-fit items-center justify-center rounded-full mr-1 cursor-pointer group hover:!bg-[#8BE78B]"
        onClick={!loading ? handleClick : handleStop}
      >
        {!loading ? <SendIcon className="w-10 h-10 stroke-[#FFFFFF] group-hover:stroke-[#000000]" /> : <StopIcon className='w-10 h-10 fill-[#FFFFFF] group-hover:fill-[#000000]' />}
      </IconButton>
    </div>
  );
};

export default Input;