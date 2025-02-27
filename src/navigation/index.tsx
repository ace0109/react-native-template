import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList, RoowDrawerStackParamList} from './types';
import HomeTabs from '../screens/HomeTabs/index';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AboutScreen from '@/screens/Settings/AboutScreen';
import OnePressLoginModal from '@/screens/Login/OnePressLoginModal';

const Stack = createNativeStackNavigator<RootStackParamList>();
const RootDrawerStack = createDrawerNavigator<RoowDrawerStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="HomeTabs">
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          presentation: 'transparentModal',
          headerShown: false,
          animation: 'fade_from_bottom',
        }}>
        <Stack.Screen
          name="OnePressLoginModal"
          component={OnePressLoginModal}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

function RootDrawerWrapper() {
  return (
    <RootDrawerStack.Navigator
      initialRouteName="MainDrawer"
      screenOptions={{headerShown: false}}>
      <RootDrawerStack.Screen name="MainDrawer" component={RootStack} />
    </RootDrawerStack.Navigator>
  );
}

export default RootDrawerWrapper;
