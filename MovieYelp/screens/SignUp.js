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
// import database
// import database from "@react-native-firebase/database";
// const reference = database.ref("/users");
import AsyncStorage from "@react-native-async-storage/async-storage";
import Parse from "parse/react-native";
//Before using the SDK...
Parse.setAsyncStorage(AsyncStorage);

Parse.initialize(
  "iX9UmLwWNOSVhSfrvY7YnWOAyZPNujc2cvKSCkFT",
  "NSdhBidUcAsiTET1C4r7ZWGjgTDCLgBdvFkecWr5"
); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = "https://parseapi.back4app.com/";

export default class SignUp extends React.Component {
  
  constructor(props) {
    
    super(props);
    this.state = {
      userEmail: "",
      userPassword: "",
      isFocused: false,
      avatar: null,
      userName : "",
      userBio : "",
    };

  }

  onFoucusChange = () => {
    this.setState({ isFocused: true });
  };


  onSaveNewUser = async () => {
    // const query = new Parse.Query("User");
    let user = new Parse.Object.extend("Users");
    var User = new user();
    User.set("userName",this.state.userName);
    User.set("password",this.state.userPassword);
    User.set("userBio",this.state.userBio);
    User.set("email",this.state.userEmail.toLowerCase());

    try {
      
      let result = await User.save();
      alert("New object created with objectId: " + result.id);
      // console.log(person.get("avatar").url());
    } catch (error) {
      alert("Failed to create new object, with error code: " + error.message);
    }

    this.props.navigation.navigate("Login");
  };


  onChangePassword = (password) => {
    this.setState({
      userPassword: password,
    });
  };

  onChangeUserEmail = (email) => {
    this.setState({
      userEmail: email,
    });
  };

  onChangeUserName = (name) => {
    this.setState({
      userName: name,
    });
  };

  onChangeUserBio = (Bio) => {
    this.setState({
      userBio: Bio,
    });
  };
  render() {

    return (
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={styles.container}>
          <Image
            source={require("../assets/registeration.png")}
            style={styles.image}
          />
  
          <Text style={styles.textTitle}>Let's Get Started</Text>
          <Text style={styles.textBody}>
            Create a new account for your dehaze APP
          </Text>
          <View
            style={[
              styles.inputContainerWrap,
              { borderColor: this.state.isFocused ? "#0779ef" : "#eee" },
            ]}
          >
            <Input
              onChangeText={this.onChangeUserName}
              placeholder="Name"
              onFocus={this.onFoucusChange}
              inputContainerStyle={styles.inputContainer}
              inputSyle={styles.inputText}
              secureTextEnrty="false"
              leftIcon={
                <Icon
                  name="pencil"
                  size={20}
                  color={this.state.isFocused ? "#0779e4" : "grey"}
                />
              }
              // onChangeText = {this.passTextToFather}
            />
          </View>
          <View
            style={[
              styles.inputContainerWrap,
              { borderColor: this.state.isFocused ? "#0779ef" : "#eee" },
            ]}
          >
            <Input
              onChangeText={this.onChangeUserBio}
              placeholder="Bio"
              onFocus={this.onFoucusChange}
              inputContainerStyle={styles.inputContainer}
              inputSyle={styles.inputText}
              secureTextEnrty="false"
              leftIcon={
                <Icon
                  name="edit"
                  size={20}
                  color={this.state.isFocused ? "#0779e4" : "grey"}
                />
              }
              // onChangeText = {this.passTextToFather}
            />
          </View>
          {/* <Inputs name='Full Name' icon='user'/> */}
          <View
            style={[
              styles.inputContainerWrap,
              { borderColor: this.state.isFocused ? "#0779ef" : "#eee" },
            ]}
          >
            <Input
              onChangeText={this.onChangeUserEmail}
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
            onPress={()=>
            this.onSaveNewUser()
            }
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
