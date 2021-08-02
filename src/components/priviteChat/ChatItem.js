import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors, Dimensions} from '../../theme';
import {useSelector} from 'react-redux';
import {timeConverter} from '../../utils/timeConverter';
import {Avatar} from 'react-native-elements';
import trimText from '../../utils/trimText';

const ChatDetailsItem = ({createdAt, messageText, user}) => {
  const {currentUser} = useSelector(state => state.auth);

  return (
    <View
      style={{
        flexDirection: user.id !== currentUser.id ? 'row' : 'row-reverse',
        alignItems: 'center',
        marginStart: 10,
      }}>
      {user.id !== currentUser.id && (
        <Avatar
          rounded
          source={{uri: user.image}}
          size={Dimensions.DEVICE_HEIGHT * 0.03}
        />
      )}
      <View
        style={[
          styles.constianer,
          {
            backgroundColor:
              user.id !== currentUser.id
                ? Colors.messageBack
                : Colors.inputBackground,
          },
        ]}>
        <Text style={styles.message}>{messageText}</Text>
      </View>
      <Text style={styles.date}>
        {trimText(new Date(createdAt).toLocaleTimeString(), 5)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  constianer: {
    paddingBottom: Dimensions.DEVICE_HEIGHT * 0.02,
    maxWidth: Dimensions.DEVICE_WIDTH * 0.8,
    minWidth: Dimensions.DEVICE_WIDTH * 0.6,
    alignSelf: 'flex-start',
    borderRadius: Dimensions.DEVICE_WIDTH * 0.06,
    paddingHorizontal: Dimensions.DEVICE_WIDTH * 0.04,
    backgroundColor: 'rgb(232,249,242)',
    marginHorizontal: Dimensions.DEVICE_WIDTH * 0.03,
    marginVertical: Dimensions.DEVICE_HEIGHT * 0.01,
    paddingVertical: Dimensions.DEVICE_HEIGHT * 0.02,
    borderBottomEndRadius: 0,
  },

  message: {
    marginTop: Dimensions.DEVICE_HEIGHT * 0.006,
    textAlign: 'left',
    color: Colors.blackSecondary,
    fontSize: Dimensions.DEVICE_HEIGHT * 0.016,
  },
  date: {
    textAlign: 'left',
    fontSize: Dimensions.DEVICE_HEIGHT * 0.016,
    color: Colors.mainText,
    opacity: 0.5,
    //  marginTop:-5,
    marginTop: Dimensions.DEVICE_HEIGHT * 0.01,
  },
});

export default ChatDetailsItem;
