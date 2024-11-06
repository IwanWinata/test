/** @type {import('next').NextConfig} */
import 'dotenv/config'
const nextConfig = {
  basePath: '/contractor',
  output: 'standalone',
  env: {
    DB_USER: process.env.DB_USER,
    DB_HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_PORT: process.env.DB_PORT,
    INSTAGRAM_LINK: process.env.INSTAGRAM_LINK,
    YOUTUBE_LINK: process.env.YOUTUBE_LINK,
    FACEBOOK_LINK: process.env.FACEBOOK_LINK,
    LINKEDIN_LINK: process.env.LINKEDIN_LINK,
    TIKTOK_LINK: process.env.TIKTOK_LINK,
  },
};

export default nextConfig;
