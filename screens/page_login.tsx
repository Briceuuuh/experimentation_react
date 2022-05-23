import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput, Linking, Image, ScrollView, ImageBackground, Pressable, Alert} from "react-native";
import styles from './../style';
import PhoneInput from 'react-phone-input-2';

const Login = () => {
    return (
      <View style={styles.container}>
        <Image style={styles.image_profil} source={require("./../me.png")}/>
        <Text style={styles.text_name}>Matthieu Juno</Text>
        <Text style={styles.text_mail} onPress={() => Linking.openURL('mailto:briceuh29@gmail.com')}>briceuh29@gmail.com</Text>
        <Text style={styles.text_phone} onPress={()=>{Linking.openURL('tel:0693455956');}}>06 93 45 59 56</Text>
        <Text style={styles.text_password}>Mot de passe</Text>
        <Text style={styles.text_hide}>***************</Text>
        <Text style={styles.text_catego}>Catégorie favorite</Text>
        <ScrollView style={styles.scrollview} horizontal={true}>
          <Image style={styles.image_resto} source={require("./../eat.png")}/>
          <Image style={styles.image_beauty} source={require("./../burger.png")}/>
          <Text style={styles.text_view_scroll}>Restaurant</Text>
          <Text style={styles.text_view_scroll2}>Beauté</Text>
        </ScrollView>
        <View style={styles.button_mod}>
          <Button
            title="Modifier"
            color="black"
            onPress={() => Alert.alert("Soon...")}
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
    );
  }

export default Login;
