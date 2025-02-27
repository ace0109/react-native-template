import {AboutScreenProps} from '@/navigation/types';
import {Text, Button, SafeAreaView} from 'react-native';
import {atom, useAtom} from 'jotai';

const countAtom = atom(0);
const doubledCountAtom = atom(get => get(countAtom) * 2);

const AboutScreen = ({}: AboutScreenProps) => {
  const [count, setCount] = useAtom(countAtom);
  const [doubledCount] = useAtom(doubledCountAtom);

  return (
    <SafeAreaView>
      <Text>count: {count}</Text>
      <Text>doubled count: {doubledCount}</Text>
      <Button title="one up" onPress={() => setCount(c => c + 1)} />
    </SafeAreaView>
  );
};

export default AboutScreen;
