module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src/'],
        alias: {
          '@components': './src/components',
          '@helpers': './src/helpers',
          '@hooks': './src/hooks',
          '@stores': './src/stores',
          '@screens': './src/screens',
          '@network': './src/network',
        },
      },
    ],
  ],
};
