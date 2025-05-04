
import ProfileImage from "@assets/profile_image.jpg";
import CodeIcon from "@assets/code.svg?react";
import CloudIcon from "@assets/cloud.svg?react";
import ChatIcon from "@assets/chat.svg?react";

const WelcomeMessageContainer = () => {

  return (
    <div
      className={`relative max-w-lg h-fit w-fit p-8 bg-white shadow-2xl rounded-lg border-t-4 border-gray-300`}
      style={{
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/white-diamond.png")', // Subtle texture indicating a whiteboard
        backgroundSize: 'cover',
        borderRadius: '10px',
      }}
    >
      <div
        className={`flex flex-col h-full`}
      >
        <div className="flex items-center space-x-4 mb-4 border-b pb-4">
          <img
            className="rounded-full w-20 h-20 border-4 border-gray-400"
            src={ProfileImage}
            alt="Profile of Jun Ki Ahn"
          />
          <div>
            <h1 className="text-lg sm:text-2xl font-extrabold text-gray-800">Jun Ki Ahn</h1>
            <h2 className="text-md sm:text-lg text-gray-700 italic">Full Stack Developer</h2>
            <h3 className="text-sm sm:text-md text-gray-600">LG Electronics</h3>
          </div>
        </div>
        <div className="mt-4 text-gray-700 space-y-3 border-b pb-4">
          <p className='text-sm sm:text-base'>
            Leveraging skills in React, NodeJS, and Python, I craft efficient, scalable applications that power LG Electronics.
          </p>
          <p className='text-sm sm:text-base'>
            Instrumental in designing the LG Business Cloud Chatbot, I advance user interaction through innovation in communication systems.
          </p>
          <p className='text-sm sm:text-base'>
            Driven by a passion for technology, I am committed to delivering high-quality, impactful user experiences.
          </p>
          <p className='text-sm sm:text-base'>
            Curious to know more? Click the question mark next to my profile or type your queries in the input box below.
          </p>
        </div>
        <div className="flex justify-start space-x-4 mt-4">
          <CodeIcon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" title="Coding" />
          <CloudIcon className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-500" title="Cloud Solutions" />
          <ChatIcon className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" title="Chatbot Development" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessageContainer;