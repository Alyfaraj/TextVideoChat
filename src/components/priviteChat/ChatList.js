/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Colors, Dimensions} from '../../theme';
import ChatInput from './ChatInput';
import ChatItem from './ChatItem';

const ChatList = ({chat}) => {
  const renderItem = ({item}) => {
    return <ChatItem {...item} />;
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        inverted={-1}
        showsVerticalScrollIndicator={false}
        data={chat}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index}
        renderItem={renderItem}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        style={{marginBottom: Dimensions.DEVICE_HEIGHT * 0.01}}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ChatList;
