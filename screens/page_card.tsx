import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput, ScrollView, Image, ImageBackground, Pressable, Alert} from "react-native";
import styles from '../style';
import DropDownPicker from 'react-native-dropdown-picker';

const now = new Date();
var date = `${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()}`;

const Card = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Récent', value: 'recent'},
    {label: 'Ancien', value: 'old'},
    {label: 'Nouveau', value: 'new'},
  ]);
  return (
      <View style={styles.container}>
        <View style={styles.container_with_tab_bar}>
        <View style={styles.center_container}>
          <ScrollView>
              <Pressable onPress={() => Alert.alert("Le Bistrot...")}>
                <View style={styles.button_card}>
                  <Text style={styles.text_restaurant}>Le bistrot des pêcheurs</Text>
                  <Text style={styles.text_date}>{date}</Text>
                  <Image style={styles.image_card} source={require("./../images/eat.png")}/>
                  <Image style={styles.image_coin_card} source={require("./../images/coin.png")}/>
                  <Text style={styles.how_piece}>10</Text>
                  <View style={styles.view_how_piece}>
                  <Text style={styles.who_win_piece}>+1</Text>
                  <Image style={styles.image_how_coin} source={require("./../images/coin.png")}/>
                </View>
                </View>
              </Pressable>
            <Pressable onPress={() => Alert.alert("Chez Jacky...")}>
              <View style={styles.button_card}>
                <Text style={styles.text_restaurant}>Chez Jacky</Text>
                <Text style={styles.text_date}>{date}</Text>
                <Image style={styles.image_card} source={require("./../images/burger.png")}/>
                <Image style={styles.image_coin_card} source={require("./../images/coin.png")}/>
                <Text style={styles.how_piece}>2</Text>
                <View style={styles.view_how_piece}>
                  <Text style={styles.who_win_piece}>+1</Text>
                  <Image style={styles.image_how_coin} source={require("./../images/coin.png")}/>
                </View>
              </View>
            </Pressable>
            <Pressable onPress={() => Alert.alert("La buse...")}>
              <View style={styles.button_card}>
                <Text style={styles.text_restaurant}>La Buse</Text>
                <Text style={styles.text_date}>{date}</Text>
                <Image style={styles.image_card} source={require("./../images/eat.png")}/>
                <Image style={styles.image_coin_card} source={require("./../images/coin.png")}/>
                <Text style={styles.how_piece}>10</Text>
                <View style={styles.view_how_piece}>
                <Text style={styles.who_win_piece}>+1</Text>
                <Image style={styles.image_how_coin} source={require("./../images/coin.png")}/>
                </View>
              </View>
            </Pressable>
            <Pressable onPress={() => Alert.alert("La bonne assiette...")}>
              <View style={styles.button_card}>
                <Text style={styles.text_restaurant}>La bonne assiette</Text>
                <Text style={styles.text_date}>{date}</Text>
                <Image style={styles.image_card} source={require("./../images/burger.png")}/>
                <Image style={styles.image_coin_card} source={require("./../images/coin.png")}/>
                <Text style={styles.how_piece}>10</Text>
                <View style={styles.view_how_piece}>
                <Text style={styles.who_win_piece}>+1</Text>
                <Image style={styles.image_how_coin} source={require("./../images/coin.png")}/>
                </View>
              </View>
            </Pressable>
            <Pressable onPress={() => Alert.alert("Le bistrot...")}>
              <View style={styles.button_card}>
                <Text style={styles.text_restaurant}>Le bistrot des pêcheurs</Text>
                <Text style={styles.text_date}>{date}</Text>
                <Image style={styles.image_card} source={require("./../images/eat.png")}/>
                <Image style={styles.image_coin_card} source={require("./../images/coin.png")}/>
                <Text style={styles.how_piece}>10</Text>
                <View style={styles.view_how_piece}>
                <Text style={styles.who_win_piece}>+1</Text>
                <Image style={styles.image_how_coin} source={require("./../images/coin.png")}/>
                </View>
              </View>
            </Pressable>
          </ScrollView>
          </View>
        </View>
        <View style={styles.container_drop}>
          <DropDownPicker style={styles.drop_down}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            />
        </View>
      </View>
    );
  }

export default Card;

