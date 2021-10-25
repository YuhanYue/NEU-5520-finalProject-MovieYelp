import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

// import {createAppContainer } from "react-navigation";
// import {createStackNavigator} from 'react-navigation-stack'//how many screens you wanna have in a stack

import SignUp from '../screen/SignUp'
import Login from '../screen/Login'
import TabNavigator from './tabNavigator'
import DehazeResult from '../screen/DehazeResult'
import MainNavigation from './MainNavigator'
import test from '../screen/test'

const Stack = createStackNavigator();

const Navigation = props => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Login} options={{headerShown:false}} />
                <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}} />
                <Stack.Screen name="MainPage" component={MainNavigation} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;