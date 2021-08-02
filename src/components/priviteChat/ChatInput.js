import React from 'react';
import {View, Text, TextInput, StyleSheet, I18nManager} from 'react-native';
import {Icon} from 'react-native-elements';
import {Colors, Dimensions} from '../../theme';

const ChatInput = () => {
  return (
    <View style={styles.sendInputContainer}>
      <TextInput
        // value={message}
        // onChangeText={setMessage}
        multiline
        placeholder="Type your message..."
        style={styles.detailsInput}
      />
      <Icon
        color={Colors.primary}
        name="send-circle"
        size={Dimensions.DEVICE_HEIGHT * 0.04}
        type="material-community"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sendInputContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.inputBackground,
    paddingVertical: Dimensions.DEVICE_HEIGHT * 0.01,
    position: 'absolute',
    bottom: 10,
    justifyContent: 'space-around',
    width: Dimensions.DEVICE_WIDTH * 0.8,
    borderRadius: Dimensions.DEVICE_WIDTH * 0.1,
  },
  detailsInput: {
    width: Dimensions.DEVICE_WIDTH * 0.6,
    //   height: Dimensions.DEVICE_HEIGHT * 0.05,
    alignSelf: 'center',
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    textAlignVertical: 'top',
    paddingHorizontal: 10,
  },
});

export default ChatInput;
