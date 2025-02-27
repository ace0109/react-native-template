/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

/**
 * 安装react-native-reanimated，添加下面import
 * https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/
 */
import './gesture-handler';

AppRegistry.registerComponent(appName, () => App);
