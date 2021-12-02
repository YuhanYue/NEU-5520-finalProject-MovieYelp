import React from 'react';
import styled from 'styled-components';
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    Dimensions,
    Animated,
    Modal,
    TextInput,
    Pressable
} from 'react-native'
import CameraButton from '../components/CameraButton';
import { Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import { block } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
const { width } = Dimensions.get('screen');

export default class Gallery extends React.Component{
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
            <Pressable
            activeOpacity={0.8}
            // onPress={() => navigation.navigate('DetailsScreen', house)}>
            >
            <View style={styles.card}>
              {/* House image */}
              <Image source={require('../assets/SFU.png')} style={styles.cardImage} />
              <View style={{marginTop: 10}}>
                {/* Title and price container */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                  }}>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    Hi
                  </Text>
                  {/* <Text
                    style={{fontWeight: 'bold', color: '#5f82e6', fontSize: 16}}>
                    $1,500
                  </Text> */}
                </View>
    
                {/* Location text */}
    
                <Text style={{color: '#A9A9A9', fontSize: 14, marginTop: 5}}>
                  Yuhan
                </Text>
    
                {/* Facilities container */}
                <View style={{marginTop: 10, flexDirection: 'row'}}>
                  <View style={styles.facility}>
                    <Icon name="visibility" size={18} />
                    <Text style={styles.facilityText}>2</Text>
                  </View>
                  <View style={styles.facility}>
                    <Icon name="recommend" size={18} />
                    <Text style={styles.facilityText}>2</Text>
                  </View>
                </View>
              </View>
            </View>
          </Pressable>
          </View>
          </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
    },
    reviewContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    thumbnail: {
        width: 150,
        height: 150,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 5,
        marginBottom: 10,
        marginTop: 5,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    relatedMoviesSection: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoBox: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    userInfo: {
        fontSize: 20,
        fontWeight: "bold",
        flexDirection: 'row',
    },
    reviewBody: {
        fontSize: 15,
        flexDirection: 'row',

    },
    reviewPart: {
        flexDirection: 'column',
    },
    submitContainer: {
        borderRadius: 100,
        width: '60%',
        height: 50,
        borderColor: 'blue',
        borderRadius: 10,
        marginVertical: 10,
        borderWidth: 0,
        justifyContent: 'center',
        alignSelf: "center",
        backgroundColor: "#C3E2DD"
    },
    submit: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
        marginVertical: 10,
    },
    bottomWrapper: {
        flexDirection: 'row',
    },
    card: {
        height: 250,
        backgroundColor: '#FFF',
        elevation: 10,
        width: width - 40,
        marginRight: 20,
        padding: 15,
        borderRadius: 20,
    },
    cardImage: {
        width: '100%',
        height: 140,
        borderRadius: 15,
    },
    facility: { flexDirection: 'row', marginRight: 15 },
    facilityText: { marginLeft: 5, color: '#97CAE5' },

})
