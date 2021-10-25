import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    Image
} from 'react-native'

import Submit from '../components/Submit'
import Inputs from '../components/Inputs'

const SignUp = props =>{
    return(
        <ScrollView style={{backgroundColor: 'white'}}>
            <View style={styles.container}>
                <Image source={require('../assets/registeration.png')}
                style={styles.image}/> 
                 <Text style={styles.textTitle}>Let's Get Started</Text>
                 <Text style={styles.textBody}>Create a new account for your dehaze APP</Text>
                 <Inputs name='Full Name' icon='user'/>
                 <Inputs name='Email' icon='envelope'/>
                 <Inputs name='Phone' icon='phone'/>
                 <Inputs name='Password' icon='lock' pass={true} />
                 <Inputs name='Confirm Password' icon='lock' pass={true} />
                 <Submit color = '#0251ce' title='CREATE' /> 
                 <View style={{flexDirection: 'row'}}>
                     <Text style={styles.textBody}>Already have an account</Text>
                     <Text style={[styles.textBody, {color:'blue'}]} onPress={(  /*括号后面不能加空格 unexpected token*/
                     ) => props.navigation.navigate('Home')}> Login Here</Text>
                 </View>
            </View>
           
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image:{
        width: 348,
        height: 300,
        marginVertical: 50
    },
    textTitle:{
        fontWeight:'bold',
        fontSize:40,
    },
    textBody:{
        fontSize: 16,
    
    }
    
});

export default SignUp;