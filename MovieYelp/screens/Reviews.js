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
    TextInput
} from 'react-native'
import CameraButton from '../components/CameraButton';
import { Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';



export default class Reviews extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "Username",
            modalVisible: false,
        }
    }


    choosePhotoFromLibary = () =>{

    }


    render() {
        return (
            <ScrollView>
                <TouchableOpacity
                    onPress={() => {
                        this.setState({
                            modalVisible: true
                        })
                    }}>
                    {/* MODAL */}
                    <Text>
                        Write your own review!
                    </Text></TouchableOpacity>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                >
                    <View style={styles.reviewContainer}>
                        <Text>Please input your review about this shooting place:</Text>
                        <TextInput
                         style={{ height: 100, borderColor: 'gray', borderWidth: 2 }}
                            maxLength={200}
                            multiline
                            numberOfLines={4}
                        />
                        <Button
                        onPress = {this.choosePhotoFromLibary}>
                            <Text>Upload Image</Text>
                            </Button>
                        <TouchableOpacity style={styles.button}
                            onPress={() =>
                                this.setState({
                                    modalVisible: this.state.modalVisible == true ? false : true
                                })
                            }
                        >
                            <Text>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </Modal >


                <View style={styles.infoBoxWrapper}>
                    <Image style={styles.thumbnail}
                        source={require("../assets/DCPdehaze(1).jpg")} />
                    {/* fetch from Firebase and use flatlist t display all reviews */}
                    <View style={styles.reviewPart}>
                        <Text style={styles.userInfo}>
                            {this.state.username}
                            {"\n"}
                            {"\n"}</Text>
                        <Text style={styles.reviewBody}>This is the first view</Text>
                    </View>
                </View>
                <View style={styles.infoBoxWrapper}>
                    <Image style={styles.thumbnail}
                        source={require("../assets/DCPdehaze(1).jpg")} />
                    {/* fetch from Firebase and use flatlist t display all reviews */}
                    <View style={styles.reviewPart}>
                        <Text style={styles.userInfo}>
                            {this.state.username}
                            {"\n"}
                            {"\n"}</Text>
                        <Text style={styles.reviewBody}>This is the first view</Text>
                    </View>
                </View>

                <View style={styles.infoBoxWrapper}>
                    <Image style={styles.thumbnail}
                        source={require("../assets/DCPdehaze(1).jpg")} />
                    {/* fetch from Firebase and use flatlist t display all reviews */}
                    <View style={styles.reviewPart}>
                        <Text style={styles.userInfo}>
                            {this.state.username}
                            {"\n"}
                            {"\n"}</Text>
                        <Text style={styles.reviewBody}>This is the first view</Text>
                    </View>
                </View>
                <View style={styles.infoBoxWrapper}>
                    <Image style={styles.thumbnail}
                        source={require("../assets/DCPdehaze(1).jpg")} />
                    {/* fetch from Firebase and use flatlist t display all reviews */}
                    <View style={styles.reviewPart}>
                        <Text style={styles.userInfo}>
                            {this.state.username}
                            {"\n"}
                            {"\n"}</Text>
                        <Text style={styles.reviewBody}>This is the first view</Text>
                    </View>
                </View>
                <View style={styles.infoBoxWrapper}>
                    <Image style={styles.thumbnail}
                        source={require("../assets/DCPdehaze(1).jpg")} />
                    {/* fetch from Firebase and use flatlist t display all reviews */}
                    <View style={styles.reviewPart}>
                        <Text style={styles.userInfo}>
                            {this.state.username}
                            {"\n"}
                            {"\n"}</Text>
                        <Text style={styles.reviewBody}>This is the first view</Text>
                    </View>
                </View>

            </ScrollView>
        );
    }
}



const styles = StyleSheet.create({
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
    locationIntroductionSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
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
    }

})
