import * as React from 'react';
import {View, Text, StyleSheet, Button, TextInput, ScrollView, ImageBackground, Pressable, Alert} from "react-native";
import styles from './../style';

const Card = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.input}>
            Bienvenue sur vos Cartes
        </Text>
      </View>
    );
  }

export default Card;