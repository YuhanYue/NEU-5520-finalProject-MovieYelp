import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { defineAnimation } from 'react-native-reanimated';
import Profile from '../screen/Profile';
import Monitor from '../screen/Monitor'

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import DehazeResult from '../screen/DehazeResult'
//import TabNavigator from './tabNavigator'
import ImageSelect from '../screen/ImageSelect'
import Navigation from './navigation';

const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainNavigation(){
    return(
            <MainStack.Navigator initialRouteName="Tab">
                <MainStack.Screen name="DehazeResult" component={DehazeResult} options={{headerShown:true}} />
                <MainStack.Screen name="Tab" component={TabNavigator} options={{headerShown:false}} />
            </MainStack.Navigator>
    );
}

function TabNavigator (){
     return(
            <Tab.Navigator tabBarOptions={ {
                showLabel: false,
                style:{
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right:20,
                    elevation: 0,
                    borderRadius: 50,
                    height: 90,
                    ...styles.shadow,
                }
            }}
            initialRouteName = "Monitor">
                <Tab.Screen name="Monitor" component={Monitor} options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignContent: 'center', justifyContent:'center', top: 10,}}> 
                           <Image 
                           source = {require('../assets/dehaze.png')}
                           resizeMode = 'contain'
                           style = {{
                               width: 40,
                               height: 40,
                           }}
                           />
                            <Text 
                            // style={{color: focused ?'#e32f45' : '#748c94',}}
                            >Home</Text>
                        </View>
                    )
                }}/> 
               <Tab.Screen name="Dehaze" component={ImageSelect} options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignContent: 'center', justifyContent:'center', top: 10,}}> 
                           <Image 
                           source = {require('../assets/edit.png')}
                           resizeMode = 'contain'
                           style = {{
                               width: 40,
                               height: 40,
                           }}
                           />
                            <Text 
                            // style={{color: focused ?'#e32f45' : '#748c94',}}
                            >Dehaze</Text>
                        </View>
                    )
                }}/> 
                <Tab.Screen name="Profile" component={Profile} options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignContent: 'center', justifyContent:'center', top: 10,}}> 
                           <Image 
                           source = {require('../assets/Profile.png')}
                           resizeMode = 'contain'
                           style = {{
                               width: 40,
                               height: 40,
                           }}
                           />
                            <Text 
                            // style={{color: focused ?'#e32f45' : '#748c94',}}
                            >Profile</Text>
                        </View>
                    )
                }}/> 
               
            </Tab.Navigator>
     );
};

export default MainNavigation;


const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    }
});