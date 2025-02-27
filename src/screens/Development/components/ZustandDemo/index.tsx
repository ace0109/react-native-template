import React from 'react';
import {Text, View} from 'react-native';
import {userStore} from '@/store';
import {ScaledSheet} from 'react-native-size-matters/extend';
import Markdown from 'react-native-markdown-display';
import {LaiButton} from '@/components/LaiCuiUI';
import {v4 as uuidv4} from 'uuid';

const ZustandDemo = () => {
  const {userInfo, setUserInfo, token, setToken} = userStore();

  const userInfoMarkdown = `
  ### UserInfo：
  \`\`\`json
  ${JSON.stringify(userInfo)}
  \`\`\`
  `;

  return (
    <View style={styles.container}>
      <Markdown>{userInfoMarkdown}</Markdown>

      <LaiButton
        title="Set UserInfo"
        theme="primary"
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

      <Text>token: {token}</Text>

      <LaiButton
        title="Set Token"
        theme="primary"
        onPress={() => {
          setToken(uuidv4());
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
    gap: '20@s',
  },
});

export default ZustandDemo;
