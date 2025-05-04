import InputContainer from "../../molecules/inputContainer";
import Wooden from "@assets/wooden.png"

interface FooterProps {
  children?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <div className="w-full"
      style={{
        backgroundImage: `url(${Wooden})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <InputContainer />
      {children}
    </div>
  );
}

export default Footer;