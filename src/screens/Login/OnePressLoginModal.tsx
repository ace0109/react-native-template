import {OnePressLoginModalProps} from '@/navigation/types';
import {
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const OnePressLoginModal = ({navigation}: OnePressLoginModalProps) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.goBack();
        }}>
        <View style={styles.mask} />
      </TouchableWithoutFeedback>

      <View style={styles.modal}>
        <Button
          title="一键登录"
          onPress={() => {
            console.log('一键登录');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  mask: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OnePressLoginModal;
