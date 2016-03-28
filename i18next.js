import i18n from 'i18next'

i18n.init({
  defaultNS: 'common',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  lng: 'en',
  ns: ['common'],
  resources: {
    en: {
      common: {
        test_string: 'This is a test string from i18next.'
      }
    }
  }
})

export default i18n
