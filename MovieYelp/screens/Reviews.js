import React from "react";
import { View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, Dimensions, Modal, TextInput, Pressable, Alert, } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Parse from "parse/react-native";


Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(
  "iX9UmLwWNOSVhSfrvY7YnWOAyZPNujc2cvKSCkFT",
  "NSdhBidUcAsiTET1C4r7ZWGjgTDCLgBdvFkecWr5"
);
Parse.serverURL = "https://parseapi.back4app.com/";



const { width } = Dimensions.get("screen");


export default class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Username",
      modalVisible: false,
      selectImage: "",
      reviewContent: "This is great!!",
      review: [],
      submitReview: "",
      submitImage: null,

    };
    this.retrieveReview();
  }

  retrieveReview = async () => {
    if (this.state.review.length != 0) return;
    const query = new Parse.Query("review");
    query.equalTo("movieName", this.props.movieItem.get("name"));

    let queryResult = null;
    try {
      queryResult = await query.find();
    } catch (error) { }
    this.setState({
      review: queryResult
    });

  };

  openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    this.setState({
      selectImage: pickerResult.uri,
    });
    console.log(this.state.selectImage);
  };

  pickImage = async () => {
    try {
      let response = await ImagePicker.launchImageLibraryAsync(
        {
          mediaType: 'photo',
          base64: true,
        });
      this.setState({
        submitImage: response,
      })
      alert("Imgae added successfully!");

    } catch (error) {
      alert("Fail to upload image!");
    }

  }

  onSubmitReview = async () => {
    // This value comes from a state variable
    const base64 = this.state.submitImage.base64;
    // console.log("onSubmitReview");
    const reviewContent = this.state.submitReview;
    const photo = new Parse.File("photo.jpg", {
      base64
    });
    const email = this.props.user.get("email");
    const userName = this.props.user.get("userName");
    const movieName = this.props.movieItem.get("name");
    let Review = new Parse.Object('review');
    Review.set("reviewContent", reviewContent);
    Review.set("photo", photo);
    Review.set("email", email);
    Review.set("userName", userName);
    Review.set("movieName", movieName);

    try {
      await Review.save();
      // Success
      Alert.alert('Success!', 'Review uploaded!');
      // Refresh todos list to show the new one (you will create this function later)
    } catch (error) {
      // Error can be caused by lack of Internet connection
      Alert.alert('Error!', error.message);
    };
  };


  uploadImage = async () => {

    const base64 = this.state.image.base64;

    const parseFile = new Parse.File("avatar.jpg", {
      base64
    });

    try {
      const responseFile = await parseFile.save();
      const query = new Parse.Query("Users");
      query.equalTo("email", this.props.user.get("email"));
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



  render() {
    return (
      <ScrollView>
        <View style={{
          alignItems: "flex-end"
        }}>
          <TouchableOpacity
            style={styles.submitContainer}
            onPress={() => {
              this.setState({
                modalVisible: true,
              });
            }}
          >
            <Text style={styles.submit}>Wirte your own Review</Text>
          </TouchableOpacity>

          { /* Review MODAL */}
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
          >
            <View
              style={[styles.reviewContainer, {
                backgroundColor: "F2EEE5"
              }]}
            >

              <Image
                source={require("../assets/84848-polar-bear.gif")}
                style={{
                  width: 430,
                  height: 430,
                  alignSelf: "center",
                }}
              />
              <Text
                style={{
                  fontSize: 18,
                  color: "#b8bece",
                  fontWeight: "bold",
                  marginTop: 20,
                }}
              >
                Please input your review about this shooting place:
              </Text>
              <TextInput
                style={{
                  height: 100,
                  borderColor: "gray",
                  borderWidth: 2
                }}
                maxLength={200}
                multiline
                numberOfLines={4}
                onChangeText={(text) => this.setState({
                  submitReview: text,
                })}
              />
              <View style={styles.buttomWrapper}>


                <TouchableOpacity
                  style={[
                    styles.submitContainer,
                    {
                      backgroundColor: "#0251ce"
                    },
                  ]}
                  onPress={() => {
                    this.pickImage();
                  }}
                >
                  <Text style={styles.submit}>Upload Images</Text>
                </TouchableOpacity>
              </View>


              <TouchableOpacity
                style={[
                  styles.submitContainer,
                  {
                    backgroundColor: "#0251ce"
                  },
                ]}
                onPress={() => {
                  this.onSubmitReview();
                  this.setState({
                    modalVisible: this.state.modalVisible == true ? false : true,
                  })
                  this.retrieveReview();
                }}
              >
                <Text style={styles.submit}>Submit</Text>
              </TouchableOpacity>


              <TouchableOpacity
                style={styles.button}
                onPress={() => this.setState({
                  modalVisible: this.state.modalVisible == true ? false : true,
                })
                }
              >
                <Text
                  style={{
                    color: "blue",
                    fontSize: 16,
                    textAlign: "center"
                  }}>Cancel</Text>
              </TouchableOpacity>

            </View>
          </Modal>

          {this.state.review.map((item) => (
            <Pressable style={{
              marginBottom: 20
            }}>
              <View style={styles.card}>
                { /* House image */}
                <Image
                  source={{
                    uri: item.get("photo").url()
                  }}
                  style={styles.cardImage}
                />
                <View style={{
                  marginTop: 10
                }}>
                  { /* Title and price container */}
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: 10,
                    }}
                  >
                    <Text style={{
                      fontSize: 16,
                      fontWeight: "bold"
                    }}>
                      {item.get("reviewContent")}
                    </Text>
                  </View>

                  <Text
                    style={{
                      color: "#A9A9A9",
                      fontSize: 14,
                      marginTop: 5
                    }}
                  >
                    {item.get("userName")}
                  </Text>

                  <View style={{
                    marginTop: 10,
                    flexDirection: "row"
                  }}>

                  </View>
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
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
    shadowOpacity: 10,
    shadowRadius: 2,
    borderRadius: 100,
    width: '60%',
    height: 50,
    borderColor: 'blue',
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 0,
    justifyContent: 'center',
    alignSelf: "center",
    backgroundColor: "#F8E7B4",
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
    height: 250,
    backgroundColor: '#FFF',
    elevation: 10,
    width: width - 40,
    marginRight: 20,
    padding: 15,
    borderRadius: 20,
  },
  cardImage: {
    width: '100%',
    height: 140,
    borderRadius: 15,
  },
  facility: {
    flexDirection: 'row',
    marginRight: 15
  },
  facilityText: {
    marginLeft: 5,
    color: '#97CAE5'
  },

})

