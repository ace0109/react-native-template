import {ProfileScreenProps} from '@/navigation/types';
import React from 'react';
import {Button, Text, View} from 'react-native';

const ProfileScreen = ({navigation}: ProfileScreenProps) => {
  return (
    <View>
      <Text> ProfileScreen </Text>
      <Button
        title="Go to Home"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
};

export default ProfileScreen;
