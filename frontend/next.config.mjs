export default {
    async rewrites() {
      return [
        {
          source: '/api/auth/:path*',
          destination: process.env.NEXT_PUBLIC_API_URL
            ? `${process.env.NEXT_PUBLIC_API_URL}/api/auth/:path*`
            : 'http://localhost:3001/api/auth/:path*', // Fallback to localhost
        },
      ];
    },
  };
  