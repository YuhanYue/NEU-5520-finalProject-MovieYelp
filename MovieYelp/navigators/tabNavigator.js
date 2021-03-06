import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Profile from "../screens/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CardViewScreen from "../screens/CardViewScreen";
import SearchScreen from "../screens/SearchScreen";
import MoviePage from "../screens/MoviePage";
import MapViewScreen from "../screens/MapViewScreen";

const MapForMovieStack = createNativeStackNavigator();

var user = null;
function MapForMovieStackScreen() {
  return (
    <MapForMovieStack.Navigator>
      <MapForMovieStack.Screen
        name="card"
        component={CardViewScreen}
        options={{ headerShown: false }}
        initialParams={{ user: user }}
      />
      <MapForMovieStack.Screen
        name="movie"
        component={MoviePage}
        options={{ headerShown: true }}
        initialParams={{ user: user }}
      />
    </MapForMovieStack.Navigator>
  );
}

const CallOutForMovieStack = createNativeStackNavigator();

function CallOutForMovieStackScreen() {
  return (
    <CallOutForMovieStack.Navigator>
      <CallOutForMovieStack.Screen
        name="map"
        component={MapViewScreen}
        options={{ headerShown: false }}
        initialParams={{ user: user }}
      />
      <CallOutForMovieStack.Screen
        name="movie"
        component={MoviePage}
        options={{ headerShown: true }}
        initialParams={{ user: user }}
      />
    </CallOutForMovieStack.Navigator>
  );
}

const SearchForMovieStack = createNativeStackNavigator();

function SearchForMovieStackScreen() {
  return (
    <SearchForMovieStack.Navigator>
      <SearchForMovieStack.Screen
        name="search"
        component={SearchScreen}
        options={{ headerShown: false }}
        initialParams={{ user: user }}
      />
      <SearchForMovieStack.Screen
        name="movie"
        component={MoviePage}
        initialParams={{ user: user }}
        options={{ headerShown: true }}
      />
    </SearchForMovieStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
export default class TabNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    user = this.props.route.params.user;
  }
  render() {
    return (
      <NavigationContainer independent={true}>
        <Tab.Navigator
          scrernOptions={{
            showLabel: false,
            style: {
              position: "absolute",
              bottom: 25,
              left: 20,
              right: 20,
              elevation: 0,
              borderRadius: 50,
              height: 90,
              ...styles.shadow,
            },
          }}
          initialRouteName="CardView"
        >
          <Tab.Screen
            name="CardView"

            component={MapForMovieStackScreen}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: () => (
                <View
                  style={{
                    alignContent: "center",
                    justifyContent: "center",
                    top: 10,
                  }}
                >
                  <Image
                    source={require("../assets/HomeIcon2.png")}
                    resizeMode="contain"
                    style={{
                      width: 40,
                      height: 40,
                    }}
                  />
                  <Text
                  >
                    Home
                  </Text>
                </View>
              ),
            }}
          // user={this.state.user}
          />
          <Tab.Screen
            name="Map"
            component={CallOutForMovieStackScreen}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: () => (
                <View
                  style={{
                    alignContent: "center",
                    justifyContent: "center",
                    top: 10,
                  }}
                >
                  <Image
                    source={require("../assets/mapIcon1.jpeg")}
                    resizeMode="contain"
                    style={{
                      width: 38,
                      height: 38,
                    }}
                  />
                  <Text
                  // style={{color: focused ?'#e32f45' : '#748c94',}}
                  >
                    Map
                  </Text>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={SearchForMovieStackScreen}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: () => (
                <View
                  style={{
                    alignContent: "center",
                    justifyContent: "center",
                    top: 10,
                  }}
                >
                  <Image
                    source={require("../assets/searchIcon.png")}
                    resizeMode="contain"
                    style={{
                      marginTop: 3,
                      width: 30,
                      height: 30,
                      marginBottom: 8,
                    }}
                  />
                  <Text
                  // style={{color: focused ?'#e32f45' : '#748c94',}}
                  >
                    Search
                  </Text>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            children={() => <Profile user={user}></Profile>}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: () => (
                <View
                  style={{
                    alignContent: "center",
                    justifyContent: "center",
                    top: 10,
                  }}
                >
                  <Image
                    source={require("../assets/Profile.png")}
                    resizeMode="contain"
                    style={{
                      width: 40,
                      height: 40,
                    }}
                  />
                  <Text
                  // style={{color: focused ?'#e32f45' : '#748c94',}}
                  >
                    Profile
                  </Text>
                </View>
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
