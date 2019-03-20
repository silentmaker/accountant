module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/accountant/'
    : '/',
  devServer: {
    proxy: 'http://localhost:3000',
  },
};
