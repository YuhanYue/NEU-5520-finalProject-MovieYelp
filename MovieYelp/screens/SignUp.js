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
import { firebase } from "../firbase-config";
// import { firestore } from "@firebase/firestore";
// import database from "@react-native-firebase/database";
// import firestore from "@react-native-firebase/firestore";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: "",
      userPassword: "",
      isFocused: false,
    };
  }

  onFoucusChange = () => {
    this.setState({ isFocused: true });
  };

  handleRegister = async () => {
    try {
      // const user = createUserWithEmailAndPassword(
      //   auth,
      //   this.state.userEmail,
      //   this.state.userPassword
      // );
      // console.log(user);

      createUserWithEmailAndPassword(
        auth,
        this.state.userEmail,
        this.state.userPassword
      ).then((response) => {
        const uid = response.user.uid;
        const data = {
          id: uid,
          email: this.state.userEmail,
          // fullName,
        };
        console.log(data);
        const usersRef = firestore()
          .collection("users")
          .doc("5N4QYz7mpz6C0JsPxOsp");
        console.log(usersRef);
        // usersRef
        //   .doc(firestore, uid)
        //   .set(data)
        //   .catch((error) => {
        //     alert(error);
        //   });
      });
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
