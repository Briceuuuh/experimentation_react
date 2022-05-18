import * as React from 'react';
import {View, Text, StyleSheet, Button, TextInput, ScrollView, Image, ImageBackground, Pressable, Alert} from "react-native";
import styles from './../style';
import ImagePicker from 'react-native-image-crop-picker';

const Card = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.input}>
            Bienvenue sur mon carte
        </Text>
      </View>
    );
  }

export default Card;

