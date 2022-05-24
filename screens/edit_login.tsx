import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Button, TextInput, ScrollView, ImageBackground, Pressable, Alert} from "react-native";
import { DefaultTheme, NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from '../style';

const Tab = createBottomTabNavigator();

function Edit({navigation}: {navigation: any}){
  return (
    <View style={styles.container}>
        <View style={styles.container_top}>
            <View style={styles.button_return}>
              <Button title='<' color="#033E3E" onPress={() => navigation.navigate("login")}/>
            </View>
            <Text style={styles.text_retour}>Retour</Text>
        </View>
        <View style={styles.button_dec}>
        <Button
            title="Valider"
            color="black"
            onPress={() => Alert.alert("Soon..")}
        />
        </View>
      </View>
  );
};

export default Edit;