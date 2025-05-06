import InputContainer from "../../molecules/inputContainer";

interface FooterProps {
  children?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <div className="w-full bg-[#609966]"
    >
      <InputContainer />
      {children}
    </div>
  );
}

export default Footer;