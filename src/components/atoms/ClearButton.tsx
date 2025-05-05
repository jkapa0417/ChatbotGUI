interface ClearButtonProps {
  onClick: () => void;
}

const ClearButton: React.FC<ClearButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-lg shadow-xl hover:shadow-lg transition-all duration-300 flex items-center self-center w-fit bg-pink-200 p-2 hover:bg-pink-300 group cursor-pointer"
      title="Clear messages"
    >
      <div className="flex items-center">
        <div
          className="eraser w-10 h-6 bg-blue-500 rounded-sm relative overflow-hidden mr-2 transition-transform duration-300 ease-in-out group-hover:scale-105"
        >
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-blue-600"></div>
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-white"></div>
        </div>
        <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Clear</span>
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