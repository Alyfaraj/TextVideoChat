import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import {ContainerView, HeaderBackground} from '../../components/common';
import {ChatInput, ChatList, Header} from '../../components/priviteChat';
import {addNewMessage, getPrivateChat} from '../../store/actions/private-chat';
import {Colors, Dimensions} from '../../theme';

const PrivateChat = ({navigation, route}) => {
  const {roomId, username} = route.params;
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const {messages} = useSelector(state => state.privateChat);

  const handelAddNewMessgae = () => {
    dispatch(addNewMessage(roomId, message));
    setMessage('');
    Keyboard.dismiss();
  };

  useEffect(() => {
    dispatch(getPrivateChat(roomId));
  }, []);

  return (
    <View style={{backgroundColor: Colors.white, flex: 1}}>
      <Header username={username} />

      <ChatList chat={messages} />
      <KeyboardAvoidingView behavior="position">
        <ChatInput
          message={message}
          setMessage={setMessage}
          onPress={handelAddNewMessgae}
        />
      </KeyboardAvoidingView>
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
