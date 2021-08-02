import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import {Colors, Dimensions} from '../../theme';

const HeaderBackground = ({children}) => {
  return (
    <View style={{backgroundColor: Colors.primary}}>
      <ImageBackground
        style={{width: '100%', minHeight: Dimensions.DEVICE_HEIGHT * 0.2}}
        imageStyle={{
          opacity: 0.04,
          resizeMode: 'cover',
          height: '100%',
          width: '100%',
        }}
        source={require('../../assets/images/backgroundpattern.png')}>
        <View style={styles.container}>
          {children}
          <View style={styles.borderBottom} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: Colors.primary,
    minHeight: Dimensions.DEVICE_HEIGHT * 0.2,
    width: Dimensions.DEVICE_WIDTH,
    //  justifyContent: 'space-around',
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
