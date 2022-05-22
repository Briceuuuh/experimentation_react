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
            <ScrollView>
            <Pressable onPress={() => Alert.alert("La buse...")}>
              <View style={styles.button_card}>
                <Text style={styles.text_restaurant}>Le bistrot des pêcheurs</Text>
                <Text style={styles.text_restaurant}>Restaurant</Text>
                <Image style={styles.image_card} source={require("./../eat.png")}/>
              </View>
            </Pressable>
            </ScrollView>
          </View>
      </View>
    );
  }

export default Notif;