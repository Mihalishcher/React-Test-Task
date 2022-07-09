import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ua from './ua';
import en from './en';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['ua', 'en'],
    detection: {
      order: ['localStorage', 'navigator']
    },
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      ua: {
        translation: ua
      },
      en: {
        translation: en
      },
    }
  });

export default i18n;
