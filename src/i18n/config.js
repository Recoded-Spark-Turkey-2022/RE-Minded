import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init ({
  fallbackLng: 'en',
  lng: 'tr',
  resources: {
    en: {
      translations: './locales/en/translation.json'
    },
    tr: {
      translations: './locales/tr/translation.json'
    }
  },

});

i18n.languages = ['en', 'tr'];

export default i18n;