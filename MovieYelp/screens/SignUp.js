import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

import Submit from "../components/Submit";
import Inputs from "../components/Inputs";
import { auth } from "../firbase-config";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";

import AsyncStorage from "@react-native-async-storage/async-storage";
import Parse from "parse/react-native";

//Before using the SDK...
Parse.setAsyncStorage(AsyncStorage);

Parse.initialize(
  "yyq9HLKMQVgQFbCIVBl7dAaIboyCTbyoRQjUYZc8",
  "KBig8FUxq4rXuILfdgXQX6L053KYdDM8SclCM2Vs"
); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = "https://parseapi.back4app.com/";

var globalAvatar = null;
export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: "",
      userPassword: "",
      isFocused: false,
      avatar: null,
      allUsers: [],
    };
    this.retrieveAllUsers();
    //Saving your First Data Object on Back4App
    async function saveNewPerson() {
      const person = new Parse.Object("Person");

      person.set("name", "John Snow");
      person.set("age", 27);
      try {
        let result = await person.save();
        alert("New object created with objectId: " + result.id);
      } catch (error) {
        alert("Failed to create new object, with error code: " + error.message);
      }
    }
    // saveNewPerson();

    // async function retrieveUser() {
    //   const query = new Parse.Query("User");

    //   try {
    //     const person = await query.get("9H8x1d6To7");
    //     const avatar = person.get("avatar");
    //     const name = person.get("username");
    //     // console.log(avatar);
    //     globalAvatar = avatar;
    //     // console.log("11111111");

    //     // console.log(globalAvatar);
    //     // console.log("2222222");

    //     alert(`Name: ${name} `);
    //   } catch (error) {
    //     alert(
    //       `Failed to retrieve the object, with error code: ${error.message}`
    //     );
    //   }
    // }
    // retrieveUser();
    // console.log(globalAvatar);
  }

  retrieveAllUsers = async () => {
    if (this.state.allUsers.length != 0) return;
    const query = new Parse.Query("User");
    let queryResult = null;
    try {
      queryResult = await query.find();
    } catch (error) {
      // alert("Failed to create new object, with error code: " + error.message);
    }
    this.setState({ allUsers: queryResult });
    console.log(queryResult);
  };

  onFoucusChange = () => {
    this.setState({ isFocused: true });
  };

  onRetrieveUser = async () => {
    const query = new Parse.Query("User");

    try {
      const person = await query.get("MZQD2y0nUB");
      console.log(person);
      console.log("avatar");

      const name = person.get("username");
      console.log(person.get("avatar").url());
    } catch (error) {
      alert(`Failed to retrieve the object, with error code: ${error.message}`);
    }
  };

  // uploadImage = async () => {
  //   const {base64, fileName} = image;
  //   const  parseFile = new  Parse.File(fileName, {base64});

  //   // 2. Save the file
  //   try {
  //   const responseFile = await  parseFile.save();
  //   const Gallery = Parse.Object.extend('Gallery');
  //   const gallery = new  Gallery();
  //   gallery.set('picture', responseFile);

  //   await gallery.save();
  //   Alert.alert('The file has been saved to Back4app.');
  //   } catch (error) {
  //     console.log(
  //       'The file either could not be read, or could not be saved to Back4app.',
  //     );
  //   }
  // }

  handleRegister = async () => {
    try {
      const user = createUserWithEmailAndPassword(
        auth,
        this.state.userEmail,
        this.state.userPassword
      );
      console.log(user);
    } catch {
      console.log(Error);
    }
  };

  onChangePassword = (password) => {
    this.setState({
      userPassword: password,
    });
  };

  onChangeUsername = (email) => {
    this.setState({
      userEmail: email,
    });
  };

  render() {
    this.onRetrieveUser();
    console.log("render");
    // console.log(globalAvatar);
    console.log(this.state.avatar);

    console.log("render");

    return (
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={styles.container}>
          <Image
            source={require("../assets/registeration.png")}
            style={styles.image}
          />
          {/* {console.log("---------")}

          {console.log(globalAvatar)}
          {console.log(globalAvatar["url"])}
          <Image
            source={{ uri: globalAvatar["url"][0] }}
            style={styles.image}
          /> */}
          <Text style={styles.textTitle}>Let's Get Started</Text>
          <Text style={styles.textBody}>
            Create a new account for your dehaze APP
          </Text>
          {/* <Inputs name='Full Name' icon='user'/> */}
          <View
            style={[
              styles.inputContainerWrap,
              { borderColor: this.state.isFocused ? "#0779ef" : "#eee" },
            ]}
          >
            <Input
              onChangeText={this.onChangeUsername}
              placeholder="Email"
              onFocus={this.onFoucusChange}
              inputContainerStyle={styles.inputContainer}
              inputSyle={styles.inputText}
              secureTextEnrty="false"
              leftIcon={
                <Icon
                  name="envelope"
                  size={20}
                  color={this.state.isFocused ? "#0779e4" : "grey"}
                />
              }
              // onChangeText = {this.passTextToFather}
            />
          </View>
          {/* <Inputs name='Phone' icon='phone'/> */}

          <View
            style={[
              styles.inputContainerWrap,
              { borderColor: this.state.isFocused ? "#0779ef" : "#eee" },
            ]}
          >
            <Input
              onChangeText={this.onChangePassword}
              placeholder="Password"
              onFocus={this.onFoucusChange}
              inputContainerStyle={styles.inputContainer}
              inputSyle={styles.inputText}
              secureTextEnrty="false"
              leftIcon={
                <Icon
                  name="lock"
                  size={20}
                  color={this.state.isFocused ? "#0779e4" : "grey"}
                />
              }
              // onChangeText = {this.passTextToFather}
            />
          </View>
          {/* <Inputs name='Confirm Password' icon='lock' pass={true} /> */}
          <TouchableOpacity
            style={[styles.submitContainer, { backgroundColor: "blue" }]}
            onPress={this.handleRegister}
          >
            <Text style={styles.submitText}>Create</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.textBody}>Already have an account</Text>
            <Text
              style={[styles.textBody, { color: "blue" }]}
              onPress={() =>
                /*括号后面不能加空格 unexpected token*/
                this.props.navigation.navigate("Login")
              }
            >
              {" "}
              Login Here
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 348,
    height: 300,
    marginVertical: 50,
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: 40,
  },
  textBody: {
    fontSize: 16,
  },
  submitContainer: {
    width: "90%",
    height: 50,
    borderColor: "blue",
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 0,
  },
  submitText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    alignSelf: "center",
    marginVertical: 10,
  },
  inputContainerWrap: {
    width: "90%",
    height: 50,
    borderRadius: 100,
    marginVertical: 15,
    borderWidth: 3.5,
  },
  inputContainer: {
    borderBottomWidth: 0,
  },
  inputText: {
    color: "#0779e4",
    fontWeight: "bold",
    marginLeft: 5,
  },
});
