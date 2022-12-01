module.exports = {
  stories: [
    '../app/components/**/*.stories.?(ts|tsx|js|jsx)',
    '../app/components/.stories.?(ts|tsx|js|jsx)',
  ],
  babel: async (options) => {
    return {
      ...options,
      plugins: [
        ...options.plugins,
        [
          'module-resolver',
          {
            root: ['../app'],
            extensions: [
              '.ios.js',
              '.android.js',
              '.js',
              '.ts',
              '.tsx',
              '.json',
              '.stories.tsx',
            ],
            alias: {
              '@components': '../app/components/index.ts',
              '@config': '../app/config/index.ts',
              '@services': '../app/api/index.ts',
              '@screens': '../app/screens/index.ts',
              '@assets': '../app/assets/index.ts',
              '@languages': '../app/i18n/index.ts',
              '@navigators': '../app/navigators/index.ts',
              '@utils': '../app/utils/index.ts',
            },
          },
        ],
      ],
    };
  },
  addons: [
  ],
  framework: "@storybook/react",
};