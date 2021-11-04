import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './screens/HomePage';
import Login from './screens/Login';
import Navigation from './navigators/navigation';

export default function App() {
  return (
    <View style={{flex:1}}>{/*set flex:1 or it would display children component */}
     <Navigation/>
    </View>
  );
}


