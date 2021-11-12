import React from 'react';
import { View, SafeAreaView, StyleSheet, FlatList, Text } from 'react-native';
// import {
//   Orange: #F97878
//   Pink: #ea3372
//   Caption,
//   Text,
//   TouchableRipple,
// } from 'react-native-paper';

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import Share from 'react-native-share';
import { ScrollView, Alert, TouchableOpacity, Image, Button } from 'react-native';
import { TouchableOpacityBase } from 'react-native';
import { Component } from 'react';
import Card from '../components/Card'
import { LinearGradient } from 'expo-linear-gradient';
import { block } from 'react-native-reanimated';
import { Ionicons, Entypo } from '@expo/vector-icons';

const userName = "Dog Lover";
const userEmail = "myemail@email.com";
const profilePic = 'https://picsum.photos/id/200/200/200';
const userBio = '"Hello, I am a student from Northeastern University and I like movies, hit me up if you like movies too! "';
const displayPics = ['https://picsum.photos/id/500/200/200', 'https://picsum.photos/id/600/200/200', 'https://picsum.photos/id/700/200/200', 'https://picsum.photos/id/800/200/200', 'https://picsum.photos/id/900/200/200','https://picsum.photos/id/377/200/200']

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pairedImageData: null,
      dehazeCount: 0,
      postPress: true,
      galleryPress: false,
    }
  }

  morePress = () => {
    // console.log("You press the button");
    Alert.alert('MORE', "What's more?", [
      { text: "Edit profile" },
      { text: "Open Setting" },
      { text: "Close" }
    ]);
  }

  myPostBress = () => {
    this.setState({
      postPress: true,
      galleryPress: false,
    })
  }

  myGalleryBress = () => {
    this.setState({
      postPress: false,
      galleryPress: true,
    })
  }

  postPics = () => {
    var res = displayPics;
    var table = [];
    if (this.state.postPress) {
      for (var i = 0; i < res.length; i++) {
        table.push(
          <View key={i.toString()} style={{ flexDirection: 'row' }}>
            {<View style={{ flex: 1, marginTop: 10 }}><Text style={{ color: "grey" }}>MM/DD/YY</Text></View>}
            {<View style={{ flex: 4 }} >
              {<Image source={{
                uri: res[i]
              }} style={{ width: 250, height: 250, borderRadius: 10, marginTop: 10 }} />}
            </View>}
          </View>)
      }

    }
    return table;
  }

  galleryPics = () => {

    var res = displayPics;

    var ans = []
    if (this.state.galleryPress) {
      for (var i = 0; i < res.length; i += 2) {
        var table = [];
        if (i + 1 < res.length) {
          table.push(
            <View key={i.toString()} style={{ flexDirection: 'row',alignItems:'center' }}>
              {<Image source={{
                uri: res[i]
              }} style={{ width: 175, height: 175, borderRadius: 10, margin: 10 }} />}
              {<Image source={{
                uri: res[i + 1]
              }} style={{ width: 175, height: 175, borderRadius: 10, margin: 10 }} />}
            </View>
          )
        }else{
          table.push(
            <View key={i.toString()} style={{ flexDirection: 'row',alignItems:'center'}}>
              {<Image source={{
                uri: res[i]
              }} style={{ width: 175, height: 175, borderRadius: 10, margin: 10 }} />}
            </View>
          )
        }
        ans.push(<View key={(i*100).toString()} style={{ flexDirection: 'row',alignContent:'center' }}>{table}</View>)
      }
      
    }
    return ans;

  }

  render() {
    var displayView;
    var height = 0;
    if(this.state.postPress){
      displayView = this.postPics();
      height = displayPics.length * 450;
    }else{
      displayView = this.galleryPics();
      height = displayPics.length * 275;
    }
    
    // this.fetchData();
    return (

      // user info part
      <View>
        {/*This is the header: */}
        <View>
          <LinearGradient colors={['#61698E', '#F97878']} start={[0.5, 0.5]} end={[0.5, 0.5]}>
            <View style={{ marginHorizontal: 60, paddingVertical: 20, alignItems: 'center' }}>
              {/* <Text> This is a profile page</Text> */}
              <TouchableOpacity>
                <Image
                  source={{ uri: profilePic }}
                  style={{ width: 100, height: 100, borderRadius: 10 }} />
              </TouchableOpacity>
              <Text style={{ color: "#ea3372", fontFamily: "Cochin", fontSize: 30, fontWeight: "bold", textAlign: 'center' }}>{userName}</Text>
              <Text style={{ color: "white", textAlign: 'center' }}>{userEmail}</Text>
            </View>
          </LinearGradient>
          <View style={{ marginHorizontal: 10, paddingVertical: 10 }}>
            <Text style={{ fontWeight: "600", textAlign: "left" }}>
              ABOUT ME
            </Text>
            <Text style={{ color: "grey", fontWeight: "600", marginTop: 5 }}>
              {userBio}
            </Text>
            <View>
              <Ionicons name="location-outline" style={{ color: "grey", padding: 10 }}>Vancouver, Birtish Columbia</Ionicons>
            </View>
          </View>

          {/*This is the status bar: */}
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1, alignItems: "center", borderWidth: 1, borderColor: "lightgrey" }}>
              <TouchableOpacity onPress={this.myPostBress}>
                <Ionicons name="add-circle" style={{ color: "#FF8000" }} size={24} />
              </TouchableOpacity>
              <Text style={{ color: "grey" }}>My Post</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center", borderWidth: 1, borderColor: "lightgrey" }}>
              <TouchableOpacity onPress={this.myGalleryBress}>
                <Ionicons name="images" style={{ color: "#FF8000" }} size={24} />
              </TouchableOpacity>
              <Text style={{ color: "grey" }}>My Gallery</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center", borderWidth: 1, borderColor: "lightgrey" }}>
              <TouchableOpacity onPress={this.morePress}>
                <Ionicons name="ellipsis-horizontal" style={{ color: "#FF8000" }} size={24} />
              </TouchableOpacity>
              <Text style={{ color: "grey" }}>More</Text>
            </View>
          </View>

          {/*This is the display/post view: */}
          <View style={{margin:2,borderColor:"grey"}}>
            <ScrollView>
              <View style={{ height: height }}>
                {displayView}
              </View>
            </ScrollView>

          </View>
        </View>

      </View>

    );
  }

};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
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