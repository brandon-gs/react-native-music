module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    // BE AWARE: This should be the last
    'react-native-reanimated/plugin',
  ],
};
