import React, {useEffect, useState} from 'react';
import {View, Text, RefreshControl, Button, TextInput, ScrollView, Image, ImageBackground, Pressable, Alert, FlatList, StyleSheet} from "react-native";
import styles from '../style';
import { SearchBar } from 'react-native-screens';
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
  function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    delay(2000).then(() => setRefreshing(false));
  }, [refreshing]);

  const [data, setdata] = useState([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]);
  const valeur = {
    name: ["Le bistrot des pêcheurs", "Chez Jacky", "La Buse", "La bonne assiette"],
    image: [require("./../images/eat.png"), require("./../images/burger.png"), require("./../images/salade.png")],
    nb: ["10", "2", "3", "4"],
  }

  function GetRandom(max: number) {
    return Math.floor(Math.random() * max);
  }

  return (
      <View style={styles.container}>
        <View style={styles.container_with_tab_bar}>
        <View style={styles.center_container}>
            <FlatList data={data}
            showsVerticalScrollIndicator={false}
                      refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                      }
                      renderItem={() => (
                        <Pressable onPress={() => Alert.alert("Go to this restaurant")}>
                        <View style={styles.button_card}>
                          <Text style={styles.text_restaurant}>{valeur.name[GetRandom(valeur.nb.length)]}</Text>
                          <Text style={styles.text_date}>{date}</Text>
                          <Image style={styles.image_card} source={valeur.image[GetRandom(valeur.image.length)]}/>
                          <Image style={styles.image_coin_card} source={require("./../images/coin.png")}/>
                          <Text style={styles.how_piece}>{valeur.nb[GetRandom(valeur.nb.length)]}</Text>
                          <View style={styles.view_how_piece}>
                          <Text style={styles.who_win_piece}>+1</Text>
                          <Image style={styles.image_how_coin} source={require("./../images/coin.png")}/>
                        </View>
                        </View>
                      </Pressable>
                      )}
                      >
            </FlatList>
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
