interface ClearButtonProps {
  onClick: () => void;
}

const ClearButton: React.FC<ClearButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-lg shadow-xl hover:shadow-lg transition-all duration-300 flex items-center self-center w-fit bg-[#8BE78B] p-2 hover:bg-[#07B53B] group cursor-pointer hover:scale-105"
      title="Clear messages"
    >
      <div className="flex items-center">
        <div
          className="eraser w-10 h-6 bg-[#07B53B] group-hover:bg-[#8BE78B] rounded-sm relative overflow-hidden mr-2 transition-transform duration-300 ease-in-out"
        >
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#07B53B] group-hover:bg-[#8BE78B]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-white"></div>
        </div>
        <span className="text-sm font-medium text-black group-hover:text-white transition-colors duration-300">Clear</span>
      </div>
      <style>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-3deg); }
          75% { transform: rotate(3deg); }
        }
        .group:hover .eraser {
          animation: wiggle 0.3s ease-in-out infinite;
        }
      `}</style>
    </button>
  );
};

export default ClearButton;