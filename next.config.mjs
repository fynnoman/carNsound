/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Serve local /public images directly. Avoids the intermittent
    // "internal image response is empty" error in Next 15 dev-mode
    // that surfaces as a client-side "[object Event]" runtime error.
    unoptimized: true,
  },
};

export default nextConfig;
