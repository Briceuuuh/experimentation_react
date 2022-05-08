import * as React from 'react';
import back from "./background.png";
import { NavigationContainer } from '@react-navigation/native';
import {View, Text, StyleSheet, Button, TextInput, ScrollView, ImageBackground, Pressable, Alert} from "react-native";
const image = { img: "./background.jpg" };

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <ImageBackground source={back} resizeMode="cover" style={styles.image}>
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
        </ImageBackground>
      </View>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  input: {
    top: 60,
    fontSize: 17,
    height: 55,
    margin: 20,
    borderWidth: 3,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    top: 510,
    margin: 20,
    borderWidth: 3,
    paddingVertical: 0,
    borderRadius: 50,
    backgroundColor: "#605187"
  },
});