import Card from '../atoms/Card';
import SectionHeader from '../atoms/SectionHeader';
import LangGraph from "@assets/langgraph.svg";

interface Skills {
  category: string;
  skills: string[];
}

interface SkillsProps {
  messages?: Skills[];
}

const skillIcons: { [skill: string]: string } = {
  // Frontend Development
  "React.js": "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/react.svg",
  "Svelte": "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/svelte.svg",
  "HTML": "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/html5.svg",
  "CSS": "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/css3.svg",
  "TailwindCSS": "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tailwindcss.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/typescript.svg",
  "Zustand": "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/redux.svg",

  // Backend
  "Node.js": "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/nodedotjs.svg",
  "FastAPI": "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/fastapi.svg",
  "Flask": "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/flask.svg",

  // Data & LLM
  "Python": "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/python.svg",
  "Boto3": "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/amazonwebservices.svg",
  "LangGraph": `${LangGraph}`,
  "Pandas": "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/pandas.svg",
  "Numpy": "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/numpy.svg",
  "Selenium": "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/selenium.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/mysql.svg",
  "Elasticsearch": "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/elasticsearch.svg",
  "Kibana": "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/kibana.svg",
  "Grafana": "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/grafana.svg",
  "Airflow": "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/apacheairflow.svg",
  "Prometheus": "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/prometheus.svg",

  // Cloud
  "AWS": "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/amazonwebservices.svg",
  "GCP": "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googlecloud.svg",
  "Cloudflare": "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/cloudflare.svg",
};

const Skills: React.FC<SkillsProps> = ({ messages }) => {
  return (
    <div className="flex flex-col">
      <SectionHeader title="Skills" />
      <div className="flex gap-6 flex-wrap justify-center md:justify-start">
        {messages?.map((msg, index) => (
          <Card key={index}>
            <div className="flex flex-col items-center text-center">
              <h3 className="text-xl font-semibold mb-3">{msg?.category}</h3>
              <ul className="grid grid-cols-2 lg:grid-cols-3 gap-4 list-disc list-inside">
                {msg?.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex flex-col items-center p-2">
                    {skillIcons[skill] && (
                      <img
                        src={skillIcons[skill]}
                        alt={skill}
                        className="sm:h-10 sm:w-10 h-6 w-6 object-contain mb-2"
                      />
                    )}
                    <span className="text-sm font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Skills;