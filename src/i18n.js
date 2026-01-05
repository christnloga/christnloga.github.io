import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          // Registration form
          happy: 'Happy',
          new: 'New',
          year: 'Year',
          beforeProfile: 'A new year begins.',
          beforeProfile2: 'So do new ideas.',
          sectionTitle1: 'From first idea to final launch',
          sectionTitle2: 'Full web portfolio coming soon, stay tuned!',
          sectionDesc1: 'Design, development, and structure working together',
          sectionDesc2: 'Follow my activities on:',
          openForBusiness: 'Now open for new collaborations in 2026',
        }
      },

      fr: {
        translation: {
          // Registration form
          happy: 'Happy',
          new: 'New',
          year: 'Year',
          beforeProfile: 'Une nouvelle année commence.',
          beforeProfile2: 'Tout comme les nouvelles idées.',
          sectionTitle1: 'De l\'idée initiale au lancement final',
          sectionTitle2: 'Portfolio web en cours, restez connecté!',
          sectionDesc1: 'Design, développement et structure travaillant ensemble',
          sectionDesc2: 'Suivez mes activités sur:',
          openForBusiness: 'Ouvert à de nouvelles collaborations pour 2026',
        }
      }
    }
  });

export default i18n;