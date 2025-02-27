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
