import CracoSassPlugin from 'craco-sass';

export default {
  plugins: [
    {
      plugin: CracoSassPlugin,
      options: {
        sassLoaderOptions: {
          implementation: require('sass'),
        },
      },
    },
  ],
};
