import HeaderButtonContainer from "../../molecules/HeaderButtonContainer";

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <div className="flex justify-between items-center w-full text-white px-4 py-2 bg-[#07B53B]"
    >
      <div className="flex items-center gap-4">
        <h1 className="font-bold text-2xl">Welcome to Junki's Portfolio</h1>
      </div>
      <HeaderButtonContainer />
      { children }
    </div>
  );
}

export default Header;