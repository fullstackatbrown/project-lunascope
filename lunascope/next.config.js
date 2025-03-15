/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lunascope.org",
      },
      {
        protocol: "https",
        hostname: "bpb-us-w2.wpmucdn.com",
      },
      {
        protocol: "https",
        hostname: "amazingmagnets.com",
      },
      {
        protocol: "https",
        hostname: "www.meteorologiaenred.com",
      },
    ],
  },
};

module.exports = nextConfig;
