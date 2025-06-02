module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/**'
      }
    ],
  },

};