const withImages = require('next-images');

module.exports = withImages({
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? '/webclass.org-template' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/webclass.org-template' : '',
  publicRuntimeConfig: {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/webclass.org-template' : '',
  },
  images: {
    unoptimized: true,
  },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
});
