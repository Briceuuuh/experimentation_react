import * as React from 'react';
import {View, Text, StyleSheet, Button, TextInput, Image, ScrollView, ImageBackground, Pressable, Alert} from "react-native";
import styles from './../style';
import PhoneInput from 'react-phone-input-2';

const Login = () => {
    return (
      <View style={styles.container}>
        <Image
        style={{
          resizeMode: "contain",
          height: 100,
          width: 100,
        }}
        source={require("./../me.png")}
      />
        <TextInput
            style={styles.input}
            placeholder="Your name"
            placeholderTextColor="black"
          />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor="black"
          />
          <View style={styles.button}>
          <Button
            title="Login"
            color="black"
            onPress={() => Alert.alert("I don't know how to make a DataBase at the moment...\nBut not for long")}
          /></View>
      </View>
    );
  }

export default Login;
