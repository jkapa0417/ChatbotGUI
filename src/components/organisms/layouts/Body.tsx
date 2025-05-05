import React, { useEffect, useRef } from 'react';
import WelcomeMessageContainer from "../../molecules/WelcomeContainer";
import AboutMe from "../../molecules/AboutMe";
import Career from '../../molecules/Career';
import Contact from '../../molecules/Contact';
import Projects from '../../molecules/Projects';
import Skills from '../../molecules/Skills';
import Rules from '../../../json/info.json'
import MessageContainer from '../../molecules/MessageContainer';
import { useMessageStore, useUIStore } from "../../../stores/stores";
import ClearButton from '../../atoms/ClearButton';
import ProfileImage from "@assets/profile_image.jpg";

interface BodyProps {
  children?: React.ReactNode;
}

const Body: React.FC<BodyProps> = ({ children }) => {
  const { messages, clearMessages, loading } = useMessageStore()
  const { modalOpen, setModalOpen } = useUIStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      <div
        className="flex flex-col flex-1 w-full h-full text-black p-4 gap-4 overflow-y-auto bg-[#F4F4F5]"
      >
        <div className="flex gap-4 mt-4 w-full flex-wrap md:justify-start justify-center">
          <WelcomeMessageContainer />
        </div>
        <Career messages={Rules?.career || []} />
        <Projects messages={Rules?.projects || []} />
        <Skills messages={Rules?.skills || []} />
        <AboutMe messages={Rules?.about_me || []} />
        <Contact messages={Rules?.contact || []} />
        <MessageContainer />
        {messages?.length > 0 && !loading && <ClearButton onClick={clearMessages} />}
        <div ref={messagesEndRef} />
        {children}
      </div>
      {modalOpen && (
        <div className="fixed inset-0 backdrop-blur-md flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mx-2">
            <img
              className="w-full h-auto rounded-lg cursor-pointer"
              src={ProfileImage}
              alt="Profile of Jun Ki Ahn"
              onClick={() => setModalOpen(false)}
            />
            <button
              className="mt-2 px-4 py-2 bg-[#07B53B] text-white rounded-lg w-full cursor-pointer"
              onClick={() => setModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Body;