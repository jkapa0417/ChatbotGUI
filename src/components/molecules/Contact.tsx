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
    <div className="flex flex-col p-4 items-center md:items-start">
      <SectionHeader title="Contact" />
      <Card key={'contact'}>
        <div className="flex flex-col items-center p-12">
          <p className="text-xl text-gray-800 mb-4 text-center">
            I’m always excited to connect! Whether it's about potential collaborations, job opportunities, or just a chat about projects, feel free to drop a line via email:
          </p>
          <p className="text-lg text-blue-600 mb-6 font-bold transition duration-200 ease-in-out hover:text-blue-800">
            {messages?.email}
          </p>
          <button
            className="bg-blue-500 text-white px-6 py-3 font-semibold rounded-full shadow-md hover:bg-blue-600 transition duration-300 transform hover:scale-105"
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