import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native'

import Card from '../components/Card';



export default class MapScreen extends React.Component{

    constructor(props){
        super(props); 
    }
    
    
    render(){
        return(
                <View>
                    <Card/>
                    <Text>This is a map screen</Text>         
                </View>

         );
    }
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    
})
