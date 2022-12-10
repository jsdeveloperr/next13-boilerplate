const { BASE_URL } = process.env;

module.exports = {
  router: [
    {
      source: '/api/:path*',
      destination: `${BASE_URL}/:path*`, // Proxy to Backend
    },
    {
      source: '/',
      destination: '/product',
    },
  ],
};
