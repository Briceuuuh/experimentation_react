import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput, ScrollView, Image, ImageBackground, Pressable, Alert} from "react-native";
import styles from './../style';

const now = new Date();
var date = `${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()}`;

const Card = () => {
  return (
      <View style={styles.container}>
        <View style={styles.center_container}>
          <ScrollView>
              {/* <Image style={styles.image_profil} source={require("./../me.png")}/> */}
              <View style={styles.button_card}>
                <Button title='Le bistrot des pêcheurs' color="white"/>
                <Text style={styles.text_date}>{date}</Text>
              </View>
            <View style={styles.button_card}>
              <Button title='Chez Jacky'/>
              <Text style={styles.text_date}>{date}</Text>
            </View>
            <View style={styles.button_card}>
              <Button title='La Buse'/>
              <Text style={styles.text_date}>{date}</Text>
            </View>
            <View style={styles.button_card}>
              <Button title='La bonne assiette'/>
              <Text style={styles.text_date}>{date}</Text>
            </View>
            <View style={styles.button_card}>
              <Button title='Le bistrot des pêcheurs'/>
              <Text style={styles.text_date}>{date}</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }

export default Card;

