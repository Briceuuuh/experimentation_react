import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput, Linking, Image, ScrollView, ImageBackground, Pressable, Alert} from "react-native";
import styles from './../style';
import PhoneInput from 'react-phone-input-2';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Edit from './edit_login';

const Page_principal = ({navigation}: {navigation: any}) => {
    return (
      <View style={styles.container}>
        <View style={styles.container_with_tab_bar}>
        <Image style={styles.image_profil} source={require("./../images/me.png")}/>
        <Text style={styles.text_name}>Matthieu Juno</Text>
        <Text style={styles.text_mail} onPress={() => Linking.openURL('mailto:briceuh29@gmail.com')}>briceuh29@gmail.com</Text>
        <Text style={styles.text_phone} onPress={()=>{Linking.openURL('tel:0693455956');}}>06 93 45 59 56</Text>
        <Text style={styles.text_password}>Mot de passe</Text>
        <Text style={styles.text_hide}>***************</Text>
        <Text style={styles.text_catego}>Catégorie favorite</Text>
        <ScrollView style={styles.scrollview} horizontal={true}>
          <Image style={styles.image_resto} source={require("./../images/eat.png")}/>
          <Image style={styles.image_beauty} source={require("./../images/burger.png")}/>
          <Text style={styles.text_view_scroll}>Restaurant</Text>
          <Text style={styles.text_view_scroll2}>Beauté</Text>
        </ScrollView>
        <View style={styles.button_mod}>
          <Button
            title="Modifier"
            color="black"
            onPress={() => navigation.navigate("edit")}
            />
        </View>
          <View style={styles.button_dec}>
            <Button
              title="Deconnexion"
              color="black"
              onPress={() => Alert.alert("Soon..")}
              />
          </View>
        </View>
      </View>
    );
  }

  const Stack = createNativeStackNavigator();

  function Login() {
    return (
          <Stack.Navigator initialRouteName="login"
          screenOptions={{
            headerShown: false,
          }} >
          <Stack.Screen name="login" component={Page_principal} />
          <Stack.Screen name="edit" component={Edit} />
        </Stack.Navigator>
    );
  }

export default Login;
