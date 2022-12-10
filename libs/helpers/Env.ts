/**
 * Environment variables
 */
export const Env = {
  NODE_ENV: process.env.NODE_ENV,
  REDUX_LOGGER: process.env.REDUX_LOGGER,
  API_CLIENT_URL: '/api',
  API_SERVER_URL: process.env.BASE_URL,

  isProd() {
    return this.NODE_ENV === 'production';
  },

  isDev() {
    return this.NODE_ENV === 'development';
  },

  isClientSide() {
    return typeof window !== 'undefined';
  },

  isDocument() {
    return typeof document !== 'undefined';
  },

  isReduxLogger() {
    return this.REDUX_LOGGER === 'true';
  },
};

export default Env;
