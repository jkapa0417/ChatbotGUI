import Card from '../atoms/Card';
import SectionHeader from '../atoms/SectionHeader';
import { useTranslation } from 'react-i18next';

interface Message {
  email: string;
}

interface ContactProps {
  messages?: Message;
}

const Contact: React.FC<ContactProps> = ({ messages }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center sm:items-start">
      <SectionHeader title={t('contact_us')} />
      <Card key={'contact'}>
        <div className="flex flex-col items-start">
          <p className="text-xl mb-4 text-black text-start">
            {t('contact')}
          </p>
          <p className="text-lg text-black mb-6 font-bold transition duration-200 ease-in-out hover:text-[#328E6E] cursor-default">
            {messages?.email}
          </p>
          <button
            className="bg-white text-black px-6 py-3 font-semibold rounded-md hover:bg-[#67AE6E] hover:text-white transition duration-300 transform hover:scale-105 cursor-pointer"
            onClick={() => (window.location.href = `mailto:${messages?.email}`)}
          >
            {t('send_mail')}
          </button>
        </div>
      </Card>
    </div>
  );
};

export default Contact;