import * as React from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import {View, Text, StyleSheet, Button, TextInput, ScrollView, ImageBackground, Pressable, Alert} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './screens/page_login';
import Drawer from './screens/page_drawer';
import styles from './style';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login Page" component={Login} />
        <Tab.Screen name="Drawer" component={Drawer} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
