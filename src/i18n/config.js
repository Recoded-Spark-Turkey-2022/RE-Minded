import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init ({
  fallbackLng: 'en',
  lng: 'en',
  resources: {
    en: {
      translations: ('./locales/en/translations.json')
    },
    tr: {
      translations: ('./locales/tr/translations.json')
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
});

i18n.languages = ['en', 'tr'];

export default i18n;