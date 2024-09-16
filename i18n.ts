// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import HttpApi from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';

// i18n
//   .use(HttpApi)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     fallbackLng: 'en', // default language
//     supportedLngs: ['en', 'ar'], // supported languages
//     interpolation: {
//       escapeValue: false, // React already does escaping
//     },
//     backend: {
//       loadPath: '/locales/{{lng}}/{{ns}}.json', // Where the translation files are located
//     },
//   });

// export default i18n;


// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import your translation files
import enTranslation from "./app/locales/ar/footer.json"
import frTranslation from "./app/locales/en/footer.json"

// Initialize i18next
i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation, // English translations
      },
      fr: {
        translation: frTranslation, // French translations
      },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
