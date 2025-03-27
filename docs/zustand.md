## 全局状态管理 [zustand](https://github.com/pmndrs/zustand)

```bash
yarn add zustand
```

将全局状态管理 zustand 与 本地缓存 react-native-mmkv 配合完成状态持久化

创建以下文件：

```ts
import {userStorage} from '@/storage/index';
import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';

interface UserInfo {
  userId: string;
  username: string;
}

interface UserState {
  userInfo: UserInfo | null;
  token: string | null;
  setUserInfo: (userInfo: UserInfo) => void;
  setToken: (token: string) => void;
}

export const userStore = create<UserState>()(
  persist(
    set => ({
      userInfo: null,
      token: null,
      setUserInfo: (userInfo: UserInfo) => {
        set(() => {
          return {
            userInfo,
          };
        });
      },
      setToken: token =>
        set(() => {
          return {
            token,
          };
        }),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => ({
        setItem: (key: string, value: any) => {
          return userStorage.set(key, value);
        },
        getItem: (key: string) => {
          const value = userStorage.getString(key);
          return value ?? null;
        },
        removeItem: (key: string) => {
          return userStorage.delete(key);
        },
      })),
    },
  ),
);
```

修改首页演示效果

```tsx
import {HomeScreenProps} from '@/navigation/types';
import {Button, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {API_URL} from '@env';
import {scale, ScaledSheet} from 'react-native-size-matters/extend';
import {userStore} from '@/store';

const HomeScreen = ({}: HomeScreenProps) => {
  const {userInfo, setUserInfo, token, setToken} = userStore();

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

        <Button
          title="set user info"
          onPress={() => {
            const randomId = Math.random().toString(36).substring(2, 11);
            const names = [
              'Alice',
              'Bob',
              'Charlie',
              'David',
              'Eva',
              'Frank',
              'Grace',
            ];
            const randomName = names[Math.floor(Math.random() * names.length)];
            setUserInfo({userId: randomId, username: randomName});
          }}
        />

        <Text>user id: {userInfo?.userId || '-'}</Text>
        <Text>user name: {userInfo?.username || '-'}</Text>
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

