import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors, Dimensions} from '../../theme';

const HeaderBackground = ({children}) => {
  return (
    <View style={styles.container}>
      {children}
      <View style={styles.borderBottom} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    height: Dimensions.DEVICE_HEIGHT * 0.27,
    width: Dimensions.DEVICE_WIDTH,
  },
  borderBottom: {
    position: 'absolute',
    bottom: -1,
    width: Dimensions.DEVICE_WIDTH,
    height: Dimensions.DEVICE_HEIGHT * 0.04,
    borderTopEndRadius: Dimensions.DEVICE_WIDTH * 0.2,
    borderTopStartRadius: Dimensions.DEVICE_WIDTH * 0.2,
    backgroundColor: Colors.white,
  },
});

export default HeaderBackground;
