import React from 'react';
import Card from '../atoms/Card';
import SectionHeader from '../atoms/SectionHeader';

interface Message {
  question: string;
  answer: string;
}

interface AboutMeProps {
  messages?: Message[];
}

const AboutMe: React.FC<AboutMeProps> = ({ messages = [] }) => {
  return (
    <div className="flex flex-col p-4">
      <SectionHeader title="About Me"/>
      <div className="flex mt-4 gap-4 flex-wrap justify-center md:justify-start">
        {messages.map((item, index) => (
          <Card key={index}>
            <h2 className="text-xl font-semibold mb-4 text-gray-800 pl-12">{item.question}</h2>
            <p
              className="text-gray-600 pl-12"
            >
              {item.answer}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;