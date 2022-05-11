import * as React from 'react';
import {View, Text, StyleSheet, Button, TextInput, ScrollView, ImageBackground, Pressable, Alert} from "react-native";
import styles from './../style';

const Login = () => {
    return (
      <View style={styles.container}>
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
