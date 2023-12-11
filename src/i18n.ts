import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import commonTranslations from './translations/common.json';
import homeTranslations from './translations/home.json';
import contactsTranslations from './translations/contacts.json';
import ratesTranslations from './translations/rates.json';
import servicesTranslation from './translations/services.json';
import calculationTranslation from './translations/calculation.json';
import feedbackTranslation from './translations/feedback.json';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        common: commonTranslations.en,
        home: homeTranslations.en,
        contacts: contactsTranslations.en,
        rates: ratesTranslations.en,
        services: servicesTranslation.en,
        calculation: calculationTranslation.en,
        feedback: feedbackTranslation.en,
      },
      ru: {
        common: commonTranslations.ru,
        home: homeTranslations.ru,
        contacts: contactsTranslations.ru,
        rates: ratesTranslations.ru,
        services: servicesTranslation.ru,
        calculation: calculationTranslation.ru,
        feedback: feedbackTranslation.ru,
      },
    },
    fallbackLng: 'en',
    debug: true,
    detection: {
      order: ['localStorage', 'navigator'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
