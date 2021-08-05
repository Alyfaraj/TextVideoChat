import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  I18nManager,
  Platform,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {Colors, Dimensions} from '../../theme';

const ChatInput = ({message, setMessage, onPress}) => {
  return (
    <View
      style={{
        width: Dimensions.DEVICE_WIDTH,
        height: Dimensions.DEVICE_HEIGHT * 0.08,
        backgroundColor: Colors.white,
      }}>
      <View style={styles.sendInputContainer}>
        <TextInput
          value={message}
          onChangeText={setMessage}
          multiline
          placeholder="Type your message..."
          style={styles.detailsInput}
        />
        <Icon
          onPress={onPress}
          color={Colors.primary}
          name="send-circle"
          size={Dimensions.DEVICE_HEIGHT * 0.04}
          type="material-community"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sendInputContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.inputBackground,
    paddingVertical: Platform.OS == 'ios' ? Dimensions.DEVICE_HEIGHT * 0.01 : 0,
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
    textAlignVertical: 'top',
    paddingHorizontal: 10,
  },
});

export default ChatInput;
