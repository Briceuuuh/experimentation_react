import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
