import React from 'react';
import {StyleSheet, ScrollView, View, TouchableOpacity} from 'react-native';
import {Avatar, Icon} from 'react-native-elements';
import {useSelector} from 'react-redux';
import {Colors, Dimensions} from '../../theme';

const AvatarsList = ({users, onPress}) => {
  const {id} = useSelector(state => state.auth.currentUser);
  return (
    <ScrollView horizontal contentContainerStyle={styles.avatarScrollList}>
      <TouchableOpacity style={styles.searchBackground}>
        <Icon name="search-outline" type="ionicon" />
      </TouchableOpacity>
      {/* check for remove current user from avater list */}
      {users?.map(user => (
        <View>
          {user.id !== id ? (
            <Avatar
              onPress={() => onPress(user)}
              containerStyle={{marginStart: Dimensions.DEVICE_WIDTH * 0.02}}
              source={{
                uri: user.image,
              }}
              rounded
              size="medium"
            />
          ) : null}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  avatarScrollList: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.DEVICE_WIDTH * 0.9,
    alignSelf: 'center',
    marginStart: Dimensions.DEVICE_WIDTH * 0.08,
    marginBottom: Dimensions.DEVICE_HEIGHT * 0.07,
    marginTop: Dimensions.DEVICE_HEIGHT * 0.03,
  },
  searchBackground: {
    padding: Dimensions.DEVICE_WIDTH * 0.025,
    backgroundColor: 'rgba(256,256,256,.4)',
    borderRadius: Dimensions.DEVICE_WIDTH * 0.1,
  },
});

export default AvatarsList;
