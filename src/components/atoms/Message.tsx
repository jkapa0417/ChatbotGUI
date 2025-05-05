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
    <div className={`flex w-full ${userType === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div
        key={id}
        className={`relative bg-[#FDEFB2] shadow-md py-2 px-4 m-2 overflow-hidden max-w-[90%] break-word whitespace-pre-wrap ${borderRadiusClass}`}
      >
        <div
          className="absolute inset-0 bg-transparent z-0"
          style={{
            backgroundImage: 'linear-gradient(to bottom, transparent 24px, #d2d2d2 24px, #d2d2d2 25px, transparent 25px)',
            backgroundSize: '100% 26px',
            clipPath: 'inset(0)',
          }}
          aria-hidden="true"
        ></div>
        <div className="relative z-10 text-sm sm:text-base">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Message;