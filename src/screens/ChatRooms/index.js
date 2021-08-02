import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View, ActivityIndicator} from 'react-native';
import {AvatarsList, RoomList} from '../../components/chatRooms';
import {ContainerView, HeaderBackground} from '../../components/common';
import {Colors, Dimensions} from '../../theme';
import firestore from '@react-native-firebase/firestore';
import {useDispatch, useSelector} from 'react-redux';
import {getUsers} from '../../store/actions/users';
import {createNewChat, getMyRooms} from '../../store/actions/chat-rooms';

const ChatRooms = ({navigation}) => {
  const dispatch = useDispatch();
  const {loading, users} = useSelector(state => state.users);
  const {rooms} = useSelector(state => state.chatRooms);
  const {currentUser} = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handelCreateNewChat = reciver => {
    dispatch(createNewChat(reciver));
  };

  useEffect(() => {
    dispatch(getMyRooms());
  }, []);

  return (
    <View style={{backgroundColor: Colors.white}}>
      <HeaderBackground>
        <Text numberOfLines={2} style={styles.headerTitle}>
          Chat with {'\n'} your friends
        </Text>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <AvatarsList users={users} onPress={handelCreateNewChat} />
        )}
      </HeaderBackground>
      <RoomList
        items={rooms}
        onPress={item =>
          navigation.navigate('PrivateChat', {
            roomId: item.channalId,
            username:
              currentUser.id == item.users[0].id
                ? item.users[1].name
                : item.users[0].name,
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    marginTop: Dimensions.DEVICE_HEIGHT * 0.06,
    fontSize: Dimensions.DEVICE_HEIGHT * 0.03,
    color: Colors.white,
    fontWeight: '800',
    marginStart: Dimensions.DEVICE_WIDTH * 0.08,
    fontStyle: 'italic',
  },
  avatarScrollList: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ChatRooms;
