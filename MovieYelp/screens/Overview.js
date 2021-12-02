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
  StatusBar,
  Pressable,
} from "react-native";
import Swiper from "react-native-swiper";
import { SafeAreaView } from "react-native-safe-area-context";
export default class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationName: "NEU vancouver",
      locationIntroduction:
        "Northeastern, founded in 1898, is a global research university built on a tradition of engagement with the world.",
    };
  }

  COLORS = {
    white: "#FFF",
    dark: "#000",
    light: "#f6f6f6",
    grey: "#A9A9A9",
    blue: "#5f82e6",
    red: "red",
    tranparent: "rgba(0,0,0,0)",
  };

  render() {
    return (
      <View>
        {/* Onboarding Image */}

        {/* Title and text container */}
        <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
          {/* Title container */}
          <View>
            {/* <Text style={styles.title}>{this.props.user.get("userName")}</Text> */}

            <Text style={styles.title}>{this.props.movieItem.get("name")}</Text>
            <Text style={styles.textStyle}>
              🔎 {this.props.movieItem.get("description")}
            </Text>
          </View>

          <View style={{ marginTop: 10 }}>
            <Text style={styles.relatedMovies}>
              🎬 Related Movies: {this.props.movieItem.get("relatedMovies")}
            </Text>
          </View>

          {/* Text container */}

        </View>

        {/* Button container */}
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            paddingBottom: 40,
          }}
        >
          {/* button */}
        </View>
        <View style={{ alignItems: "center" }}>
          <Image
            source={{ uri: this.props.movieItem.get("photo").url() }}
            style={styles.image}
          />
        </View>
      </View>
    );
  }
}

const Title = styled.Text`
  font-size: 25px;
  color: #b8bece;
  font-weight: 500;
  margin-bottom: 20;
  font-weight: bold;
`;

const styles = StyleSheet.create({
  image: {
    height: 440,
    width: "100%",

  },
  indicatorContainer: {
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  indicator: {
    height: 3,
    width: 30,
    backgroundColor: "#A9A9A9",
    borderRadius: 5,
    marginHorizontal: 5,
  },
  indicatorActive: {
    backgroundColor: "#000",
  },
  btn: {
    height: 60,
    marginHorizontal: 20,
    backgroundColor: "black",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  title: { fontSize: 32, fontWeight: "bold" },
  textStyle: { fontSize: 16, color: "#A9A9A9" },
  relatedMovies: {
    fontSize: 16,
    color: "#278AFB",
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});
