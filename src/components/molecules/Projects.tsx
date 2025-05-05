import SectionHeader from "../atoms/SectionHeader";
import Card from "../atoms/Card";

interface ProjectsContents {
  name: string;
  workDate: string;
  techSkills: string[];
  explanation: string;
  projectLink: string;
}

interface ProjectsProps {
  messages?: ProjectsContents[];
}

const Projects: React.FC<ProjectsProps> = ({ messages = [] }) => {
  return (
    <div className="flex flex-col p-4">
      <SectionHeader title="Projects" />
      <div className="flex gap-6 flex-wrap justify-center md:justify-start">
        {messages.map((item, index) => (
          <Card key={index}>
            <div className="pl-12">
              <h2 className="text-2xl font-bold mb-2 text-gray-800">{item.name}</h2>
              <p className="text-sm text-gray-600 mb-4">{item.workDate}</p>
              <p className="text-gray-700 mb-4">{item.explanation}</p>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Tech Skills:</h3>
                <div className="flex flex-wrap gap-2">
                  {item.techSkills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              {item?.projectLink !== "" ? (
                <a
                  href={item.projectLink}
                  className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              ) : (
                <div className="flex items-center mt-4 bg-gray-100 border border-gray-300 rounded p-3">
                  <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <p className="text-sm text-gray-600">Demo not available due to company policy</p>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;