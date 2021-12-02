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


export default class MyPost extends React.Component{
    render() {
        return (
            <ScrollView>
                <View style={styles.container} >
            <View style={{ flexDirection: 'column' }}>
            <View style={{ flex: 1, marginTop: 10 }}><Text style={{ color: "grey" }}>MM/DD/YY</Text></View>
            <View style={{ flex: 4 }} >
              <Image source={{
                uri: 'https://picsum.photos/id/500/200/200',
              }} style={{ width: 250, height: 250, borderRadius: 10, marginTop: 10 }} />
            </View>

            <View style={{ flex: 1, marginTop: 10 }}><Text style={{ color: "grey" }}>MM/DD/YY</Text></View>
            <View style={{ flex: 4 }} >
              <Image source={{
                uri: 'https://picsum.photos/id/240/200/200',
              }} style={{ width: 250, height: 250, borderRadius: 10, marginTop: 10}} />
            </View>

            </View>
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
})
