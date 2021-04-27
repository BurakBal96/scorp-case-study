import i18next from 'i18next'
import en from 'locales/en/translation.json'
import tr from 'locales/tr/translation.json'

i18next.init({
  interpolation: {escapeValue: false}, // React already does escaping
  lng: 'en', // language to use
  // parseMissingKeyHandler: (key) => {console.log('MISSING KEY',{key})},
  keySeparator: false, // we do not use keys in form messages.welcome
  react: {
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'span'], // don't convert to <1></1> if simple react elements
  },
  resources: {
    'en': {
      translation: en,
    },
    tr: {
      translation: tr,
    },
  },
})

export default i18next
