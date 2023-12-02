module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src/'],
        alias: {
          '@simba/components': './src/components',
          '@simba/helpers': './src/helpers',
          '@simba/hooks': './src/hooks',
          '@simba/stores': './src/stores',
          '@simba/screens': './src/screens',
          '@simba/network': './src/network',
        },
      },
    ],
  ],
};
