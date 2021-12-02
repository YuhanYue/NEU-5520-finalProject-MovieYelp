import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

import Inputs from "../components/Inputs";

import AsyncStorage from "@react-native-async-storage/async-storage";
import Parse from "parse/react-native";

//Before using the SDK...
Parse.setAsyncStorage(AsyncStorage);

Parse.initialize(
  "iX9UmLwWNOSVhSfrvY7YnWOAyZPNujc2cvKSCkFT",
  "NSdhBidUcAsiTET1C4r7ZWGjgTDCLgBdvFkecWr5"
); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = "https://parseapi.back4app.com/";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: " ",
      userEmail: " ",
      password: " ",
      allUsers: [],
      user: null,
    };
    this.retrieveAllUsers();
  }

  retrieveAllUsers = async () => {
    if (this.state.allUsers.length != 0) return;
    const query = new Parse.Query("Users");
    let queryResult = null;
    try {
      queryResult = await query.find();
    } catch (error) {
    }
    this.setState({ allUsers: queryResult });

  };


  onUsernameChanged = (newUsername) => {
    this.state.username = newUsername;
    //update state usernmae
  };

  onEmailChanged = (newUserEmail) => {
    let email = newUserEmail.toLowerCase()
    this.state.userEmail = email;
    //update state usernmae
  };

  onPasswordChanged = (newPassword) => {
    let password = newPassword.toLowerCase()
    this.state.password = password;
  };

  checkEmailExist = () => {
    var judge = false;
    this.state.allUsers.forEach((item) => {
      if (item.get("email") === this.state.userEmail) {
        judge = true;
      }
    });

    return judge;
  };

  checkPassword = () => {
    var judge = false;
    this.state.allUsers.forEach((item) => {
      if (
        item.get("email") === this.state.userEmail &&
        item.get("password") === this.state.password
      ) {
        judge = true;
        this.state.user = item;
      }
    });

    return judge;
  };


  login = () => { };

  setDefaultUser = () => {
    this.state.allUsers.forEach((item) => {
      if (item.get("email") === "jiabin@gmail.com") {
        this.state.user = item;
      }
    });
  };

  render() {
    return (
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={styles.container}>
          <Image source={require("../assets/login.gif")} style={styles.image} />
          <Text style={styles.textTitle}>Welcome Back</Text>
          <Text style={styles.textBody}>Log in to your existant account</Text>
          <View style={{ marginTop: 20 }} />
          <Inputs name="Email" icon="user"
            password={false}
            onChangeText={this.onEmailChanged} />
          <Inputs
            name="Password"
            icon="lock"
            password={true}
            onChangeText={this.onPasswordChanged}
          />
          <View style={{ width: "90%" }}>
            <Text style={([styles.textBody], { alignSelf: "flex-end" })}>
              Forgot Password?
            </Text>
          </View>
          <TouchableOpacity
            style={[styles.submitContainer, { backgroundColor: "#0251ce" }]}
            onPress={() => {
              const inDevelop = false;
              if (inDevelop) {
                this.setDefaultUser();

                this.props.navigation.navigate("HomePageNavigation", {
                  user: this.state.user,
                });
              } else {
                if (!this.checkEmailExist()) {
                  alert("Email does not exist, please sign up");
                } else if (!this.checkPassword()) {
                  alert("Wrong password. Please enter again");
                } else {
                  this.props.navigation.navigate("HomePageNavigation", {
                    user: this.state.user,
                  });
                }
              }
            }}
          >
            <Text style={styles.submitText}>LOG IN</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", marginVertical: 5 }}>
            <Text style={styles.textBody}>Don't have an account</Text>
            <Text
              style={[styles.textBody, { color: "blue" }]}
              onPress={() => this.props.navigation.navigate("SignUp")}
            >
              {" "}
              Sign Up
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
    width: 400,
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
});
