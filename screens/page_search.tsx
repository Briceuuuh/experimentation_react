import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput, ScrollView, ImageBackground, Pressable, Alert} from "react-native";
import styles from '../style';

const Search = () => {
    return (
      <View style={styles.container}>
        <View style={styles.input}>
          <Text>Bienvenue sur vos Recherches</Text>
        </View>
      </View>
    );
  }

export default Search;