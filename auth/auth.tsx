import React, { useState, useEffect } from 'react';
import { NavigationContainer} from '@react-navigation/native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Context } from "../App";
import {Text,  Image, View, StyleSheet, Button, TextInput, Alert } from "react-native"
import SignUp from './signup';
import SignIn from './signin';

const Stack = createNativeStackNavigator();

function Connect() {
    return (
        <Stack.Navigator initialRouteName="sigin"
            screenOptions={{
            headerShown: false,
            }} >
            <Stack.Screen name="sigin" component={SignIn} />
            <Stack.Screen name="signup" component={SignUp} />
        </Stack.Navigator>
    );
}

export default Connect;
