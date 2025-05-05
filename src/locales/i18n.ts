import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend'; // Optional for server-side translations

import en from './en/translation.json';
import ko from './ko/translation.json';

const resources = {
  en: { translation: en },
  ko: { translation: ko },
};

i18n
  .use(HttpBackend) // Enable this if fetching translations from a server
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ko', // Default language
    fallbackLng: 'ko',
    interpolation: {
      escapeValue: false, // Not needed for React as it escapes by default
    },
  });

export default i18n;