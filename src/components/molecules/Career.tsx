import Card from '../atoms/Card';
import SectionHeader from '../atoms/SectionHeader';


interface Message {
  company: string;
  position: string;
  dates: string;
  duration: string;
  location: string;
  department: string;
  responsibilities: string[];
}

interface CareerProps {
  messages?: Message[];
}

const Career: React.FC<CareerProps> = ({ messages }) => {
  return (
    <div className='flex flex-col'>
      <SectionHeader title="Careers" />
      <div className='flex flex-col '>
        <div className="flex gap-4 flex-wrap justify-center md:justify-start">
          {messages?.map((item, index) => (
            <Card key={index}>
              <div className="flex flex-wrap text-black">
                <h2 className="w-full text-2xl font-bold mb-2">{item.company}</h2>
                <h3 className="w-full text-xl font-semibold mb-3">{item.position}</h3>
                <div className="text-sm mb-4 space-y-1">
                  <p className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {item.dates} • {item.duration}
                  </p>
                  <p className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {item.location}
                  </p>
                  <p className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4zm3 1h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1v2h-1v-2zm1-2V9h-1v2h1zm0-4V5h-1v2h1zM9 2v2H7V2h2zm4 0v2h-2V2h2zm2-1v1h-2V1h2zm-4 0v1H9V1h2zm-4 0v1H5V1h2z" clipRule="evenodd" />
                    </svg>
                    {item.department}
                  </p>
                </div>
                <h4 className="text-lg font-medium mb-2"></h4>
                <ul className="list-disc list-inside text-md  space-y-1">
                  {item.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;