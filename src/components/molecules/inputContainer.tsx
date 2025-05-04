import Input from "../atoms/Input";
import IconButton from "../atoms/IconButton";
import SendIcon from "@assets/send.svg?react";

interface InputContainerProps {}

const InputContainer: React.FC<InputContainerProps> = () => {
  return (
    <div className="flex w-full h-full items-center">
      <Input placeholder="Ask about me!" onSend={() => {/* provide your function here if needed */}} />
      <IconButton className="flex w-fit h-fit items-center justify-center rounded-md mr-2 cursor-pointer">
        <SendIcon className="w-6 h-6"/>
      </IconButton>
    </div>
  );
};

export default InputContainer;