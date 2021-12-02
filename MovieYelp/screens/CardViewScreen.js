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

import styled from "styled-components";
import CardUri from "../components/CardUri";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Parse from "parse/react-native";

Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(
  "iX9UmLwWNOSVhSfrvY7YnWOAyZPNujc2cvKSCkFT",
  "NSdhBidUcAsiTET1C4r7ZWGjgTDCLgBdvFkecWr5"
); 
Parse.serverURL = "https://parseapi.back4app.com/";


const width = Dimensions.get("window").width;
export default class CardViewScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.route.params.user,
      movie: [],
      movieFiltered: [],
    }
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
    return (
      <ScrollView style={styles.container}>
        <View style={styles.titleBar}>
          <Image
            style={styles.avatar}
            source={{ uri: this.state.user.get("avatar").url() }}
          />
          <Text style={styles.userTitle}>👏Welcome back,</Text>
          <Text style={styles.username}>{this.state.user.get("userName")}</Text>
        </View>
        <Subtitle style={{ paddingTop: 10 }}>
          Starting your journey from...
        </Subtitle>
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
              location={item.get("location")}
            />
          </TouchableOpacity>
        ))}

      </ScrollView>
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
    backgroundColor: 'white',
  },
  titleBar: {
    width: "100%",
    flexDirection: 'column',
    height: 230,
    alignItems: 'center',
    justifyContent: "flex-end",
    backgroundColor: "#F8E7B4",
    borderBottomLeftRadius: 100,
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
    justifyContent: 'center',
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  username: {
    fontSize: 20,
    color: "#3c4560",
    fontWeight: 'bold',
    marginLeft: 0,

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',

    justifyContent: 'center',
    alignItems: 'center',
  },

  infoBox: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
