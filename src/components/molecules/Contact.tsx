import Card from '../atoms/Card';
import SectionHeader from '../atoms/SectionHeader';

interface Message {
  email: string;
}

interface ContactProps {
  messages?: Message;
}

const Contact: React.FC<ContactProps> = ({ messages }) => {
  return (
    <div className="flex flex-col items-center sm:items-start">
      <SectionHeader title="Contact" />
      <Card key={'contact'}>
        <div className="flex flex-col items-start">
          <p className="text-xl mb-4 text-black text-start">
            I’m always excited to connect! Whether it's about potential collaborations, job opportunities, or just a chat about projects, feel free to drop a line via email:
          </p>
          <p className="text-lg text-black mb-6 font-bold transition duration-200 ease-in-out hover:text-gray-800 cursor-default">
            {messages?.email}
          </p>
          <button
            className="bg-white text-black px-6 py-3 font-semibold rounded-md hover:bg-[#07B53B] hover:text-white transition duration-300 transform hover:scale-105 cursor-pointer"
            onClick={() => (window.location.href = `mailto:${messages?.email}`)}
          >
            Send Email
          </button>
        </div>
      </Card>
    </div>
  );
};

export default Contact;