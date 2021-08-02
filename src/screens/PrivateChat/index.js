import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {ContainerView, HeaderBackground} from '../../components/common';
import {ChatInput, ChatList, Header} from '../../components/priviteChat';
import {Colors, Dimensions} from '../../theme';

const PrivateChat = ({navigation}) => {
  return (
    <View style={{backgroundColor: Colors.white, flex: 1}}>
      <Header />
      <ChatList chat={[1, 2, 3, 4, 5, 6, 7, 8]} />
      <ChatInput />
    </View>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    marginTop: Dimensions.DEVICE_HEIGHT * 0.01,
    fontSize: Dimensions.DEVICE_HEIGHT * 0.03,
    color: Colors.white,
    fontWeight: '800',
    marginStart: Dimensions.DEVICE_WIDTH * 0.02,
    fontStyle: 'italic',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Dimensions.DEVICE_WIDTH * 0.9,
    alignSelf: 'center',
  },
  backSearchText: {
    color: Colors.white,
    opacity: 0.7,
  },
  iconBackground: {
    padding: Dimensions.DEVICE_WIDTH * 0.02,
    backgroundColor: 'rgba(256,256,256,.4)',
    borderRadius: Dimensions.DEVICE_WIDTH * 0.1,
    marginStart: 10,
  },
});

export default PrivateChat;
