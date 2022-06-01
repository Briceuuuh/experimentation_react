import React, {useContext, useState} from 'react';
import {View, Text, NativeSyntheticEvent, TextInputChangeEventData, StyleSheet, Image, Button, TextInput, ScrollView, ImageBackground, Pressable, Alert} from "react-native";
import { DefaultTheme, NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from '../style';

import { Context } from '../App';

const Tab = createBottomTabNavigator();

const  Edit = ({navigation}: {navigation: any}) => {
  const context = useContext(Context);
  const [name, setName] = useState(context.name);
  const [surname, setSurname] = useState(context.surname);
  const [phone, setPhone] = useState(context.phone);
  function set_context() {
    context.setName(name);
    context.setSurname(surname);
    context.setPhone(phone);
  }
  return (
    <View style={styles.container}>
        <View style={styles.container_with_tab_bar}>
        <View style={styles.container_top}>
        <Pressable onPress={() => navigation.navigate("login")}>
            <View style={styles.button_return}>
            <Image style={styles.image_return} source={require("./../icon/return.png")}/>
            </View>
          </Pressable>
            <Text style={styles.text_retour}>Retour</Text>
        </View>
        <Image style={styles.image_profil} source={require("./../images/me.png")}/>
        <Text style={styles.text_infos}>Informations</Text>
        <Text style={styles.text_nom}>Nom</Text>
        <View style={styles.view_value}>
          <TextInput style={styles.value_text_input}
                    defaultValue={context.surname} placeholderTextColor="white"
                    onChangeText={(val) => setSurname(val)}/>
        </View>
        <Text style={styles.text_prenom}>Prénom</Text>
        <View style={styles.view_value}>
          <TextInput style={styles.value_text_input}
                    defaultValue={context.name} placeholderTextColor="white"
                    onChangeText={(val) => setName(val)}/>
        </View>
        <Text style={styles.text_nb_phone}>Téléphone</Text>
        <View style={styles.view_value}>
          <TextInput style={styles.value_text_input}
                    defaultValue={context.phone} placeholderTextColor="white"
                    onChangeText={(val) => setPhone(val)}/>
        </View>
        <View style={styles.button_validate}>
        <Button title="Valider" color="black"
              onPress={() => {set_context(); navigation.navigate("login")}} />
        </View>
        </View>
      </View>
  );
};

export default Edit;