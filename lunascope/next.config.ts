import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/team',
            permanent: false, // set to false if this might change in the future
          },
        ];
    },
};

export default nextConfig;
