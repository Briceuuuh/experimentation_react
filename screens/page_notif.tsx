import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Button, TextInput, ScrollView, ImageBackground, Pressable, Alert, Switch} from "react-native";
import styles from './../style';

const Notif = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
      <View style={styles.container}>
        <View style={styles.container_top}>
            <View style={styles.button_return}>
              <Button title='<' color="#033E3E" onPress={() => Alert.alert("Last Page...")}/>
            </View>
            <Text style={styles.text_retour}>Retour</Text>
            <Text style={styles.text_notif}>Recevoir des notification de ce commerce</Text>
            <Switch style={styles.style_switch}
              trackColor={{ false: "#033E3E", true: "#033E3E" }}
              thumbColor={isEnabled ? "#F5C106" : "#033E3E"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
        </View>
        <View style={styles.container_center}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.view_card}>
              </View>
              <View style={styles.button_card}>
                <Text style={styles.text_restaurant}>Le bistrot des pêcheurs</Text>
                <Text style={styles.text_notif_restau}>Restaurant</Text>
                <Image style={styles.image_card} source={require("./../eat.png")}/>
              </View>
              <Text style={styles.contact}>Contact</Text>
              <Image style={styles.image_contact} source={require("./../phone.png")}/>
              <Text style={styles.coord}>02 62 56 00 90</Text>
              <Image style={styles.image_contact} source={require("./../map.png")}/>
              <Text style={styles.coord}>30 rue du Four à chaud, La Possession</Text>
              <View style={styles.view_map}>
              </View>
              <View style={styles.view_fidele}>
              </View>
              <View style={styles.view_view}>
              </View>
              <View style={styles.view_point}>
              </View>
              <View style={styles.view_recomp}>
              </View>
              <Pressable onPress={() => Alert.alert("Le bistrot...")}>
                <View style={styles.button_go}>
                  <Text style={styles.text_go}>Y aller</Text>
                </View>
              </Pressable>
            </ScrollView>
          </View>
      </View>
    );
  }

export default Notif;