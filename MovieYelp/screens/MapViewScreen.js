import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacityComponent,
  View,
} from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import MapView, {
  Marker,
  Callout,
  CalloutSubview,
  ProviderPropType,
} from "react-native-maps";
import MoviePage from "./MoviePage";
import CustomCallout from "./CustomCallout";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Parse from "parse/react-native";
import CardUri from "../components/CardUri";
import { FlatList } from "react-native-gesture-handler";

//Before using the SDK...
Parse.setAsyncStorage(AsyncStorage);

Parse.initialize(
  "yyq9HLKMQVgQFbCIVBl7dAaIboyCTbyoRQjUYZc8",
  "KBig8FUxq4rXuILfdgXQX6L053KYdDM8SclCM2Vs"
); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = "https://parseapi.back4app.com/";

export default class MapViewScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 49.285414,
        longitude: -123.112495,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      user: this.props.route.params.user,
      movie: [],
    };
    this.retrieveMovie();
  }

  getInitialState() {
    return {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
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
    console.log(queryResult);
  };

  renderItem = ({ item }) => (
    <Marker
      coordinate={{
        latitude: item.get("latitude"),
        longitude: item.get("longitude"),
      }}
    >
      <Callout style={styles.customView}>
        <CalloutSubview
          onPress={() =>
            this.props.navigation.navigate("movie", {
              movieItem: item,
              user: this.state.user,
            })
          }
          style={[styles.calloutButton]}
        >
          <Text>Click me to see more info about this place</Text>
        </CalloutSubview>
      </Callout>
    </Marker>
  );

  render() {
    return (
      <MapView
        style={styles.map}
        region={this.state.region}
        ref={(ref) => (this.map = ref)}
      >
        {this.state.movie.map((item) => (
          <Marker
            coordinate={{
              latitude: item.get("latitude"),
              longitude: item.get("longitude"),
            }}
          >
            <Callout style={styles.customView}>
              <CalloutSubview
                onPress={() =>
                  this.props.navigation.navigate("movie", {
                    movieItem: item,
                  })
                }
                style={[styles.calloutButton]}
              >
                <Text>{item.get("name")}</Text>
              </CalloutSubview>
            </Callout>
          </Marker>
        ))}

        {/* <Marker
          coordinate={{
            latitude: this.state.region.latitude,
            longitude: this.state.region.longitude,
          }}
        >
          <Callout style={styles.customView}>
            <CalloutSubview
              onPress={() => this.props.navigation.navigate("movie")}
              style={[styles.calloutButton]}
            >
              <Text>Click me to see more info about this place</Text>
            </CalloutSubview>
          </Callout>
        </Marker>

        <Marker coordinate={{ latitude: 49.282961, longitude: -123.120472 }}>
          <Callout style={styles.customView}>
            <CalloutSubview
              onPress={() => this.props.navigation.navigate("movie")}
              style={[styles.calloutButton]}
            >
              <Text>Click me to see more info about this place</Text>
            </CalloutSubview>
          </Callout>
        </Marker>

        <Marker coordinate={{ latitude: 49.28734, longitude: -123.117107 }}>
          <Callout style={styles.customView}>
            <CalloutSubview
              onPress={() => this.props.navigation.navigate("movie")}
              style={[styles.calloutButton]}
            >
              <Text>Click me to see more info about this place</Text>
            </CalloutSubview>
          </Callout>
        </Marker>

        <Marker coordinate={{ latitude: 49.246292, longitude: -123.116226 }}>
          <Callout style={styles.customView}>
            <CalloutSubview
              onPress={() => this.props.navigation.navigate("movie")}
              style={[styles.calloutButton]}
            >
              <Text>Click me to see more info about this place</Text>
            </CalloutSubview>
          </Callout>
        </Marker> */}
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute",
  },
  map: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  flatListStyle: {
    height: "100%",
  },
});
