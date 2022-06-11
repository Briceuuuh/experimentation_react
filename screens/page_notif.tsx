import React, {useState} from 'react';
import {View, Text, Image, ScrollView, Pressable, Alert, Switch} from "react-native";
import styles from '../style';
import LinearGradient from 'react-native-linear-gradient';
import MapView, { Marker } from 'react-native-maps';



const Notif = ({navigation}: {navigation: any}) => {
    var arraw = "<";
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
      <View style={styles.container}>
        <View style={styles.container_top}>
          <Pressable onPress={() => navigation.navigate("Mes cartes")}>
            <View style={styles.button_return}>
              <Image style={styles.image_return} source={require("./../icon/return.png")}/>
            </View>
          </Pressable>
            <Text style={styles.text_retour}>Retour</Text>
            <Text style={styles.text_notif}>Recevoir des notification de ce commerce</Text>
            <Switch style={styles.style_switch}
              trackColor={{ false: "white", true: "#033E3E" }}
              thumbColor={isEnabled ? "#F5C106" : "#035A5A"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
        </View>
        <View style={styles.container_with_tab_bar}>
        <View style={styles.container_center}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.view_card}>
              <LinearGradient
                colors={['#F5C106','#035A5A']}
                style={styles.linearGradient}
                start={{ x: 0.5, y: 0.0 }}
                end={{ x: 0.5, y: 0.0 }}
                locations={[0.3, 0.3]}
              >
              <Text style={styles.value_view_card}>Ma carte              3</Text>
              <Image style={styles.image_coin} source={require("./../images/coin.png")}/>
              <Image style={{position:"absolute", height: 25, width:25, left: 110, top: 14}} source={require("./../images/squirrel.png")}/>
              <Image style={{position:"absolute", height: 120, width: 150, left: 10, top: 15}} source={require("./../images/house.png")}/>
              </LinearGradient>
              </View>
              <View style={styles.button_card_notif}>
                <Text style={styles.text_restaurant}>Le bistrot des pêcheurs</Text>
                <Image style={{position:"absolute", height: 28, width: 35, left: "28,5%", top: "36%", borderRadius: 8}} source={require("./../images/dish.png")}/>
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
              <MapView style={styles.view_map}
                initialRegion={{
                  latitude: -20.964126,
                  longitude: 55.331079,
                  latitudeDelta: 0.0025,
                  longitudeDelta: 0.0025,
                }}>
                  <Marker
                  coordinate={{latitude: -20.964126, longitude: 55.331079}}
                  title="Le bistrot des pêcheurs"
                  description='Restauration'
                  >
                    <Image style={{height:18, width: 18}} source={require("./../images/map.png")}/>
                  </Marker>
                </MapView>
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
      </View>
    );
  }

export default Notif;