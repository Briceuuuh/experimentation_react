import React, {useContext, useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button, TextInput, Linking, Image, ScrollView, ImageBackground, Pressable, Alert, NativeModules} from "react-native";
import styles from '../style';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Edit from './edit_login';
import { Context } from '../App';

const Page_principal = ({navigation}: {navigation: any}) => {
    const context = useContext(Context);
    return (
      <View style={styles.container}>
        <View style={styles.container_with_tab_bar}>
        <Image style={styles.image_profil} source={require("./../images/me.png")}/>
        <Text style={styles.text_name}>{context.name} {context.surname}</Text>
        <Text style={styles.text_mail}onPress={() => Linking.openURL(context.mail)}>{context.mail}</Text>
        <Text style={styles.text_phone} onPress={()=>{Linking.openURL(context.phone);}}>{context.phone}</Text>
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
              onPress={() => navigation.navigate(" ")}
              />
          </View>
        </View>
      </View>
    );
  }

  const Stack = createNativeStackNavigator();

  function Login() {
    return (
          <Stack.Navigator initialRouteName="login" screenOptions={{
            headerShown: false,
          }} >
          <Stack.Screen name="login" component={Page_principal} />
          <Stack.Screen name="edit" component={Edit} />
        </Stack.Navigator>
    );
  }

export default Login;
