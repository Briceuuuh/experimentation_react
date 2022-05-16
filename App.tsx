import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import Ionicons from 'react-native-vector-icons/Ionicons';

import Login from './screens/page_login';
import Drawer from './screens/page_drawer';
import Card from './screens/page_card';
import Search from './screens/page_search';
import Notif from './screens/page_notif';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          /* tabBarIcon: ({ focused, color }) => {
            let iconName;
            if (route.name === 'Mes cartes') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            } else if (route.name === 'Rechercher') {
              iconName = focused ? 'BsSearch' : 'ios-list';
            } else if (route.name === ' ') {
              iconName = focused ? 'person-circle' : 'ios-list';
            } else if (route.name === 'Notification') {
              iconName = focused ? 'person-circle' : 'ios-list';
            } else if (route.name === 'Profil') {
              iconName = focused ? 'ios-list-box' : 'iperson-circlet';
            }
            //return <Ionicons name={iconName} size={20} color={color} />;
          }, */
          tabBarStyle: {
            backgroundColor: '#035A5A',
          },
          tabBarActiveTintColor: '#FDC80B',
          tabBarInactiveTintColor: '#FFFFFF',
        })}
      >
        <Tab.Screen name="Mes " component={Card}/>
        <Tab.Screen name="Rechercher" component={Search}/>
        <Tab.Screen name=" " component={Drawer}/>
        <Tab.Screen name="Notification" component={Notif}/>
        <Tab.Screen name="Profil" component={Login} />
      </Tab.Navigator>
    </NavigationContainer>

  );
};

export default App;
