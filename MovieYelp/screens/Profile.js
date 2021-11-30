import React from "react";
import { View, SafeAreaView, StyleSheet, FlatList, Text } from "react-native";
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
  ScrollView,
  Alert,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import { TouchableOpacityBase } from "react-native";
import { Component } from "react";
import { Ionicons, Entypo } from "@expo/vector-icons";
import Parse from "parse/react-native";
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from "@react-native-async-storage/async-storage";

//Before using the SDK...
Parse.setAsyncStorage(AsyncStorage);

Parse.initialize(
  "yyq9HLKMQVgQFbCIVBl7dAaIboyCTbyoRQjUYZc8",
  "KBig8FUxq4rXuILfdgXQX6L053KYdDM8SclCM2Vs"
); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = "https://parseapi.back4app.com/";

// const userName = "Dog Lover";
// const userEmail = "myemail@email.com";
// var profilePic = "https://picsum.photos/id/200/200/200";
// const userBio =
//   '"Hello, I am a student from Northeastern University and I like movies, hit me up if you like movies too! "';
const displayPics = [
  "https://picsum.photos/id/500/200/200",
  "https://picsum.photos/id/600/200/200",
  "https://picsum.photos/id/700/200/200",
  "https://picsum.photos/id/800/200/200",
  "https://picsum.photos/id/900/200/200",
  "https://picsum.photos/id/377/200/200",
];

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pairedImageData: null,
      dehazeCount: 0,
      postPress: true,
      galleryPress: false,
      profilePic: "https://picsum.photos/id/200/200/200",
      userBio: "I am on Movie Yelp now!",
      userName : "Dog Lover",
      userEmail : "myemail@email.com",
      image : null,
    };
    
  }

  componentDidUpdate(){
    this.onRetrieveProfile();
  }

  onRetrieveProfile = async () => {
    // const User = new Parse.Object.extend("User");
    const query = new Parse.Query("Users");
    query.equalTo("email","yunfeng@gmail.com");
    var profilePic = null;
    var userBio = "", userName = "", userEmail = "";
    try {
      const object = await query.find();
      const person = object[0];
      // console.log("======object=======");
      // console.log(object);
      userBio = person.get("userBio");
      userName = person.get("userName");
      userEmail = person.get("email");
      profilePic = person.get("avatar").url();

      // console.log(person.get("avatar"));
    } catch (error) {
      alert(`Failed to retrieve the object, with error code: ${error.message}`);
    }
    // console.log(userEmail  +" name:" + userName);
    this.setState({ 
      profilePic: profilePic,
      userBio :  userBio,
      userName : userName,
      userEmail : userEmail,
    });
  };
  morePress = () => {
    // console.log("You press the button");
    Alert.alert("MORE", "What's more?", [
      { text: "Edit profile" },
      { text: "Open Setting" },
      { text: "Close" },
    ]);
  };

  myPostBress = () => {
    this.setState({
      postPress: true,
      galleryPress: false,
    });
  };

  myGalleryBress = () => {
    this.setState({
      postPress: false,
      galleryPress: true,
    });
  };

  pickImage = async()=> {
    let response = await ImagePicker.launchImageLibraryAsync(
    {
      mediaType:  'photo',
      base64:  true,
    });
      // Add selected image to the state
    this.setState({
      image:response,
    })
    // console.log(response)
    this.uploadImage();
  

  }

  uploadImage = async() => {
    
    // const {base64, fileName} = this.state.image;
    const base64 = this.state.image.base64;
    // const fileName = this.state.image.base64;
    // console.log(this.state.image);
    // console.log("fileName");
    // console.log(fileName);
    // console.log(pickerResult);
    // console.log("base64");
    // console.log(base64);
    const  parseFile = new  Parse.File("avatar.jpg", {base64});
    // this.onSaveNewUser();
    // 2. Save the file
    try {
      const responseFile = await parseFile.save();
      const query = new Parse.Query("Users");
      query.equalTo("email","yunfeng@gmail.com");
      const object = await query.find();
      const person = object[0];
      person.set('avatar', responseFile);
      await person.save();
      Alert.alert('The file has been saved to Back4app.');
    } catch (error) {
      console.log(
        'The file either could not be read, or could not be saved to Back4app.', error.message
      );
    }
  }

  onSaveNewUser = async () => {
    // const query = new Parse.Query("User");
    let user = new Parse.Object.extend("User");
    var User = new user();
    User.set("authDsta","{}");
    User.set("username","YYH");
    User.set("password","123");
    User.set("userBio","Hello I am Yuhan Yue");
    User.set("email","yyh@gmail.com");

    try {
      // const person = await query.get("MZQD2y0nUB");
      // console.log(person);
      // console.log("avatar");
      let result = await User.save();
      alert("New object created with objectId: " + result.id);
      // console.log(person.get("avatar").url());
    } catch (error) {
      alert("Failed to create new object, with error code: " + error.message);
    }
  };

//   openImagePickerAsync = async () => {
//     let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

//     if (permissionResult.granted === false) {
//         alert("Permission to access camera roll is required!");
//         return;
//     }
//     let pickerResult = await ImagePicker.launchImageLibraryAsync();
//     this.setState({
//         selectImage: pickerResult.uri,
//     })
//     console.log(this.state.selectImage);

