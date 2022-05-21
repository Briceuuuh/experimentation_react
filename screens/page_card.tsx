import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput, ScrollView, Image, ImageBackground, Pressable, Alert} from "react-native";
import styles from './../style';
import SelectDropdown from 'react-native-select-dropdown';
const countries = ["Egypt", "Canada", "Australia", "Ireland"];

const Card = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.input}>
            Bienvenue sur mon carte
        </Text>
      <View style={styles.dropdown}>
          <SelectDropdown
          data={countries}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            return item
          }}
          />
      </View>
      </View>
    );
  }

export default Card;

