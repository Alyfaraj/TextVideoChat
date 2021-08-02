import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {AvatarsList, RoomList} from '../../components/chatRooms';
import {ContainerView, HeaderBackground} from '../../components/common';
import {Colors, Dimensions} from '../../theme';

const ChatRooms = ({navigation}) => {
  const DemoRooms = [
    {
      id: 'sdfskdf773dfd7373',
      name: 'Ahmed Ali',
      avatar:
        'https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png',
      lastMessage: 'Hey Ali ,please check last message ',
      created_at: '18:00',
    },
    {
      id: 'sdfskdf773gfgd7373',
      name: 'Ahmed Ali',
      avatar:
        'https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png',
      lastMessage: 'Hey Ali ,please check last message ',
      created_at: '18:00',
    },
    {
      id: 'sdfskdf77bvb37373',
      name: 'Ahmed Ali',
      avatar:
        'https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png',
      lastMessage: 'Hey Ali ,please check last message ',
      created_at: '18:00',
    },
    {
      id: 'sdfskdf773we7373',
      name: 'Ahmed Ali',
      avatar:
        'https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png',
      lastMessage: 'Hey Ali ,please check last message ',
      created_at: '18:00',
    },
    {
      id: 'sdfskdf77ssw37373',
      name: 'Ahmed Ali',
      avatar:
        'https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png',
      lastMessage: 'Hey Ali ,please check last message ',
      created_at: '18:00',
    },
    {
      id: 'sdfskdfj7737373',
      name: 'Ahmed Ali',
      avatar:
        'https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png',
      lastMessage: 'Hey Ali ,please check last message ',
      created_at: '18:00',
    },
    {
      id: 'sdfskdf772447373',
      name: 'Ahmed Ali',
      avatar:
        'https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png',
      lastMessage: 'Hey Ali ,please check last message ',
      created_at: '18:00',
    },
  ];

  return (
    <View style={{backgroundColor: Colors.white}}>
      <HeaderBackground>
        <Text numberOfLines={2} style={styles.headerTitle}>
          Chat with {'\n'} your friends
        </Text>
        <AvatarsList />
      </HeaderBackground>
      <RoomList
        items={DemoRooms}
        onPress={() => navigation.navigate('PrivateChat')}
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
