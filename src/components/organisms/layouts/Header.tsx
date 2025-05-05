import HeaderButtonContainer from "../../molecules/HeaderButtonContainer";
import Wooden from "@assets/wooden.png"
import MainIcon from "@assets/favicon.svg?react"

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <div className="flex justify-between items-center w-full text-white px-4 py-2"
      style={{
        backgroundImage: `url(${Wooden})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex items-center gap-4">
        <MainIcon className="h-10 w-10"/>
        <h1 className="font-bold text-black text-lg">Junki's Portfolio</h1>
      </div>
      <HeaderButtonContainer />
      { children }
    </div>
  );
}

export default Header;