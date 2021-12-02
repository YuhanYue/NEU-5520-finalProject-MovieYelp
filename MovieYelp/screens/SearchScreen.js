import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SearchBar } from "react-native-elements";
import _ from "lodash";
import CardUri from "../components/CardUri";

import { FlatList } from "react-native-gesture-handler";

import AsyncStorage from "@react-native-async-storage/async-storage";
import Parse from "parse/react-native";

Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(
  "iX9UmLwWNOSVhSfrvY7YnWOAyZPNujc2cvKSCkFT",
  "NSdhBidUcAsiTET1C4r7ZWGjgTDCLgBdvFkecWr5"
); 
Parse.serverURL = "https://parseapi.back4app.com/";

// todo: search by movie name and location name
export default class SearchScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      keyExist: false,
      imagePath: null,
      text: null,
      DATA: this.props.DATA,
      movie: [],
      movieFiltered: [],
    };
    this.retrieveMovie();
  }

  static defaultProps = {
    DATA: [
      {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        movieName: "NEU",
      },
      {
        id: "bd7acbea-c2b1-46c2-aed5-3ad53abb28ba",
        movieName: "UBC",
      },
      {
        id: "bd7acbea-c2b1-46c3-aed5-3ad53abb28ba",
        movieName: "SFU",
      },
    ],
  };

  renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.infoBox}
      onPress={() =>
        this.props.navigation.navigate("movie", {
          movieItem: item,
        })
      }
    >
      <CardUri
        image={item.get("photo").url()}
        caption={item.get("name")}
        relatedMovies={item.get("relatedMovies")}
        location={item.get("location")}
      />
    </TouchableOpacity>
  );

  retrieveMovie = async () => {
    if (this.state.movie.length != 0) return;
    const query = new Parse.Query("movie");
    let queryResult = null;
    try {
      queryResult = await query.find();
    } catch (error) {
      alert("Failed to create new object, with error code: " + error.message);
    }
    this.setState({ movie: queryResult });
    this.setState({ movieFiltered: queryResult });
    console.log("queryResult");
    console.log(queryResult);
  };


  searchFilterFunction = (text) => {
    this.setState({ search: text });
    if (text) {
      const newData = this.state.movie.filter(function (item) {
        const itemData = item.get("name")
          ? item.get("name").toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.includes(textData);
      });
      this.setState({ movieFiltered: newData });
    } else {
      this.setState({ movieFiltered: this.state.movie });
    }
  };

  render() {
    const { search } = this.state;

    return (
      <View>
        <SearchBar
          style={styles.searchBarStyle}
          placeholder="Type movie name"
          onChangeText={(search) => this.searchFilterFunction(search)}
          value={search}
          lightTheme={true}
          inputContainerStyle={{ backgroundColor: "white" }}
        />
        <FlatList
          style={styles.flatListStyle}
          data={this.state.movieFiltered}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  searchBarStyle: {},
  flatListStyle: {
    height: "100%",
  },
  infoBox: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
