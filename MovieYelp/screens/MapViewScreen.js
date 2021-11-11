
import React from 'react';
import { StyleSheet, Text, TouchableOpacityComponent, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import MapView, {
  Marker,
  Callout,
  CalloutSubview,
  ProviderPropType,
} from 'react-native-maps';
import MoviePage from './MoviePage';
import CustomCallout from './CustomCallout';

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
          coordinate={{ latitude: this.state.region.latitude, longitude: this.state.region.longitude }}>

<Callout
              style={styles.customView}
            >
                <CalloutSubview
                   onPress={() => this.props.navigation.navigate("movie")}
                  style={[styles.calloutButton]}
                >
                  <Text>Click me to see more info about this place</Text>
                  </CalloutSubview>
            </Callout>
          </Marker>
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