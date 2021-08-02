import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Dimensions} from '../../theme';
import Colors from '../../theme/Colors';

const ContainerView = ({style, children}) => {
  return (
    <KeyboardAwareScrollView
      nestedScrollEnabled={true}
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}
      style={[styles.contanier, style]}>
      {children}
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    backgroundColor: Colors.white,
    width: '100%',
    height: Dimensions.DEVICE_HEIGHT,
  },
});

export default ContainerView;
