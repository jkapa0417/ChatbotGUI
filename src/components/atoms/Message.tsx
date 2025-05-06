import AIIcon from "@assets/ai.svg?react"

interface MessageProps {
  id: string;
  userType: 'user' | 'bot' | 'button'; // Assuming only two types for simplicity
  children: React.ReactNode;
}

const Message: React.FC<MessageProps> = ({ id, userType, children }) => {
  const borderRadiusClass = userType === 'user'
    ? 'rounded-bl-lg rounded-tr-none rounded-tl-lg rounded-br-lg'
    : 'rounded-br-lg rounded-tl-none rounded-tr-lg rounded-bl-lg';

  return (
    <div className={`flex w-full ${userType === 'user' ? 'justify-end' : 'justify-start'} items-center`}>
      {userType === 'bot' &&
        <div className="flex rounded-full w-16 h-16 border-4 border-[#90C67C] justify-center items-center mr-2" >
          <AIIcon className="w-10 h-10" />
        </div>}
      <div
        key={id}
        className={`relative ${userType === 'user' ? 'bg-[#90C67C]' : 'bg-[#E1EEBC]'} shadow-md py-2 px-4 m-2 overflow-hidden max-w-[90%] break-word whitespace-pre-wrap ${borderRadiusClass}`}
      >
        <div className="relative z-10 text-sm sm:text-base">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Message;