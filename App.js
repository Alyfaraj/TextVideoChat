import React from 'react';
import {LogBox, View} from 'react-native';
import Navigation from './src/navigation';
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Navigation />
    </View>
  );
};

export default App;
