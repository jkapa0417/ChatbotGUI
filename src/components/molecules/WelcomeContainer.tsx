import { useUIStore } from "../../stores/stores";
import ProfileImage from "@assets/profile_image.jpg";
import CodeIcon from "@assets/code.svg?react";
import CloudIcon from "@assets/cloud.svg?react";
import ChatIcon from "@assets/chat.svg?react";

/*Deprecated*/
const WelcomeMessageContainer = () => {
  const { setModalOpen } = useUIStore();

  return (
    <div className='flex gap-4'>
      <img
        className="rounded-full w-20 h-20 border-4 border-[#07B53B] cursor-pointer"
        src={ProfileImage}
        alt="Profile of Jun Ki Ahn"
        onClick={() => setModalOpen(true)}
      />

      <div
        className={`relative max-w-lg h-fit w-fit p-8 bg-white shadow-lg rounded-br-lg rounded-tl-none rounded-tr-lg rounded-bl-lg`}
      >
        <div className={`flex flex-col h-full gap-4`}>

          <div>
            <h1 className="text-lg sm:text-2xl font-extrabold">Jun Ki Ahn</h1>
            <h2 className="text-md sm:text-lg italic">Full Stack Developer</h2>
            <h3 className="text-sm sm:text-md">LG Electronics</h3>
          </div>
          <p className='text-base sm:text-lg'>
            Hello, my name is Jun Ki Ahn, a full stack developer working in LG Electronics
          </p>
          <p className='text-base sm:text-lg'>
            Leveraging skills in React, NodeJS, and Python, I craft efficient, scalable applications that power LG Electronics.
          </p>
          <p className='text-base sm:text-lg'>
            Instrumental in designing the LG Business Cloud Chatbot, I advance user interaction through innovation in communication systems.
          </p>
          <p className='text-base sm:text-lg'>
            Driven by a passion for technology, I am committed to delivering high-quality, impactful user experiences.
          </p>

          <div className="flex justify-start space-x-4 mt-4">
            <CodeIcon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" title="Coding" />
            <CloudIcon className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-500" title="Cloud Solutions" />
            <ChatIcon className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" title="Chatbot Development" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessageContainer;