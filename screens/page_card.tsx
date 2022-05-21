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
              <Pressable onPress={() => Alert.alert("Le Bistrot...")}>
                <View style={styles.button_card}>
                  <Text style={styles.text_restaurant}>Le bistrot des pêcheurs</Text>
                  <Text style={styles.text_date}>{date}</Text>
                  <Image style={styles.image_card} source={require("./../eat.png")}/>
                </View>
              </Pressable>
            <Pressable onPress={() => Alert.alert("Chez Jacky...")}>
              <View style={styles.button_card}>
                <Text style={styles.text_restaurant}>Chez Jacky</Text>
                <Text style={styles.text_date}>{date}</Text>
                <Image style={styles.image_card} source={require("./../burger.png")}/>
              </View>
            </Pressable>
            <Pressable onPress={() => Alert.alert("La buse...")}>
              <View style={styles.button_card}>
                <Text style={styles.text_restaurant}>La Buse</Text>
                <Text style={styles.text_date}>{date}</Text>
                <Image style={styles.image_card} source={require("./../eat.png")}/>
              </View>
            </Pressable>
            <Pressable onPress={() => Alert.alert("La bonne assiette...")}>
              <View style={styles.button_card}>
                <Text style={styles.text_restaurant}>La bonne assiette</Text>
                <Text style={styles.text_date}>{date}</Text>
                <Image style={styles.image_card} source={require("./../burger.png")}/>
              </View>
            </Pressable>
            <Pressable onPress={() => Alert.alert("Le bistrot...")}>
              <View style={styles.button_card}>
                <Text style={styles.text_restaurant}>Le bistrot des pêcheurs</Text>
                <Text style={styles.text_date}>{date}</Text>
                <Image style={styles.image_card} source={require("./../eat.png")}/>
              </View>
            </Pressable>
          </ScrollView>
        </View>
      </View>
    );
  }

export default Card;

