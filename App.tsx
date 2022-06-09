import React, { useState, useEffect } from 'react';
import { NavigationContainer} from '@react-navigation/native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './screens/page_login';
import Drawer from './screens/page_drawer';
import Card from './screens/page_card';
import Search from './screens/page_search';
import Notif from './screens/page_notif';
import { Image } from 'react-native';
import  Connect from "./auth/auth"

export const Context = React.createContext({
  name: "guest",
  setName: (newName: string) => {},
  surname: "surname",
  setSurname: (newName: string) => {},
  phone: "nb",
  setPhone: (newName: string) => {},
  mail: "mail",
  password: "",
});

const Tab = createBottomTabNavigator();

const App = ({navigation}: {navigation: any}) => {
  const [name, setName] = useState("Matthieu");
  const [surname, setSurname] = useState("Juno");
  const [phone, setPhone] = useState("06 92 45 87 09");
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    auth().onAuthStateChanged(userState => {
      setUser(userState);
      if (loading) {
        setLoading(false);
      }
    });
  }, []);

  if (!user) {
    return <NavigationContainer>
            <Connect/>
          </NavigationContainer>
  }
  return (
    <Context.Provider value= {{name, setName, surname, setSurname, phone, setPhone, mail: "juno.matthieu@gmail.com", password: "password"}}>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({}) => ({
          tabBarStyle: {
            backgroundColor: '#035A5A',
            borderRadius: 24,
            position: 'absolute',
          },
          headerShown: false,
          tabBarActiveTintColor: '#FDC80B',
          tabBarInactiveTintColor: '#FFFFFF'})}>
        <Tab.Screen name="Mes cartes" component={Card} options={{
          tabBarIcon:({focused}) => (
            <Image source={require('./icon/card.png')}
            resizeMode="contain"
            style={{width: 25,
                    height:25,
                    tintColor: focused ? '#FDC80B' : '#FFFFFF',
                    transform: focused ? [{ rotate: '330deg'}] : [{ rotate: '0deg'}],
                    top: focused ? -2: 0}}/>
          ),
        }} />
        <Tab.Screen name="Rechercher" component={Search} options={{
          tabBarIcon:({focused}) => (
            <Image source={require('./icon/search.png')}
            resizeMode="contain"
            style={{width: 25,
                    height: 25,
                    tintColor: focused ? '#FDC80B' : '#FFFFFF',
                    transform: focused ? [{ rotate: '330deg'}] : [{ rotate: '0deg'}],
                    top: focused ? -2: 0}}/>
          ),
        }}/>
        <Tab.Screen name=" " component={Drawer} options={{
          tabBarIcon:({focused}) => (
            <Image source={require('./images/squirrel.png')}
            resizeMode="contain"
            style={{width: focused ? 35 : 25,
                    height: focused ? 35 : 25,
                    tintColor: focused ? '#FDC80B' : '#FFFFFF'}}/>
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
                    top: focused ? -2: 0}}/>
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
                    top: focused ? -2: 0}}/>
          ),
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
    </Context.Provider>
  );
};

export default App;
