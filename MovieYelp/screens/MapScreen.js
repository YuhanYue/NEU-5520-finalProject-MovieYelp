import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native'



export default class MapScreen extends React.Component{

    constructor(props){
        super(props); 
    }
    
    
    render(){
        return(
                <View>
                    <Text>This is a map</Text>         
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
