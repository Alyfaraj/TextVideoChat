import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors, Dimensions} from '../../theme';
import {useSelector} from 'react-redux';

const ChatDetailsItem = ({
  message = 'Hey Ali , This our frist test text message for ui ',
}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={styles.constianer}>
        <Text style={styles.message}>{message}</Text>
      </View>
      <Text style={styles.date}>01:25 pm</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  constianer: {
    paddingBottom: Dimensions.DEVICE_HEIGHT * 0.02,
    maxWidth: Dimensions.DEVICE_WIDTH * 0.7,
    minWidth: Dimensions.DEVICE_WIDTH * 0.5,
    alignSelf: 'flex-start',
    borderRadius: Dimensions.DEVICE_WIDTH * 0.06,
    paddingHorizontal: Dimensions.DEVICE_WIDTH * 0.04,
    backgroundColor: 'rgb(232,249,242)',
    marginHorizontal: Dimensions.DEVICE_WIDTH * 0.03,
    marginVertical: Dimensions.DEVICE_HEIGHT * 0.01,
    paddingVertical: Dimensions.DEVICE_HEIGHT * 0.01,
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
