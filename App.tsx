import React, {useState} from 'react';
import { DefaultTheme, NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import Ionicons from 'react-native-vector-icons/Ionicons';

import Login from './screens/page_login';
import Drawer from './screens/page_drawer';
import Card from './screens/page_card';
import Search from './screens/page_search';
import Notif from './screens/page_notif';
import { View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({}) => ({
          tabBarStyle: {
            backgroundColor: '#035A5A',
            borderRadius: 24,
            borderColor: '#033E3E00',
          },
          headerShown: false,
          tabBarActiveTintColor: '#FDC80B',
          tabBarInactiveTintColor: '#FFFFFF',
        })}
      >
        <Tab.Screen name="Mes cartes" component={Card}/>
        <Tab.Screen name="Rechercher" component={Search}/>
        <Tab.Screen name=" " component={Drawer}/>
        <Tab.Screen name="Notification" component={Notif}/>
        <Tab.Screen name="Profil" component={Login} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
