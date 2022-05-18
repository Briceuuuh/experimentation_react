import * as React from 'react';
import {View, Text, StyleSheet, Button, TextInput, Image, ScrollView, ImageBackground, Pressable, Alert} from "react-native";
import styles from './../style';
import PhoneInput from 'react-phone-input-2';

const Login = () => {
    return (
      <View style={styles.container}>
        <Image style={styles.image_profil}
        source={require("./../me.png")}
      />
      <Text style={styles.text_name}>Matthieu Juno</Text>
      <Text style={styles.text_mail}>juno.matthieu@gmail.com</Text>
      <Text style={styles.text_phone}>06 92 45 87 09</Text>
      <Text style={styles.text_password}>Mot de passe</Text>
      <Text style={styles.text_hide}>***************</Text>
      <Text style={styles.text_catego}>Catégorie favorite</Text>
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
