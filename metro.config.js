const {getDefaultConfig} = require('@react-native/metro-config');

/**
 * 安装react-native-reanimated第三步，做出下面的修改
 * https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/
 */
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');


/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = getDefaultConfig(__dirname);

module.exports = wrapWithReanimatedMetroConfig(config);

