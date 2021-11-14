import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { defineAnimation } from "react-native-reanimated";

import Profile from "../screens/Profile";
import SignUp from "../screens/SignUp";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CardViewScreen from "../screens/CardViewScreen";
import SearchScreen from "../screens/SearchScreen";
import MoviePage from "../screens/MoviePage";
import MapViewScreen from "../screens/MapViewScreen";

const MapForMovieStack = createNativeStackNavigator();

function MapForMovieStackScreen() {
  return (
    <MapForMovieStack.Navigator>
      <MapForMovieStack.Screen name="card" component={CardViewScreen} />
      <MapForMovieStack.Screen name="movie" component={MoviePage} />
    </MapForMovieStack.Navigator>
  );
}

const CallOutForMovieStack = createNativeStackNavigator();

function CallOutForMovieStackScreen() {
  return (
    <CallOutForMovieStack.Navigator>
      <CallOutForMovieStack.Screen name="map" component={MapViewScreen} />
      <CallOutForMovieStack.Screen name="movie" component={MoviePage} />
    </CallOutForMovieStack.Navigator>
  );
}

function SearchForMovieStackScreen() {
  return (
    <MapForMovieStack.Navigator>
      <MapForMovieStack.Screen name="search" component={SearchScreen} />
      <MapForMovieStack.Screen name="movie" component={MoviePage} />
    </MapForMovieStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
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
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignContent: "center",
                  justifyContent: "center",
                  top: 10,
                }}
              >
                <Image
                  source={require("../assets/dehaze.png")}
                  resizeMode="contain"
                  style={{
                    width: 40,
                    height: 40,
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
          name="Map"
          component={CallOutForMovieStackScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignContent: "center",
                  justifyContent: "center",
                  top: 10,
                }}
              >
                <Image
                  source={require("../assets/dehaze.png")}
                  resizeMode="contain"
                  style={{
                    width: 40,
                    height: 40,
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
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignContent: "center",
                  justifyContent: "center",
                  top: 10,
                }}
              >
                <Image
                  source={require("../assets/search.png")}
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
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => (
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
};

export default TabNavigator;

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
