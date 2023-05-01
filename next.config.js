/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

const withImages = require('next-images');

module.exports = withImages({
  basePath: process.env.NODE_ENV === 'production' ? '/webclass.org-template' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/webclass.org-template' : '',
  publicRuntimeConfig: {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/webclass.org-template' : '',
  },
});
