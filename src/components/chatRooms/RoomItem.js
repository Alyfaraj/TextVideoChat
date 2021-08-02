import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-elements';
import {useSelector} from 'react-redux';
import {Colors, Dimensions} from '../../theme';
import trimText from '../../utils/trimText';

const RoomItem = ({id, users, avatar, latestMessage, created_at, onPress}) => {
  const {currentUser} = useSelector(state => state.auth);
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.container}>
      <Avatar
        source={{
          uri: users[0].id == currentUser.id ? users[1].image : users[0].image,
        }}
        rounded
        size={Dimensions.DEVICE_HEIGHT * 0.08}
      />
      <View>
        <Text style={styles.name}>
          {users[0].id == currentUser.id ? users[1].name : users[0].name}
        </Text>
        <Text style={styles.lastMessage}>
          {trimText(latestMessage.text, 25)}
        </Text>
      </View>
      <Text style={styles.created_at}>{latestMessage.createdAt}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: Dimensions.DEVICE_WIDTH * 0.9,
    alignSelf: 'center',
    marginVertical: Dimensions.DEVICE_HEIGHT * 0.013,
    alignItems: 'center',
  },
  name: {
    marginStart: Dimensions.DEVICE_WIDTH * 0.03,
    fontSize: Dimensions.DEVICE_HEIGHT * 0.018,
    fontWeight: '700',
    opacity: 0.7,
    marginBottom: Dimensions.DEVICE_HEIGHT * 0.01,
  },
  lastMessage: {
    marginStart: Dimensions.DEVICE_WIDTH * 0.03,
    fontSize: Dimensions.DEVICE_HEIGHT * 0.016,
    fontWeight: '400',
    opacity: 0.6,
  },
  created_at: {
    position: 'absolute',
    right: 0,
    top: Dimensions.DEVICE_HEIGHT * 0.02,
    opacity: 0.4,
  },
});

export default RoomItem;
