import React from 'react';
import {View } from 'react-native';
import Navigation from './navigators/navigation';

import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

export default function App() {

  return (
    
    <View style={{flex:1}}>
      <Navigation/>
    </View>
  );
}





