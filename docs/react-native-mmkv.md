## 本地缓存

[react-native-mmkv](https://github.com/mrousavy/react-native-mmkv)

```shell
yarn add react-native-mmkv
```

使用

```ts
import {MMKV, Mode} from 'react-native-mmkv';

export const storage = new MMKV({
  id: `user-${userId}-storage`,
  path: `${USER_DIRECTORY}/storage`,
  encryptionKey: 'da98s7das7d9a8s7d9as87',
  mode: Mode.MULTI_PROCESS,
  readOnly: false,
});
```

我们创建一个 storage 模块，用来管理本地缓存

```ts
// src/storage/modules/userStorage.ts
import {MMKV} from 'react-native-mmkv';
import {ENCRYPTION_KEY} from '@env';

export const userStorage = new MMKV({
  id: 'user-storage',
  encryptionKey: ENCRYPTION_KEY,
});
```

创建一个入口文件导出

```ts
// src/storage/index.ts
export * from './modules/userStorage';
```

修改首页查看效果：

```tsx
import {HomeScreenProps} from '@/navigation/types';
import {Button, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {API_URL} from '@env';
import {scale, ScaledSheet} from 'react-native-size-matters/extend';
import {userStorage} from '@/storage';
import {useMMKVString} from 'react-native-mmkv';

const HomeScreen = ({}: HomeScreenProps) => {
  // const token = userStorage.getString('token');
  const [token, setToken] = useMMKVString('token', userStorage);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.content}>
        <Text style={{fontSize: scale(16)}}> HomeScreen {API_URL} </Text>
        <Button
          title="set user token"
          onPress={() => {
            // userStorage.set('token', '123456');
            setToken('6789');
          }}
        />

        <Text>token: {token || '-'}</Text>
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