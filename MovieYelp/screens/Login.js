import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native'

import Inputs from '../components/Inputs'
import Submit from '../components/Submit'
import HomePage from './HomePage';


export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: ' ',
            password: ' ',
        }
    }


    // componentDidMount() {
    //     this.retrieveUsername();
    // }


    onUsernameChanged = (newUsername) => {
        this.username = newUsername;
        //update state usernmae
    };

    onPasswordChanged = (newPassword) => {
        this.password = newPassword;
    };

    // retrieveUsername = async () => {
    //     try{
    //       const username = await AsyncStorage.getItem("username")
    //       if(username !== null){
    //         console.log(username);
    //         this.props.updateUsername(username);
    //       }
    //     }catch(error){}

    //   }



    render() {
        return (
            <ScrollView style={{ backgroundColor: 'whilte' }}>
                <View style={styles.container}>
                    <Image source={require('../assets/login.png')}
                        style={styles.image} />
                    <Text style={styles.textTitle}>Welcome Back</Text>
                    <Text style={styles.textBody}>Log in to your existant account</Text>
                    <View style={{ marginTop: 20 }} />
                    <Inputs name="Email" icon="user" />
                    <Inputs name="Password" icon="lock" pass={true} />
                    <View style={{ width: '90%' }}>
                        <Text style={[styles.textBody], { alignSelf: 'flex-end' }}>Forgot Password?</Text>
                    </View>
                    <TouchableOpacity style={[styles.submitContainer, { backgroundColor: '#0251ce' }]}
                        onPress={() =>  this.props.navigation.replace('HomePageNavigation')}>
                        <Text style={styles.submitText}>LOG IN</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                        <Text style={styles.textBody}>Don't have an account</Text>
                        <Text style={[styles.textBody, { color: 'blue' }]}
                            onPress={() => this.props.navigation.navigate('SignUp')}> Sign Up</Text>
                    </View>

                </View>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 400,
        height: 300,
        marginVertical: 50
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 40,
    },
    textBody: {
        fontSize: 16,

    },
    submitContainer: {
        width: '90%',
        height: 50,
        borderColor: 'blue',
        borderRadius: 10,
        marginVertical: 10,
        borderWidth: 0,
    },
    submitText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
        marginVertical: 10,
    }

})
