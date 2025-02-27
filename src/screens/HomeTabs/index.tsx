import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import {HomeTabsParamList} from '@/navigation/types';
import {RouteProp} from '@react-navigation/native';
import {IconHome, IconProfile} from '@/components/Iconfont';

const BottomTabNavigator = createBottomTabNavigator<HomeTabsParamList>();

const HomeTabs = () => {
  return (
    <BottomTabNavigator.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => {
        return {
          headerShown: false, // 隐藏头部
          tabBarActiveTintColor: '#000', // 选中颜色
          tabBarInactiveTintColor: '#999', // 未选中颜色
          tabBarActiveBackgroundColor: '#fff', // 选中背景色
          tabBarInactiveBackgroundColor: '#fff', // 未选中背景色
          tabBarLabelStyle: {
            fontSize: 14,
          },
          tabBarIcon: getTabBarIcon(route),
        };
      }}>
      <BottomTabNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{title: '首页'}}
      />
      <BottomTabNavigator.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: '我的'}}
      />
    </BottomTabNavigator.Navigator>
  );
};

const getTabBarIcon =
  (route: RouteProp<HomeTabsParamList, keyof HomeTabsParamList>) =>
  (props: {focused: boolean; color: string; size: number}) => {
    switch (route.name) {
      case 'Home':
        return <IconHome color={props.color} size={24} />;
      case 'Profile':
        return <IconProfile color={props.color} size={24} />;
      default:
        return null;
    }
  };

export default HomeTabs;
