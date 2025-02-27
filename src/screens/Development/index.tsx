import {IconClose} from '@/components/Iconfont';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, SectionList, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {scale, ScaledSheet} from 'react-native-size-matters/extend';
import * as Components from './components';

// Create a components mapping
const ComponentsMap: {[key: string]: React.ComponentType<any>} = {
  JotaiDemo: Components.JotaiDemo,
  ZustandDemo: Components.ZustandDemo,
  TurboNativeModulesDemo: Components.TurboNativeModulesDemo,
  WeChatOpenSdkDemo: Components.WeChatOpenSdkDemo,
  // ... add other components
};

// Dynamic component rendering function
const DynamicComponent: React.FC<{ componentName: string }> = ({ componentName }) => {
  // Get component from mapping
  const Component = ComponentsMap[componentName];

  if (!Component) {
    return <Text>Component {componentName} not found</Text>;
  }

  return <Component />;
};


const DATA = [
  {
    title: 'jotai：useState替代方案',
    data: ['JotaiDemo'],
  },
  {
    title: 'zustand：全局状态管理',
    data: ['ZustandDemo'],
  },
  {
    title: 'Turbo Native modules',
    data: ['TurboNativeModulesDemo'],
  },
  {
    title: '微信 open sdk',
    data: ['WeChatOpenSdkDemo'],
  },
];

type ItemProps = {title: string; data: string[]};

const SectionTitle = ({title}: Pick<ItemProps, 'title'>) => (
  <Text style={styles.sectionTitle}>{title}</Text>
);

const SectionItem = ({componentName}: {componentName: string}) => {
  return (
    <View style={styles.sectionItem}>
      <DynamicComponent componentName={componentName} />
    </View>
  );
};

const DevelopmentScreen = () => {
  const {top, bottom} = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View style={[styles.container, {paddingBottom: bottom}]}>
      <View style={[styles.headerBar, {paddingTop: top}]}>
        <View style={styles.headerBarLeft}>
          <Pressable
            style={styles.closeButton}
            onPress={() => navigation.goBack()}>
            <IconClose color="#0F1702" size={scale(14)} />
          </Pressable>
        </View>

        <Text style={styles.headerBarTitle}>开发者菜单</Text>
        <View style={styles.headerBarRight} />
      </View>
      <SectionList
        style={styles.sectionList}
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <SectionItem componentName={item} />}
        renderSectionHeader={({section: {title}}) => (
          <SectionTitle title={title} />
        )}
        stickySectionHeadersEnabled={true}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  headerBar: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '10@s',
    backgroundColor: '#fff',
  },
  headerBarLeft: {
    width: '50@s',
  },
  closeButton: {
    padding: '10@s',
  },
  headerBarTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: '16@s',
    fontWeight: '500',
  },
  headerBarRight: {
    width: '50@s',
  },
  sectionList: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: '16@s',
    fontWeight: '500',
    backgroundColor: '#f2f2f2',
    padding: '10@s',
    borderRadius: '5@s',
    marginBottom: '1@s',
  },
  sectionItem: {
    padding: '10@s',
    backgroundColor: '#fff',
    borderRadius: '5@s',
    marginVertical: '5@s',
  },
});

export default DevelopmentScreen;
