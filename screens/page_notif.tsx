import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput, ScrollView, ImageBackground, Pressable, Alert, Switch} from "react-native";
import styles from './../style';

const Notif = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
      <View style={styles.container}>
      <Text style={styles.text_name}>Recevoir des notifications de ce commerce </Text>
      </View>
    );
  }

export default Notif;