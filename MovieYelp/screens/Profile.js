import React from 'react';
import {View, SafeAreaView, StyleSheet, FlatList, Text} from 'react-native';
// import {
//   Avatar,
//   Title,
//   Caption,
//   Text,
//   TouchableRipple,
// } from 'react-native-paper';

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import Share from 'react-native-share';
import { ScrollView, TouchableOpacity} from 'react-native';
import { TouchableOpacityBase } from 'react-native';
import { Component } from 'react';
import Card from '../components/Card'



export default class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pairedImageData: null,
      dehazeCount: 0,
    }
  }



  render(){
    //this.fetchData();
    return (
      // user info part
     <View>
       <Text> This is a profile page</Text>
     </View>

    );
  }
  
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',

    justifyContent: 'center',
    alignItems: 'center',
  },
  infoBox: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

});