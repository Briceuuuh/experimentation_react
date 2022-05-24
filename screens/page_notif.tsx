import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Button, TextInput, ScrollView, ImageBackground, Pressable, Alert, Switch} from "react-native";
import styles from './../style';
import MapView from 'react-native-maps';

const Notif = ({navigation}: {navigation: any}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
      <View style={styles.container}>
        <View style={styles.container_top}>
            <View style={styles.button_return}>
              <Button title='<' color="#033E3E" onPress={() => navigation.navigate("Mes cartes")}/>
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
              <Text style={styles.value_view_card}>Ma carte              3</Text>
              <Image style={styles.image_coin} source={require("./../images/coin.png")}/>
              </View>
              <View style={styles.button_card_notif}>
                <Text style={styles.text_restaurant}>Le bistrot des pêcheurs</Text>
                <Text style={styles.text_notif_restau}>Restaurant</Text>
                <Image style={styles.image_card} source={require("./../images/eat.png")}/>
              </View>
              <View >
              <Text style={styles.contact}>Contact</Text>
              <Image style={styles.image_contact} source={require("./../images/phone.png")}/>
              <Text style={styles.coord}>02 62 56 00 90</Text>
              <Image style={styles.image_contact} source={require("./../images/map.png")}/>
              <Text style={styles.coord}>30 rue du Four à chaud, <Text style={{fontWeight:"bold"}}>La Possession</Text></Text>
              </View>
              <View style={styles.view_map}>
              </View>
              <View style={styles.view_row}>
                <View style={styles.view_fidele}>
                  <Text style={styles.text_point}>833</Text>
                  <Text style={styles.value_point}>Fidèles</Text>
                </View>
                <View style={styles.view_fidele}>
                  <Text style={styles.text_point}>833</Text>
                  <Text style={styles.value_point}>Vues</Text>
                </View>
                <View style={styles.view_fidele}>
                  <Text style={styles.text_point}>833</Text>
                  <Text style={styles.value_point}>Points</Text>
                </View>
              </View>
              <View style={styles.view_recomp}>
                <Text style={styles.text_view_recomp}>Récompense</Text>
                <Text style={styles.value_view_after}>Après 10</Text>
                <Text style={styles.text_dish}>1 plat offert + une boisson de type soda</Text>
                <Image style={styles.image_coin} source={require("./../images/coin.png")}/>
                <Image style={styles.image_gift} source={require("./../images/gift.png")}/>
              </View>
              <View style={styles.view_go}>
                <Pressable onPress={() => Alert.alert("Y aller...")}>
                  <View style={styles.button_go}>
                    <Text style={styles.text_go}>Y aller</Text>
                  </View>
                </Pressable>
              </View>
            </ScrollView>
          </View>
      </View>
    );
  }

export default Notif;