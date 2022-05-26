import React, {Component, useState} from 'react';
import { DefaultTheme, NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/page_login';
import Drawer from './screens/page_drawer';
import Card from './screens/page_card';
import Search from './screens/page_search';
import Notif from './screens/page_notif';
import { Image, View } from 'react-native';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarStyle: {
            backgroundColor: '#035A5A',
            borderRadius: 24,
            borderColor: '#033E3E00',
            position: 'absolute',
          },
          headerShown: false,
          tabBarActiveTintColor: '#FDC80B',
          tabBarInactiveTintColor: '#FFFFFF',
        })}
      >
        <Tab.Screen name="Mes cartes" component={Card} options={{
          tabBarIcon:({focused}) => (
            <Image source={require('./icon/card.png')}
            resizeMode="contain"
            style={{width: 25,
                    height:25,
                    tintColor: focused ? '#FDC80B' : '#FFFFFF',
                    transform: focused ? [{ rotate: '330deg'}] : [{ rotate: '0deg'}],
                    top: focused ? -2: 0,
            }}
            />
          ),
        }} />
        <Tab.Screen name="Rechercher" component={Search} options={{
          tabBarIcon:({focused}) => (
            <Image source={require('./icon/search.png')}
            resizeMode="contain"
            style={{width: focused ? 35 : 25,
                    height: focused ? 35 : 25,
                    tintColor: focused ? '#FDC80B' : '#FFFFFF',
                    transform: focused ? [{ rotate: '330deg'}] : [{ rotate: '0deg'}],
                    top: focused ? -2: 0,
            }}
            />
          ),
        }}/>
        <Tab.Screen name=" " component={Drawer} options={{
          tabBarIcon:({focused}) => (
            <Image source={require('./images/squirrel.png')}
            resizeMode="contain"
            style={{width: focused ? 35 : 25,
                    height: focused ? 35 : 25,
                    tintColor: focused ? '#FDC80B' : '#FFFFFF',
                    //transform: focused ? [{ rotate: '330deg'}] : [{ rotate: '0deg'}],
                    //top: focused ? -2: 0,
            }}
            />
          ),
        }}/>
        <Tab.Screen name="Notification" component={Notif} options={{
          tabBarIcon:({focused}) => (
            <Image source={require('./icon/notif.png')}
            resizeMode="contain"
            style={{width: 25,
                    height:25,
                    tintColor: focused ? '#FDC80B' : '#FFFFFF',
                    transform: focused ? [{ rotate: '330deg'}] : [{ rotate: '0deg'}],
                    top: focused ? -2: 0,
            }}
            />
          ),
        }}/>
        <Tab.Screen name="Profil" component={Login} options={{
          tabBarIcon:({focused}) => (
            <Image source={require('./icon/profil.png')}
            resizeMode="contain"
            style={{width: 25,
                    height:25,
                    tintColor: focused ? '#FDC80B' : '#FFFFFF',
                    transform: focused ? [{ rotate: '350deg'}] : [{ rotate: '0deg'}],
                    top: focused ? -2: 0,
            }}
            />
          ),
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
