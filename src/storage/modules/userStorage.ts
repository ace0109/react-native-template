import {MMKV} from 'react-native-mmkv';
import {ENCRYPTION_KEY} from '@env';

export const userStorage = new MMKV({
  id: 'user-storage',
  encryptionKey: ENCRYPTION_KEY,
});
