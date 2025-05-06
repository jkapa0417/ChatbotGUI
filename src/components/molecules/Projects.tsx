import SectionHeader from "../atoms/SectionHeader";
import Card from "../atoms/Card";
import { useTranslation } from 'react-i18next';

interface ProjectsContents {
  name: string;
  workDate: string;
  techSkills: string[];
  explanation: string;
  projectLink: string;
  process: string[];
  developed: string[];
}

interface ProjectsProps {
  messages?: ProjectsContents[];
}

const Projects: React.FC<ProjectsProps> = ({ messages = [] }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col">
      <SectionHeader title={t('projects')} />
      <div className="flex gap-6 flex-wrap justify-center sm:justify-start items-start">
        {messages.map((item, index) => (
          <Card key={index}>
            <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
            <p className="text-sm mb-4">{item.workDate}</p>
            <p className=" mb-4">{item.explanation}</p>
            <h3 className="text-lg font-semibold mb-2">{t('process')}</h3>
            <div className="mb-4">
              <ul>
                {item?.process?.map((pro, proIndex) => {
                  return (
                    <li className="py-2" key={proIndex}>- {pro}</li>
                  )
                })}
              </ul>
            </div>
            <h3 className="text-lg font-semibold mb-2">{t('developed')}</h3>
            <div className="mb-4">
              <ul className="">
                {item?.developed?.map((dev, devIndex) => {
                  return (
                    <li className="py-2" key={devIndex}>- {dev}</li>
                  )
                })}
              </ul>
            </div>
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {item?.techSkills?.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-[#67AE6E] text-white hover:bg-white hover:text-black transition duration-300 px-2 py-1 rounded-full text-sm hover:scale-110 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-4">
              {item?.projectLink !== "" ? (
                <a
                  href={item.projectLink}
                  className="inline-block font-bold py-2 px-4 rounded bg-white text-black transition duration-300 hover:bg-[#67AE6E] hover:text-white transform hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('view_project')}
                </a>
              ) : (
                <div className="flex items-center mt-4 bg-white rounded p-3">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <p className="text-sm0">{t('no_demo')}</p>
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