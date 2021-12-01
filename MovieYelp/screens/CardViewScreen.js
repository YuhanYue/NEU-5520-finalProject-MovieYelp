import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native'

import {
  TouchableRipple,

} from 'react-native-paper';

import Card from '../components/Card';
import styled from 'styled-components';
import Login from './Login';
import { SwitchRouter } from 'react-navigation';


const width = Dimensions.get("window").width;
export default class CardViewScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username:"Yuhan"
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.titleBar}>
          <Image style={styles.avatar} source={require('../assets/avatar.jpg')} />
          <Text style={styles.userTitle}>Welcome back,</Text>
          {/* this.username */}
          <Text style={styles.username}>{this.state.username}</Text>
        </View>
          {/* TODO:flatlist to fetch and display data */}
          <Subtitle style={{ paddingTop: 10 }}>Starting your journey from...</Subtitle>
          <TouchableOpacity style={styles.infoBox}
            onPress={() => this.props.navigation.navigate("movie")}
            >
            <Card
              image={require("../assets/NEU.png")}
              caption={'NEU Vancouver Campus'}
              realtedMovies={'Harry Potter, Never Have I ever...'}

            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.infoBox}>
            <Card
              image={require("../assets/Scene1.jpeg")}
              caption={'NEU Vancouver Campus'}
              onPress
            />
          </TouchableOpacity>
      </ScrollView>
    );
  }
}

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 10px;
  text-transform: uppercase;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  margin-left: 150px;
  color: #f2eee5;
`;





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleBar:{
    width: "100%",
    flexDirection: 'column',
    alignItems:'center',
    justifyContent: "center",
    marginLeft: 10//center
    // backgroundColor: "#6ECEDA",
  },
  avatar:{
    width: 100,
    height:100,
    borderRadius: 100,
  },
  userTitle:{
    fontSize: 16,
    color:"#b8bece",
    fontWeight:"500",
    justifyContent: 'center',
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  username:{
    fontSize:20,
    color:"#3c4560",
    fontWeight: 'bold',
    marginLeft: 0,
    
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
})
