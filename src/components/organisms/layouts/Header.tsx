import HeaderButtonContainer from "../../molecules/HeaderButtonContainer";

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <div className="flex justify-end items-center w-full text-white px-4 py-2 bg-[#609966]"
    >
      <HeaderButtonContainer />
      { children }
    </div>
  );
}

export default Header;