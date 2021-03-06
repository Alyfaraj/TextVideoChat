import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {HeaderBackground} from '../common';
import {Colors, Dimensions} from '../../theme';
import {useNavigation} from '@react-navigation/native';

const Header = ({username, currentRoom}) => {
  const navigation = useNavigation();
  return (
    <HeaderBackground>
      <View style={[styles.row, {marginTop: Dimensions.DEVICE_HEIGHT * 0.06}]}>
        <Text style={styles.backSearchText} onPress={() => navigation.pop()}>
          Back
        </Text>
        <Text style={styles.backSearchText}>Search</Text>
      </View>
      <View
        style={[
          styles.row,
          {
            marginBottom: Dimensions.DEVICE_HEIGHT * 0.08,
            marginTop: Dimensions.DEVICE_HEIGHT * 0.02,
          },
        ]}>
        <Text numberOfLines={2} style={styles.headerTitle}>
          {username}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Icon
            color={Colors.white}
            containerStyle={styles.iconBackground}
            name="call"
          />
          <Icon
            onPress={() =>
              navigation.navigate('VideoCall', {roomId: currentRoom?.channalId})
            }
            color={
              currentRoom?.video_call == 'true' ? Colors.red : Colors.white
            }
            containerStyle={styles.iconBackground}
            name="videocam"
          />
        </View>
      </View>
    </HeaderBackground>
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

export default Header;
