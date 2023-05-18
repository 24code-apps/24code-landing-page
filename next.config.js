/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
