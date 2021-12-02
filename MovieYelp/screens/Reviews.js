import React from "react";
import styled from "styled-components";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  Animated,
  Modal,
  TextInput,
  Pressable,
} from "react-native";
import CameraButton from "../components/CameraButton";
import { Button } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { block } from "react-native-reanimated";
import Icon from "react-native-vector-icons/MaterialIcons";

import AsyncStorage from "@react-native-async-storage/async-storage";
import Parse from "parse/react-native";

//Before using the SDK...
Parse.setAsyncStorage(AsyncStorage);

Parse.initialize(
  "iX9UmLwWNOSVhSfrvY7YnWOAyZPNujc2cvKSCkFT",
  "NSdhBidUcAsiTET1C4r7ZWGjgTDCLgBdvFkecWr5"
); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = "https://parseapi.back4app.com/";

function addReview() {}

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
    } catch (error) {
      // alert("Failed to create new object, with error code: " + error.message);
    }
    this.setState({ review: queryResult });

    console.log(queryResult);
  };

  openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

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

  render() {
    // console.log("reviewreviewreviewreview is here");
    // console.log(this.props.user);
    return (
      <ScrollView>
        <View style={{ alignItems: "flex-end" }}>
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

          {/* Review MODAL */}
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
          >
            <View
              style={[styles.reviewContainer, { backgroundColor: "F2EEE5" }]}
            >
              <Image
                source={require("../assets/review.jpg")}
                style={{
                  width: 200,
                  height: 200,
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
                style={{ height: 100, borderColor: "gray", borderWidth: 2 }}
                maxLength={200}
                multiline
                numberOfLines={4}
              />
              <View style={styles.buttomWrapper}>
                <TouchableOpacity
                  style={[
                    styles.submitContainer,
                    { backgroundColor: "#0251ce" },
                  ]}
                  onPress={() => {}}
                >
                  <Text style={styles.submit}>Submit</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.submitContainer,
                    { backgroundColor: "#0251ce" },
                  ]}
                  onPress={() => {
                    this.openImagePickerAsync();
                  }}
                >
                  <Text style={styles.submit}>Upload Images</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.button}
                onPress={() =>
                  this.setState({
                    modalVisible:
                      this.state.modalVisible == true ? false : true,
                  })
                }
              >
                <Text>Cancel</Text>
              </TouchableOpacity>
            </View>
          </Modal>

          {this.state.review.map((item) => (
            <Pressable style={{ marginBottom: 20 }}>
              <View style={styles.card}>
                {/* House image */}
                <Image
                  source={{ uri: item.get("photo").url() }}
                  style={styles.cardImage}
                />
                <View style={{ marginTop: 10 }}>
                  {/* Title and price container */}
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: 10,
                    }}
                  >
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                      {item.get("reviewContent")}
                    </Text>
                    {/* <Text
                style={{fontWeight: 'bold', color: '#5f82e6', fontSize: 16}}>
                $1,500
              </Text> */}
                  </View>

                  <Text
                    style={{ color: "#A9A9A9", fontSize: 14, marginTop: 5 }}
                  >
                    {item.get("userName")}
                  </Text>

                  <View style={{ marginTop: 10, flexDirection: "row" }}>
                    <View style={styles.facility}>
                      <Icon name="thumb" size={18} />
                      <Text style={styles.facilityText}>2</Text>
                    </View>
                    <View style={styles.facility}>
                      <Icon name="people" size={18} />
                      <Text style={styles.facilityText}>2</Text>
                    </View>
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
    justifyContent: "center",
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
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  relatedMoviesSection: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  infoBox: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  userInfo: {
    fontSize: 20,
    fontWeight: "bold",
    flexDirection: "row",
  },
  reviewBody: {
    fontSize: 15,
    flexDirection: "row",
  },
  reviewPart: {
    flexDirection: "column",
  },
  submitContainer: {
    borderRadius: 100,
    width: "60%",
    height: 50,
    borderColor: "blue",
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 0,
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "#C3E2DD",
  },
  submit: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    alignSelf: "center",
    marginVertical: 10,
  },
  bottomWrapper: {
    flexDirection: "row",
  },
  card: {
    height: 250,
    backgroundColor: "#FFF",
    elevation: 10,
    width: width - 40,
    marginRight: 20,
    padding: 15,
    borderRadius: 20,
  },
  cardImage: {
    width: "100%",
    height: 140,
    borderRadius: 15,
  },
  facility: { flexDirection: "row", marginRight: 15 },
  facilityText: { marginLeft: 5, color: "#97CAE5" },
});
