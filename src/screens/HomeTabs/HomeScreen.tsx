import {HomeScreenProps} from '@/navigation/types';
import {Button, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScaledSheet} from 'react-native-size-matters/extend';
import {useAtom} from 'jotai';
import {atomWithImmer} from 'jotai-immer';

const userAtom = atomWithImmer({
  name: 'John',
  profile: {
    address: {
      city: 'Shanghai',
    },
  },
});

const HomeScreen = ({}: HomeScreenProps) => {
  const [user, setUser] = useAtom(userAtom);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.content}>
        <Text>{JSON.stringify(user)}</Text>

        <Button
          title="updateUser"
          onPress={() => {
            setUser(draft => {
              draft.name = 'Lai';
              draft.profile.address.city = 'Beijing';
            });
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
