/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const { router } = require('./routers/router');

const { BASE_URL, PORT, REDUX_LOGGER } = process.env;

module.exports = withBundleAnalyzer({
  eslint: {
    dirs: ['.'],
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  poweredByHeader: false,
  basePath: '',
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: ['i.dummyjson.com'],
  },
  env: {
    BASE_URL,
    PORT,
    REDUX_LOGGER,
  },
  async rewrites() {
    return router;
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
});
