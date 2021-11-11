// import React from 'react';
// import {
//   View,
//   StyleSheet,
//   Text,
//   ScrollView,
//   Image,
//   TouchableOpacity,
//   Dimensions,
// } from 'react-native'

// import {
//   TouchableRipple,

// } from 'react-native-paper';

// import Card from '../components/Card';
// import styled from 'styled-components';
// import Login from './Login';

// import MapView from 'react-native-maps';



// const width = Dimensions.get("window").width;
// export default class MapViewScreen extends React.Component {


//   render() {
//     return (
//          <MapView
//     initialRegion={{
//       latitude: 37.78825,
//       longitude: -122.4324,
//       latitudeDelta: 0.0922,
//       longitudeDelta: 0.0421,
//     }}
//   />

//     );
//   }
// }


import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps'

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
    }
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



  render() {
    return (
      <MapView style={styles.map}
        region={this.state.region}
      >
        <Marker
          coordinate={{ latitude: this.state.region.latitude, longitude: this.state.region.longitude }}
          
        />
      </MapView>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute'
  },
  map: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute'
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});