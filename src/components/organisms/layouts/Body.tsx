import React, { useEffect, useRef } from 'react';
import NewWelcomeContainer from '../../molecules/NewWelcomeContainer';
import AboutMe from "../../molecules/AboutMe";
import Career from '../../molecules/Career';
import Contact from '../../molecules/Contact';
import Projects from '../../molecules/Projects';
import Skills from '../../molecules/Skills';
import Rules from '../../../json/info.json'
import Modal from '../../atoms/Modal';
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
          <NewWelcomeContainer />
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
        <Modal>
          <img
            className="w-full h-auto rounded-lg cursor-pointer"
            src={ProfileImage}
            alt="Profile of Jun Ki Ahn"
            onClick={() => setModalOpen(false)}
          />
        </Modal>

      )}
    </>
  );
}

export default Body;