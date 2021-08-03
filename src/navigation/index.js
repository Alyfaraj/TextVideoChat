import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import ChatRooms from '../screens/ChatRooms';
import PrivateChat from '../screens/PrivateChat';
import VideoCall from '../screens/VideoCall';

const MainStack = createStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          name="ChatRooms"
          component={ChatRooms}
          options={{headerShown: false}}
        />
        <MainStack.Screen
          name="PrivateChat"
          component={PrivateChat}
          options={{headerShown: false}}
        />
        <MainStack.Screen
          name="VideoCall"
          component={VideoCall}
          options={{headerShown: false}}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
