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
    <div className="flex flex-col">
      <SectionHeader title="Projects" />
      <div className="flex gap-6 flex-wrap justify-center md:justify-start">
        {messages.map((item, index) => (
          <Card key={index}>
            <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
            <p className="text-sm mb-4">{item.workDate}</p>
            <p className=" mb-4">{item.explanation}</p>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Tech Skills:</h3>
              <div className="flex flex-wrap gap-2">
                {item.techSkills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-[#07B53B] text-white hover:bg-white hover:text-black transition duration-300 px-2 py-1 rounded-full text-sm hover:scale-110 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            {item?.projectLink !== "" ? (
              <a
                href={item.projectLink}
                className="inline-block font-bold py-2 px-4 rounded bg-white text-black transition duration-300 hover:bg-[#07B53B] hover:text-white transform hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            ) : (
              <div className="flex items-center mt-4 bg-white rounded p-3">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p className="text-sm0">Demo not available due to company policy</p>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;