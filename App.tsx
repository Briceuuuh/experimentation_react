import React from "react";
import {View, Text, StyleSheet, Button, TextInput, ScrollView, ImageBackground} from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Your name"
      />
      <TextInput
      secureTextEntry={true}
        style={styles.input}
        placeholder="Password"
      />
      <Button
        title="Login"
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    height: 70,
    margin: 50,
    padding: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});