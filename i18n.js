module.exports = {
  locales: ['ja', 'ko'],
  defaultLocale: 'ja',
  pages: {
    '*': ['common'],
    '/': ['common'],
  },
  interpolation: {
    prefix: '${',
    suffix: '}',
  },
  loadLocaleFrom: async (locale, namespace) =>
    import(`./src/translations/${namespace}_${locale}`).then((r) => r.default),
  logBuild: false,
};
