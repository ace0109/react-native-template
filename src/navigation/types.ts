import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

/**
 * 根堆栈导航的参数列表类型
 * @typedef RootStackParamList
 * @property {NavigatorScreenParams<HomeTabsParamList>} HomeTabs - 主页标签页导航参数
 * @property {undefined} About - 关于页面
 */
export type RootStackParamList = {
  HomeTabs: NavigatorScreenParams<HomeTabsParamList>;
  About: undefined;
  OnePressLoginModal: undefined;
};

/**
 * 根抽屉导航的参数列表类型
 * @typedef RoowDrawerStackParamList
 * @property {undefined} MainDrawer - 主抽屉页面
 */
export type RoowDrawerStackParamList = {
  MainDrawer: undefined;
};

/**
 * 根堆栈屏幕属性类型
 * 组合了原生堆栈导航属性和抽屉导航属性
 * @template T - 根堆栈参数列表中的键
 */
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<RootStackParamList, T>,
    DrawerScreenProps<RoowDrawerStackParamList>
  >;

  /**
 * 主页标签页导航的参数列表类型
 * @typedef HomeTabsParamList
 * @property {undefined} Home - 主页
 * @property {undefined} Profile - 个人资料页
 */
export type HomeTabsParamList = {
  Home: undefined;
  Profile: undefined;
};

/**
 * 主页屏幕属性类型
 * 组合了底部标签页导航属性和根堆栈导航属性
 */
export type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<HomeTabsParamList, 'Home'>,
  RootStackScreenProps<'HomeTabs'>
>;

/**
 * 个人资料页屏幕属性类型
 * 组合了底部标签页导航属性和根堆栈导航属性
 */
export type ProfileScreenProps = CompositeScreenProps<
  BottomTabScreenProps<HomeTabsParamList, 'Profile'>,
  RootStackScreenProps<'HomeTabs'>
>;

/**
 * 关于页面的屏幕属性类型
 */
export type AboutScreenProps = RootStackScreenProps<'About'>;

/**
 * 一键登录模态框的屏幕属性类型
 */
export type OnePressLoginModalProps = RootStackScreenProps<'OnePressLoginModal'>;

declare global {
  namespace ReactNavigation {
    /**
     * 全局导航参数列表
     */
    interface RootParamList extends RootStackParamList {}
  }
}
