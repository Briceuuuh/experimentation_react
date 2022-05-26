import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Button, TextInput, ScrollView, ImageBackground, Pressable, Alert} from "react-native";
import { DefaultTheme, NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from '../style';

const Tab = createBottomTabNavigator();

function Edit({navigation}: {navigation: any}){
  const arraw = "<";
  return (
    <View style={styles.container}>
        <View style={styles.container_with_tab_bar}>
        <View style={styles.container_top}>
        <Pressable onPress={() => navigation.navigate("login")}>
            <View style={styles.button_return}>
              <Text style={{height: 18, width: 18, marginTop: 3,  marginLeft: 9, fontSize: 20}} >{arraw}</Text>
            </View>
          </Pressable>
            <Text style={styles.text_retour}>Retour</Text>
        </View>
        <Image style={styles.image_profil} source={require("./../images/me.png")}/>
        <Text style={{marginTop:"40%", fontWeight: "bold", color:"white", fontSize: 16}}>Informations</Text>
        <View>
        <TextInput></TextInput>
        </View>
        <Text style={{marginTop:"2%", color:"white", fontSize: 14}}>Nom</Text>
        <View style={{width: 334, height: 56, backgroundColor: "#1C5151", borderRadius:11, marginTop:"1%"}}>
        <TextInput style={{marginTop: "5.5%", marginLeft: "3%", color:"white"}} placeholder="Surname" placeholderTextColor="white"/>
        </View>
        <Text style={{marginTop:"2%", color:"white", fontSize: 14}}>Prénom</Text>
        <View style={{width: 334, height: 56, backgroundColor: "#1C5151", borderRadius:11,  marginTop:"1%"}}>
        <TextInput style={{marginTop: "5.5%", marginLeft: "3%", color:"white"}} placeholder="Name" placeholderTextColor="white"/>
        </View>
        <Text style={{marginTop:"2%", color:"white", fontSize: 14}}>Téléphone</Text>
        <View style={{width: 334, height: 56, backgroundColor: "#1C5151", borderRadius:11,  marginTop:"1%"}}>
        <TextInput style={{marginTop: "5.5%", marginLeft: "3%", color:"white"}} placeholder="NumberPhone" placeholderTextColor="white"/>
        </View>
        <View style={styles.button_dec}>
        <Button
            title="Valider"
            color="black"
            onPress={() => Alert.alert("Soon..")}
        />
        </View>
        </View>
      </View>
  );
};

export default Edit;