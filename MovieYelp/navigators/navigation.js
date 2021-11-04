import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

// import {createAppContainer } from "react-navigation";
// import {createStackNavigator} from 'react-navigation-stack'//how many screens you wanna have in a stack

import SignUp from '../screens/SignUp';
import Login from "../screens/Login"
import HomePage from '../screens/HomePage';


const Stack = createStackNavigator();//main stack for login/signUp/User's Homepage

function Navigation() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName = "Login">
                <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
                <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}} />
                <Stack.Screen name="HomePageNavigation" component = {HomePage} options={{headerShown:false}}/>
                {/* <Stack.Screen name="HomePage" component={MainNavigation} options={{headerShown:false}}/> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;