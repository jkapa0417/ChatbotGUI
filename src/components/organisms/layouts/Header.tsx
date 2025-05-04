import HeaderButtonContainer from "../../molecules/HeaderButtonContainer";
import Wooden from "@assets/wooden.png"

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
      <h1>Junki's Porfolio</h1>
      <HeaderButtonContainer />
    </div>
  );
}

export default Header;