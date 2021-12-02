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
    // console.log("!!!!OverView here");
    // console.log(this.props.movieItem);
    // console.log(this.props.user);

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />

        {/* Onboarding Image */}
        <Swiper showsButtons={true}>
          {/* //TODO: FlatList */}
          <View style={styles.slide1}>
            <Image
              source={{ uri: this.props.movieItem.get("photo").url() }}
              style={styles.image}
            />
            {/* <Image source={require('../assets/avatar.jpg')}
                        style={styles.image} /> */}
          </View>
        </Swiper>

        {/* Title and text container */}
        <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
          {/* Title container */}
          <View>
            {/* <Text style={styles.title}>{this.props.user.get("userName")}</Text> */}

            <Text style={styles.title}>{this.props.movieItem.get("name")}</Text>
            <Text style={styles.textStyle}>
              {this.props.movieItem.get("description")}
            </Text>
          </View>

          <View style={{ marginTop: 10 }}>
            <Text style={styles.textStyle}>
              Related Movies: {this.props.movieItem.get("relatedMovies")}
            </Text>
          </View>

          {/* Text container */}
          <View style={{ marginTop: 10 }}>
            <Text style={styles.textStyle}>
              Schedule visits in just a few clicks
            </Text>
            <Text style={styles.textStyle}>visit in just a few clicks</Text>
          </View>
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
      </SafeAreaView>
    );

    // <ScrollView>
    //     <Title>{this.state.locationName}</Title>
    //     <ScrollView
    //         style={{
    //             flexDirection: 'row',
    //             height: '40%',
    //             marginBottom: 10,
    //         }}
    //         horizontal={true}
    //         showsHorizontalScrollIndicator={false}>
    //         {/*TODO: use FlatList to display images */}
    //         <Image source={require('../assets/NEU.png')}
    //             style={styles.image} />
    //         <Image source={require('../assets/Scene1.jpeg')}
    //             style={styles.image} />
    //         <Image source={require('../assets/avatar.jpg')}
    //             style={styles.image} />
    //     </ScrollView>
    //     <View style = {styles.locationIntroductionSection}>
    //     <Text style ={styles.movieIntro}>
    //       {this.state.locationIntroduction}
    //     </Text>
    //     </View>
    //     <Text>Related Movies:</Text>
    //     {/* FlatList */}
    //     <View style={styles.relatedMoviesSection}>
    //         <Text>The Mars</Text>
    //         <Image></Image>
    //     </View>

    //     <View style={styles.relatedMoviesSection}>
    //         <Text>IntelliJ</Text>
    //         <Image></Image>
    //     </View>
    // </ScrollView>
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
    height: 420,
    width: "100%",
    borderBottomLeftRadius: 100,
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
