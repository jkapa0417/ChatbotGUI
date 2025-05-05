import React, { useEffect, useRef } from 'react';
import WelcomeMessageContainer from "../../molecules/WelcomeContainer";
import AboutMe from "../../molecules/AboutMe";
import Career from '../../molecules/Career';
import Contact from '../../molecules/Contact';
import Corkboard from "@assets/corkboard.jpg";
import Projects from '../../molecules/Projects';
import Skills from '../../molecules/Skills';
import Rules from '../../../json/info.json'
import { useMessageStore } from "../../../stores/stores";
import ClearButton from '../../atoms/ClearButton';

interface BodyProps {
  children?: React.ReactNode;
}

const Body: React.FC<BodyProps> = ({ children }) => {
  const { messages, addMessage, clearMessages } = useMessageStore()
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleClick = (id: number, type: 'user' | 'bot' | 'button'): void => {
    if (id === 0 || id === 5) {
      addMessage(<AboutMe messages={Rules?.about_me || []} />, type);
    }
    if (id === 1 || id === 5) {
      addMessage(<Career messages={Rules?.career || []} />, type);
    }
    if (id === 2 || id === 5) {
      addMessage(<Projects messages={Rules?.projects || []} />, type);
    }
    if (id === 3 || id === 5) {
      addMessage(<Skills messages={Rules?.skills || []} />, type);
    }
    if (id === 4 || id === 5) {
      addMessage(<Contact messages={Rules?.contact || []} />, type);
    }
  };

  return (
    <div
      className="flex flex-col flex-1 w-full h-full text-black p-4 gap-4 overflow-y-auto"
      style={{
        backgroundImage: `url(${Corkboard})`,
        backgroundSize: 'auto',
        backgroundPosition: 'center',
        boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 5)',
      }}
    >
      <div className="flex gap-4 mt-4 w-full flex-wrap md:justify-start justify-center">
        <WelcomeMessageContainer />
      </div>
      <div className="flex gap-4 mt-4 w-full flex-wrap md:justify-start justify-center">
        {['About Me', 'Career', 'Projects', 'Skills', 'Contact', 'Show All Content!'].map((label, index) => {
          const colors = ['#FFFF99', '#FF99CC', '#CC99FF', '#99CCFF', '#C9D5F6', '#b6d7a8'];
          const rotations = ['rotate-4', '-rotate-4', 'rotate-2', '-rotate-2', 'rotate-3', '-rotate-3'];
          return (
            <button
              key={index}
              className={`flex w-[100px] h-[100px] sm:w-[180px] sm:h-[180px] items-center justify-center text-black font-medium transform shadow-xl hover:shadow-2xl overflow-hidden ${rotations[index % rotations.length]} hover:scale-120 hover:tracking-wide cursor-pointer`}
              style={{
                backgroundColor: colors[index % colors.length],
                backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.2) 75%, transparent 75%, transparent)',
                backgroundSize: '4px 4px',
              }}
              onClick={() => handleClick(index, 'button')}
            >
              <div className="absolute bottom-0 left-0 w-3 h-3 bg-black opacity-20 transform skew-x-12"></div>
              {label}
            </button>
          );
        })}
      </div>
      {messages.map((message, index) => (
        <div key={index} className={`message ${message?.types}`}>
          {React.isValidElement(message.content)
            ? React.cloneElement(message.content, { key: index })
            : message.content
          }
        </div>
      ))}
      <div ref={messagesEndRef} />
      {messages?.length > 0 && <ClearButton onClick={clearMessages} />}
      {children}
    </div>
  );
}

export default Body;