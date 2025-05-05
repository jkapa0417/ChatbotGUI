import Input from "../atoms/Input";
import { useMessageStore } from "../../stores/stores";


interface InputContainerProps { }

const InputContainer: React.FC<InputContainerProps> = () => {
  const { sendMessage, stopMessage, loading } = useMessageStore()

  return (
    <div className="flex w-full h-full items-center">
      <Input
        placeholder="Ask about me! (ex: Explain about him)"
        loading={loading}
        onSend={sendMessage}
        onStop={stopMessage}
      />
    </div>
  );
};

export default InputContainer;