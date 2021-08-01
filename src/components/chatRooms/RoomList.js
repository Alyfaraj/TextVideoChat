/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Colors, Dimensions} from '../../theme';
import RoomItem from './RoomItem';

const RoomList = ({items, onPress}) => {
  const renderItem = ({item}) => {
    return <RoomItem {...item} onPress={() => onPress()} />;
  };

  return (
    <FlatList
      style={{height: '100%'}}
      showsVerticalScrollIndicator={false}
      data={items}
      keyExtractor={(item, index) => item.id}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({});

export default RoomList;
