import React from 'react';
import {View, SafeAreaView, StyleSheet, FlatList, Text} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  TouchableRipple,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
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
    return(
          <SafeAreaView style={styles.container}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image 
                source={require('../assets/avatar.jpg')}
                size={80}
              />
              <View style={{marginLeft: 20}}>
                <Title style={[styles.title, {
                  marginTop:15,
                  marginBottom: 5,
                }]}>Full Name</Title>
                <Caption style={styles.caption}>@username</Caption>
              </View>
            </View>
          </View>
         
          <View style={styles.userInfoSection}>
            <View style={styles.row}>
              <Icon name="phone" color="#777777" size={20}/>
              <Text style={{color:"#777777", marginLeft: 20}}>+91-900000009 phone</Text>
            </View>
            <View style={styles.row}>
              <Icon name="email" color="#777777" size={20}/>
              <Text style={{color:"#777777", marginLeft: 20}}>user@email.com</Text>
            </View>
          </View>
  
          {/* scrollView Starts here! */}
      
        </SafeAreaView>
      );
    }
  }
    
  
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