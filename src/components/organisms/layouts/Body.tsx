import WelcomeMessageContainer from "../../molecules/WelcomeContainer";
import Corkboard from "@assets/corkboard.webp";

interface BodyProps {
  children?: React.ReactNode;
}

const Body: React.FC<BodyProps> = ({ children }) => {
  return (
    <div
      className="flex flex-col flex-1 w-full h-full text-black p-4 gap-4 overflow-y-auto"
      style={{
        backgroundImage: `url(${Corkboard})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 5)',
      }}
    >
      <div className="flex gap-4 mt-4 w-full flex-wrap md:justify-start justify-center">
      <WelcomeMessageContainer />
      </div>
      <div className="flex gap-4 mt-4 w-full flex-wrap md:justify-start justify-center">
        {['About Me', 'Career', 'Projects', 'Contact', 'Show All Content!'].map((label, index) => {
          const colors = ['#FFFF99', '#FF99CC', '#CC99FF', '#99CCFF'];
          const rotations = ['rotate-4', '-rotate-4', 'rotate-2', '-rotate-2'];
          return (
            <button
              className={`flex w-[100px] h-[100px] sm:w-[180px] sm:h-[180px] items-center justify-center text-black font-medium transform shadow-xl hover:shadow-2xl overflow-hidden ${rotations[index % rotations.length]} hover:scale-120 hover:tracking-wide cursor-pointer`}
              style={{
                backgroundColor: colors[index % colors.length],
                backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.2) 75%, transparent 75%, transparent)',
                backgroundSize: '4px 4px',
              }}
            >
              <div className="absolute bottom-0 left-0 w-3 h-3 bg-black opacity-20 transform skew-x-12"></div>
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Body;