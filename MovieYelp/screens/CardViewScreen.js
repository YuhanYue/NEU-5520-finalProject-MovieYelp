import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { TouchableRipple } from "react-native-paper";

import Card from "../components/Card";
import styled from "styled-components";
import CardUri from "../components/CardUri";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Parse from "parse/react-native";
import Login from "./Login";
import { SwitchRouter } from "react-navigation";
import { FlatList } from "react-native-gesture-handler";
Parse.setAsyncStorage(AsyncStorage);

Parse.initialize(
  "iX9UmLwWNOSVhSfrvY7YnWOAyZPNujc2cvKSCkFT",
  "NSdhBidUcAsiTET1C4r7ZWGjgTDCLgBdvFkecWr5"
); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = "https://parseapi.back4app.com/";

const width = Dimensions.get("window").width;
export default class CardViewScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Yuhan",
      user: this.props.route.params.user,
      movie: [],
      movieFiltered: [],
    };
    this.retrieveMovie();
  }

  retrieveMovie = async () => {
    if (this.state.movie.length != 0) return;
    const query = new Parse.Query("movie");
    let queryResult = null;
    try {
      queryResult = await query.find();
    } catch (error) {
      // alert("Failed to create new object, with error code: " + error.message);
    }
    this.setState({ movie: queryResult });
    this.setState({ movieFiltered: queryResult });
    console.log("CCCCCCardView");

    console.log(queryResult);
  };

  renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.infoBox}
      onPress={() => {
        this.props.navigation.navigate("movie", {
          movieItem: item,
          user: this.state.user,
        });
      }}
    >
      <CardUri
        image={item.get("photo").url()}
        caption={item.get("name")}
        relatedMovies={item.get("relatedMovies")}
      />
    </TouchableOpacity>
  );
  render() {
    // console.log("----------CardViewHere");

    // // console.log(this.props.navigation.getState());
    // // console.log(this.props.navigation);
    // console.log(this.props);
    // console.log(this.props.user);
    // console.log(this.props.user.get("userName"));

    return (
      
      // <SafeAreaView style={{flex:1}}>
      <ScrollView style={styles.container}>
        <Circle
  cx={width / 2}
  cy={`-${898 - 20 + 2}`}
  r="898.5"
  fill="#EFF2F3"
  stroke="#C5CACD"
  strokeWidth="2"
/>
        <View style={styles.titleBar}>
          <Image
            style={styles.avatar}
            source={{ uri: this.state.user.get("avatar").url() }}
          />
          <Text style={styles.userTitle}>Welcome back,</Text>
          {/* this.username */}
          <Text style={styles.username}>{this.state.user.get("userName")}</Text>
        </View>
        {/* TODO:flatlist to fetch and display data */}
        <Subtitle style={{ paddingTop: 10 }}>
          Starting your journey from...
        </Subtitle>
        {/* <FlatList
          style={styles.flatListStyle}
          data={this.state.movie}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id}
        /> */}
        {this.state.movie.map((item) => (
          <TouchableOpacity
            style={styles.infoBox}
            onPress={() => {
              this.props.navigation.navigate("movie", {
                movieItem: item,
                user: this.state.user,
              });
            }}
          >
            <CardUri
              image={item.get("photo").url()}
              caption={item.get("name")}
              relatedMovies={item.get("relatedMovies")}
            />
          </TouchableOpacity>
        ))}
        {/* <TouchableOpacity
          style={styles.infoBox}
          onPress={() => this.props.navigation.navigate("movie")}
        >
          <Card
            image={require("../assets/NEU.png")}
            caption={"NEU Vancouver Campus"}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.infoBox}>
          <Card
            image={require("../assets/Scene1.jpeg")}
            caption={"NEU Vancouver Campus"}
            onPress
          />
        </TouchableOpacity> */}
      </ScrollView>
      // </SafeAreaView>
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
    backgroundColor: "white",
  },
  titleBar: {
    width: "100%",

    flexDirection: 'column',
    height:230,
    alignItems:'center',
    justifyContent: "flex-end",
    // marginLeft: 10//center
    backgroundColor: "#F8E7B4",
    borderBottomLeftRadius:100,
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
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  username: {
    fontSize: 20,
    color: "#3c4560",
    fontWeight: "bold",
    marginLeft: 0,
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
  flatListStyle: {
    height: "100%",
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
});
