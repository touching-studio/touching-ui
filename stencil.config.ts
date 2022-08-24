import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'touching-ui',
  globalScript: './src/globals/global.ts',
  globalStyle: './src/globals/global.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
