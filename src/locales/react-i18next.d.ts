import 'react-i18next';


import en from './en/translation.json';
import ko from './ko/translation.json';

type DefaultNamespace = typeof ko;

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      ko: DefaultNamespace;
      en: typeof en;
    };
  }
}