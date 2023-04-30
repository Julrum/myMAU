/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin');

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['ja', 'ko'],
    defaultLocale: 'ja',
  },
};

module.exports = nextTranslate(nextConfig);