// }

  postPics = () => {
    var res = displayPics;
    var table = [];
    if (this.state.postPress) {
      for (var i = 0; i < res.length; i++) {
        table.push(
          <View key={i.toString()} style={{ flexDirection: "row" }}>
            {
              <View style={{ flex: 1, marginTop: 10 }}>
                <Text style={{ color: "grey" }}>MM/DD/YY</Text>
              </View>
            }
            {
              <View style={{ flex: 4 }}>
                {
                  <Image
                    source={{
                      uri: res[i],
                    }}
                    style={{
                      width: 250,
                      height: 250,
                      borderRadius: 10,
                      marginTop: 10,
                    }}
                  />
                }
              </View>
            }
          </View>
        );
      }
    }
    return table;
  };

  galleryPics = () => {
    var res = displayPics;

    var ans = [];
    if (this.state.galleryPress) {
      for (var i = 0; i < res.length; i += 2) {
        var table = [];
        if (i + 1 < res.length) {
          table.push(
            <View
              key={i.toString()}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              {
                <Image
                  source={{
                    uri: res[i],
                  }}
                  style={{
                    width: 175,
                    height: 175,
                    borderRadius: 10,
                    margin: 10,
                  }}
                />
              }
              {
                <Image
                  source={{
                    uri: res[i + 1],
                  }}
                  style={{
                    width: 175,
                    height: 175,
                    borderRadius: 10,
                    margin: 10,
                  }}
                />
              }
            </View>
          );
        } else {
          table.push(
            <View
              key={i.toString()}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              {
                <Image
                  source={{
                    uri: res[i],
                  }}
                  style={{
                    width: 175,
                    height: 175,
                    borderRadius: 10,
                    margin: 10,
                  }}
                />
              }
            </View>
          );
        }
        ans.push(
          <View
            key={(i * 100).toString()}
            style={{ flexDirection: "row", alignContent: "center" }}
          >
            {table}
          </View>
        );
      }
    }
    return ans;
  };

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
    
    // console.log("aaaaaaa");
    // console.log(this.state.profilePic);
    // this.fetchData();
    return (
      // user info part
      <View>
        {/* <UploadImage /> */}
        {/*This is the header: */}
        <View>
          {/* <LinearGradient colors={['#61698E', '#F97878']} start={[0.5, 0.5]} end={[0.5, 0.5]}> */}
          <View
            style={{
              marginHorizontal: 60,
              paddingVertical: 20,
              alignItems: "center",
            }}
          >
            {/* <Text> This is a profile page</Text> */}
            <TouchableOpacity onPress={() => {this.pickImage()}} >
              <Image
                source={{ uri: this.state.profilePic }}
                style={styles.avatar}
              />
            </TouchableOpacity>
            <Text style={styles.userName}>{this.state.userName}</Text>
            <Text style={{ color: "white", textAlign: "center" }}>
              {this.state.userEmail}
            </Text>
          </View>
          {/* </LinearGradient> */}
          <View style={{ marginHorizontal: 10, paddingVertical: 10 }}>
            <Text style={{ fontWeight: "600", textAlign: "left" }}>
              ABOUT ME
            </Text>
            <Text style={{ color: "grey", fontWeight: "600", marginTop: 5 }}>
              {this.state.userBio}
            </Text>
            <View>
              <Ionicons
                name="location-outline"
                style={{ color: "grey", padding: 10 }}
              >
                Vancouver, Birtish Columbia
              </Ionicons>
            </View>
          </View>

          {/*This is the status bar: */}
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                borderWidth: 1,
                borderColor: "lightgrey",
              }}
            >
              <TouchableOpacity onPress={this.myPostBress}>
                <Ionicons
                  name="add-circle"
                  style={{ color: "#FF8000" }}
                  size={24}
                />
              </TouchableOpacity>
              <Text style={{ color: "grey" }}>My Post</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                borderWidth: 1,
                borderColor: "lightgrey",
              }}
            >
              <TouchableOpacity onPress={this.myGalleryBress}>
                <Ionicons
                  name="images"
                  style={{ color: "#FF8000" }}
                  size={24}
                />
              </TouchableOpacity>
              <Text style={{ color: "grey" }}>My Gallery</Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                borderWidth: 1,
                borderColor: "lightgrey",
              }}
            >
              <TouchableOpacity onPress={this.morePress}>
                <Ionicons
                  name="ellipsis-horizontal"
                  style={{ color: "#FF8000" }}
                  size={24}
                />
              </TouchableOpacity>
              <Text style={{ color: "grey" }}>More</Text>
            </View>
          </View>

          {/*This is the display/post view: */}
          <View style={{ margin: 2, borderColor: "grey" }}>
            <ScrollView>
              <View style={{ height: height }}>{displayView}</View>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",

    justifyContent: "center",
    alignItems: "center",
  },
  infoBox: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
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
    justifyContent: "center",
  },
  userName: {
    fontSize: 20,
    color: "#3c4560",
    fontWeight: "bold",
    marginLeft: 0,
  },
});
