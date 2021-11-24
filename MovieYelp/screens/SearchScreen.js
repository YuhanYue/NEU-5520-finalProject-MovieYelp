import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { SearchBar } from "react-native-elements";
import MoviePage from "./MoviePage";
import Profile from "./Profile";
import _ from 'lodash';

import CardViewScreen from "./CardViewScreen";
import Overview from "./Overveiw";
import Card from "../components/Card";
import Inputs from "../components/Inputs";
import Submit from "../components/Submit";
import { FlatList } from "react-native-gesture-handler";


// todo: search by movie name and location name
export default class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
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
  state = {
    search: "",
    keyExist: false,
    imagePath: null,
    text: null,
    DATA: this.props.DATA,

  };

  renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.infoBox}
      onPress={() => this.props.navigation.navigate("movie")}
    >
      <Card image={this.getImageURI(item.movieName)} caption={item.movieName} />
    </TouchableOpacity>
  );

  getImageURI(name) {
    if (name === "NEU") {
      return require("../assets/NEU.png");
    } else if (name === "UBC") {
      return require("../assets/UBC.png");
    } else if (name === "SFU") {
      return require("../assets/SFU.png");
    }
    return uri;
  }



  searchFilterFunction = (text) => {
    this.setState({ search: text });
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = this.props.DATA.filter(function (item) {
        const itemData = item.movieName
          ? item.movieName.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return item.movieName.includes(textData);
      });

      this.setState({ DATA: newData });
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      this.setState({ DATA: this.props.DATA });
      // setFilteredDataSource(masterDataSource);
    }
  };


  render() {
    const { search } = this.state;
    // this.searchFilterFunction = this.searchFilterFunction.bind(this);

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
          data={this.state.DATA}
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
