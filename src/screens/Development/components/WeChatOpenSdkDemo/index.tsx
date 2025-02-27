import React from 'react';
import {View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters/extend';
import WXOpenSdkModule, { isWechatInstalled, sendAuthRequest } from 'wx-open-sdk-module';
import {LaiButton} from '@/components/LaiCuiUI';
import {WX_APP_ID, WX_UNIVERSAL_LINK} from '@env';

const WeChatOpenSdkDemo = () => {
  return (
    <View style={styles.container}>
      <LaiButton
        theme="primary"
        title="registerApp"
        onPress={() => {
          WXOpenSdkModule.registerApp(WX_APP_ID, WX_UNIVERSAL_LINK);
        }}
      />

      <LaiButton
        theme="primary"
        title="isWechatInstalled"
        onPress={async () => {
          const result = await isWechatInstalled();
          console.log('isWechatInstalled', result);
        }}
      />

      <LaiButton
        theme="primary"
        title="sendAuthRequest"
        onPress={async () => {
          const result = await sendAuthRequest({
            scope: 'snsapi_userinfo',
            state: '123',
          });
          console.log('sendAuthRequest', result);
        }}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '10@s',
  },
});

export default WeChatOpenSdkDemo;
