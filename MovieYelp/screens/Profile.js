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
import {
  ScrollView, Alert, TouchableOpacity, Image, Button,
  Dimensions
} from 'react-native';
import { TouchableOpacityBase } from 'react-native';
import { Component } from 'react';
import Card from '../components/Card'
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, Entypo } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';

const userName = "Dog Lover";
const userEmail = "myemail@email.com";
const profilePic = 'https://picsum.photos/id/200/200/200';
const userBio = '"Hello, I am a student from Northeastern University and I like movies, hit me up if you like movies too! "';
const displayPics = ['https://picsum.photos/id/500/200/200', 'https://picsum.photos/id/600/200/200', 'https://picsum.photos/id/700/200/200', 'https://picsum.photos/id/800/200/200', 'https://picsum.photos/id/900/200/200', 'https://picsum.photos/id/377/200/200']
const colors = ['#ECB49F', '#E5C151', '#C3E2DD', '#6ECEDA']

const width = Dimensions.get("window").width;
export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pairedImageData: null,
      dehazeCount: 0,
      postPress: true,
      galleryPress: false,
      username: "Yuhan",
      reviewContent: "This is great!",
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
          //   <View style={{alignItems:'center'}}>
          //   <Card
          //   image={{uri: res[i]}}
          //   caption={'MM/DD/YY'}
          // />
          // </View>
          <View style={{
            height: 250,
            // backgroundColor: colors[i%4],
            // backgroundColor:'light grey',
            elevation: 10,
            width: width - 40,
            marginRight: 20,
            padding: 15,
            borderRadius: 20,
            marginTop: 20,
            backgroundColor:'#fff'
          }}>
            {/* House image */}
            <Image source={{ uri: res[i] }} style={styles.cardImage} />
            <View style={{ marginTop: 10 }}>
              {/* Title and price container */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                  {this.state.reviewContent}
                </Text>
                {/* <Text
                style={{fontWeight: 'bold', color: '#5f82e6', fontSize: 16}}>
                $1,500
              </Text> */}
              </View>
              <Text style={{ color: '#A9A9A9', fontSize: 14, marginTop: 5 }}>
                {this.state.username}
              </Text>

              <View style={{ marginTop: 10, flexDirection: 'row' }}>
                <View style={styles.facility}>
                  <Icon name="visibility" size={20} />
                  <Text style={styles.facilityText}>2</Text>
                </View>
                <View style={styles.facility}>
                  <Icon name="recommend" size={20} />
                  <Text style={styles.facilityText}>2</Text>
                </View>
              </View>
            </View>
          </View>

        )
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
            <View key={i.toString()} style={{ flexDirection: 'row', alignItems: 'center' }}>
              {<Image source={{
                uri: res[i]
              }} style={{ width: 175, height: 175, borderRadius: 10, margin: 10 }} />}
              {<Image source={{
                uri: res[i + 1]
              }} style={{ width: 175, height: 175, borderRadius: 10, margin: 10 }} />}
            </View>
          )
        } else {
          table.push(
            <View key={i.toString()} style={{ flexDirection: 'row', alignItems: 'center' }}>
              {<Image source={{
                uri: res[i]
              }} style={{ width: 175, height: 175, borderRadius: 10, margin: 10 }} />}
            </View>
          )
        }
        ans.push(<View key={(i * 100).toString()} style={{ flexDirection: 'row', alignContent: 'center' }}>{table}</View>)
      }

    }
    return ans;

  }

  render() {
    var displayView;
    var height = 0;
    if (this.state.postPress) {
      displayView = this.postPics();
      height = displayPics.length * 450;
    } else {
      displayView = this.galleryPics();
      height = displayPics.length * 275;
    }


    // this.fetchData();
    return (



      <View>
        {/*This is the header: */}
        <View >
          {/* <LinearGradient colors={['#61698E', '#F97878']} start={[0.5, 0.5]} end={[0.5, 0.5]}> */}
          {/* <Text> This is a profile page</Text> */}

          <View style={{
            paddingVertical: 20, alignItems: 'center',
            height: 200,
            width: "100%",
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: "flex-end",
            // marginLeft: 10//center

            borderBottomStartRadius: 180,
            borderBottomEndRadius: 180,
            backgroundColor: "#F8E7B4"
          }}>
            <TouchableOpacity>
              <Image
                source={{ uri: profilePic }}
                style={styles.avatar} />
            </TouchableOpacity>
            <Text style={styles.userName}>{userName}</Text>
            <Text style={{ color: "black", textAlign: 'center' }}>{userEmail}</Text>
          </View>


          {/* </LinearGradient> */}
          <View style={{
            paddingVertical: 10,

            borderTopLeftRadius: 100
          }}>
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
          <View style={{ flexDirection: "row" }}
          >
            <View style={{ flex: 1, alignItems: "center", borderWidth: 1, borderColor: "lightgrey" }}>
              <TouchableOpacity onPress={this.myPostBress}>
                <Ionicons name="add-circle" style={{ color: "grey" }} size={24} />
              </TouchableOpacity>
              <Text style={{ color: "grey" }}>My Reviews</Text>
            </View>
            <View style={{ flex: 1, alignItems: "center", borderWidth: 1, borderColor: "lightgrey" }}>
              <TouchableOpacity onPress={this.myGalleryBress}>
                <Ionicons name="images" style={{ color: "grey" }} size={24} />
              </TouchableOpacity>
              <Text style={{ color: "grey" }}>My Gallery</Text>
            </View>
            {/* <View style={{ flex: 1, alignItems: "center", borderWidth: 1, borderColor: "lightgrey" }}>
              <TouchableOpacity onPress={this.morePress}>
                <Ionicons name="ellipsis-horizontal" style={{ color: "grey" }} size={24} />
              </TouchableOpacity>
              <Text style={{ color: "grey" }}>More</Text>
            </View> */}
          </View>


          {/*This is the display/post view: */}
          <View style={{ margin: 2, borderColor: 'F2EEE5' }}>
            <ScrollView>
              <View style={{ height: height, alignItems: 'center', marginLeft: 20, }}>
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
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  userTitle: {
    fontSize: 16,
    color: "#b8bece",
    fontWeight: "500",
    justifyContent: 'center',
  },
  userName: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 0,

  },
  reviewContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  thumbnail: {
    width: 150,
    height: 150,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 5,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  relatedMoviesSection: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoBox: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userInfo: {
    fontSize: 20,
    fontWeight: "bold",
    flexDirection: 'row',
  },
  reviewBody: {
    fontSize: 15,
    flexDirection: 'row',

  },
  reviewPart: {
    flexDirection: 'column',
  },
  submitContainer: {
    borderRadius: 100,
    width: '60%',
    height: 50,
    borderColor: 'blue',
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 0,
    justifyContent: 'center',
    alignSelf: "center",
    backgroundColor: "#C3E2DD"
  },
  submit: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    marginVertical: 10,
  },
  bottomWrapper: {
    flexDirection: 'row',
  },
  card: {

  },
  cardImage: {
    width: '100%',
    height: 140,
    borderRadius: 15,
  },
  facility: { flexDirection: 'row', marginRight: 15 },
  facilityText: { marginLeft: 5, color: '#97CAE5' },
  parent: {
    height: '80%',
    width: '100%',
    backgroundColor: 'pink',

    borderBottomStartRadius: 200,
    borderBottomEndRadius: 200,
    overflow: 'hidden',
  },
  child: {
    flex: 1,
    transform: [{ scaleX: 0.5 }],

    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center'
  }

});

