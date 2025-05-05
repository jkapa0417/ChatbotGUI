import React from 'react';
import Card from '../atoms/Card';
import SectionHeader from '../atoms/SectionHeader';
import { useTranslation } from 'react-i18next';

interface Message {
  question: string;
  answer: string;
}

interface AboutMeProps {
  messages?: Message[];
}

const AboutMe: React.FC<AboutMeProps> = ({ messages = [] }) => {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col items-center sm:items-start">
      <SectionHeader title={t('about_me')} />
      <div className="flex gap-4 flex-wrap justify-center sm:justify-start">
        {messages.map((item, index) => (
          <Card key={index}>
            <h2 className="text-xl font-semibold mb-4">{item.question}</h2>
            <p>
              {item.answer}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;