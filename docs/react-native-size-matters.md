## 屏幕尺寸适配

在 web 开发中，我们会使用 px2rem 或者 px2viewport 来做不同尺寸屏幕的适配

在 react native 中，可以使用 [react-native-size-matters](https://github.com/nirsky/react-native-size-matters)

安装依赖：

```bash
yarn add react-native-size-matters
```

默认使用的换算尺寸为 350dp x 680dp，我们可以通过配置改变换算的尺寸，假设 UI 设计稿尺寸为 390

安装依赖：

```bash
yarn add -D babel-plugin-dotenv-import
```

修改 babel.config.js，在 plugins 里添加 dotenv-import 配置

```js
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@': './src',
        },
      },
    ],
    'react-native-reanimated/plugin',
    [
      'dotenv-import',
      {
        moduleName: '@env',
        path: '.env',
      },
    ],
  ],
};
```

在根目录创建.env 文件

```
SIZE_MATTERS_BASE_WIDTH=390
SIZE_MATTERS_BASE_HEIGHT=844
```

创建全局类型目录 types，创建一个 env.d.ts，后续新增了环境变量方便使用类型提示

```ts
declare module '@env' {
  export const SIZE_MATTERS_BASE_WIDTH: number;
  export const SIZE_MATTERS_BASE_HEIGHT: number;
}
```

尝试在页面输出一下环境变量，读取到就 ok 了

```tsx
import {SIZE_MATTERS_BASE_WIDTH, SIZE_MATTERS_BASE_HEIGHT} from '@env';

...
<Text> SIZE_MATTERS_BASE_WIDTH: {SIZE_MATTERS_BASE_WIDTH} </Text>
<Text> SIZE_MATTERS_BASE_HEIGHT: {SIZE_MATTERS_BASE_HEIGHT} </Text>
...
```

使用了自定义尺寸后，需要从 react-native-size-matters/extend 引入方法

```ts
import {ScaledSheet} from 'react-native-size-matters/extend';
```

修改首页使用示例：

```tsx
import {HomeScreenProps} from '@/navigation/types';
import {Button, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {API_URL} from '@env';
import {scale, ScaledSheet} from 'react-native-size-matters/extend';

const HomeScreen = ({navigation}: HomeScreenProps) => {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.content}>
        <Text style={{fontSize: scale(16)}}> HomeScreen {API_URL} </Text>
        <Button
          title="open main drawer"
          onPress={() => {
            navigation.openDrawer();
          }}
        />

        <Button
          title="open AboutScreen"
          onPress={() => {
            navigation.navigate('About');
          }}
        />

        <Button
          title="open one press login modal"
          onPress={() => {
            navigation.navigate('OnePressLoginModal');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    backgroundColor: 'red',
  },
  content: {
    backgroundColor: '#fff',
    fontSize: '20@s',
  },
});

export default HomeScreen;
```