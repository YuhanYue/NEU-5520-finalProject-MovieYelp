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



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   userInfoSection: {
//     paddingHorizontal: 30,
//     marginBottom: 25,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   caption: {
//     fontSize: 14,
//     lineHeight: 14,
//     fontWeight: '500',
//   },
//   row: {
//     flexDirection: 'row',
//     marginBottom: 10,
//   },
//   infoBoxWrapper: {
//     borderBottomColor: '#dddddd',
//     borderBottomWidth: 1,
//     borderTopColor: '#dddddd',
//     borderTopWidth: 1,
//     flexDirection: 'row',

//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   infoBox: {
//     width: '100%',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })



import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

function MapViewScreen() {
  const [region, setRegion] = React.useState({
    latitude: -30.8501718,
    longitude: -50.1700368,
    latitudeDelta: 0.922,
    longitudeDelta: 0.0421
  })

  return (
    <View style={styles.container}>
      <Text>Pantalla de inicio</Text>      
      <MapView
        initialRegion={region}
        showsUserLocation={true}
        showsCompass={true}
        rotateEnabled={true}
        style={styles.map} 
      />
    </View>
  );
}

export default MapViewScreen;

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
  }
});