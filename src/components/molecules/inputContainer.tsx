import Input from "../atoms/Input";
import { useMessageStore } from "../../stores/stores";
import { useTranslation } from "react-i18next";


interface InputContainerProps { }

const InputContainer: React.FC<InputContainerProps> = () => {
  const { sendMessage, stopMessage, loading } = useMessageStore()
  const { t } = useTranslation()

  return (
    <div className="flex w-full h-full items-center">
      <Input
        placeholder={t('placeholder')}
        loading={loading}
        onSend={sendMessage}
        onStop={stopMessage}
      />
    </div>
  );
};

export default InputContainer;