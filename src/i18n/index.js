import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ua from './ua';
import en from './en';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      order: ['localStorage', 'navigator']
    },
    fallbackLng: 'ua',
    supportedLngs: ['ua', 'en'],
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: en
      },
      ua: {
        translation: ua
      }
    }
  });

export default i18n;
