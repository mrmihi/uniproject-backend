import context from 'express-http-context';

export * from './config.js';
export * from './json.js';
export * from './jwt.js';
export * from './response.js';

export const isFromAdmin = () => context.get('origin') === 'admin';

export const isProduction = process.env.APP_ENV === 'production';

// TODO: Replace this with your own repo if you are forking this project
export const rawRepoUrl = `https://raw.githubusercontent.com/mrmihi/uniproject-backend/${
  isProduction ? 'main' : 'development'
}`;
