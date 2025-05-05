import InputContainer from "../../molecules/inputContainer";

interface FooterProps {
  children?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <div className="w-full bg-[#07B53B]"
    >
      <InputContainer />
      {children}
    </div>
  );
}

export default Footer;