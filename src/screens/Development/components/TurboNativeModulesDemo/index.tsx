import {LaiButton} from '@/components/LaiCuiUI';
import React, {useEffect} from 'react';
import {Alert, EventSubscription, View} from 'react-native';
import TurboNativeDemo, {multiply} from 'turbo-native-demo';

const TurboNativeModulesDemo = () => {
  const listenerSubscription = React.useRef<null | EventSubscription>(null);

  useEffect(() => {
    listenerSubscription.current = TurboNativeDemo.onValueChanged(data => {
      Alert.alert(`Result: ${data}`);
    });

    return () => {
      listenerSubscription.current?.remove();
      listenerSubscription.current = null;
    };
  }, []);

  const testTurboNativeModules = async () => {
    try {
      const res = multiply(2, 3);
      console.log('res', res);
    } catch (error) {
      console.error('WeChat init error:', error);
    }
  };
  return (
    <View>
      <LaiButton
        title="Test Turbo Native Modules"
        theme="primary"
        onPress={() => {
          testTurboNativeModules();
        }}
      />
    </View>
  );
};

export default TurboNativeModulesDemo;
