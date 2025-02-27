import React, {Suspense, useMemo} from 'react';
import {Text, View} from 'react-native';
import {atom, useAtom} from 'jotai';
import {LaiButton} from '@/components/LaiCuiUI';
import {ScaledSheet} from 'react-native-size-matters/extend';
import {globalBooleanAtom} from './utils';
import {useImmerAtom} from 'jotai-immer';
import ProtocolsCheckbox from '@/components/common/ProtocolsCheckbox';

const countAtom = atom(0);
const doubledCountAtom = atom(get => get(countAtom) * 2);
const asyncAtom = atom(async get => {
  return new Promise<number>(resolve => {
    setTimeout(() => {
      resolve(get(countAtom) * 2);
    }, 1000);
  });
});

function AsyncAtomComponent() {
  const [asyncValue] = useAtom(asyncAtom);

  return (
    <>
      <Text>async count: {asyncValue}</Text>
    </>
  );
}

const protocolsCheckedAtom = atom(false);

const objectAtom = atom({value: 0});

const JotaiDemo = () => {
  const [count, setCount] = useAtom(countAtom);
  const [doubledCount] = useAtom(doubledCountAtom);

  const [globalAtom, setGlobalAtom] = useAtom(globalBooleanAtom);

  const [protocolsChecked, setProtocolsChecked] = useAtom(protocolsCheckedAtom);

  const [obj, setObj] = useImmerAtom(objectAtom);

  const menoAtom = useMemo(() => atom(1), []);
  const [menuAtomValue, setMenuAtomValue] = useAtom(menoAtom);

  return (
    <View style={styles.container}>
      <Text>count: {count}</Text>
      <Text>doubled count: {doubledCount}</Text>
      <Suspense fallback={<Text>Loading...</Text>}>
        <AsyncAtomComponent />
      </Suspense>
      <LaiButton
        theme="primary"
        title="one up"
        onPress={() => setCount(c => c + 1)}
      />
      <Text>globalAtom: {String(globalAtom)}</Text>

      <LaiButton
        theme="primary"
        title="setGlobalAtom"
        onPress={() => setGlobalAtom(true)}
      />

      <Text>protocolsChecked: {String(protocolsChecked)}</Text>

      <ProtocolsCheckbox
        checked={protocolsChecked}
        onChange={setProtocolsChecked}
      />

      <LaiButton
        theme="primary"
        title="同意协议"
        onPress={() => setProtocolsChecked(true)}
      />

      <Text>obj.value: {obj.value}</Text>
      <LaiButton
        theme="primary"
        title="同意协议"
        onPress={() => {
          setObj(draft => {
            draft.value += 1;
          });
        }}
      />

      <Text>menuAtomValue: {menuAtomValue}</Text>

      <LaiButton
        theme="primary"
        title="setMenuAtomValue"
        onPress={() => {
          setMenuAtomValue(v => v + 1);
        }}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20@vs',
  },
});

export default JotaiDemo;
