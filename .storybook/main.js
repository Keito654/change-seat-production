const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    '@storybook/addon-interactions',
  ],
  webpackFinal: async (baseConfig) => {
    baseConfig.resolve.modules = [
      ...(baseConfig.resolve.modules || []),
      path.resolve(__dirname, '../'),
    ];
    return baseConfig;
  },
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
};
