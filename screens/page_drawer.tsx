import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button} from "react-native";
import styles from '../style';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

const Drawer = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
    useEffect(() => {
      auth().onAuthStateChanged(userState => {
        setUser(userState);
        if (loading) {
          setLoading(false);
        }
      });
    }, []);
  if (!user) {
    return <View style={test.container}>
              <Text >Please login</Text>
          </View>
  }
  return (
    <View style={test.container}>
      <View style={test.style_view}>
        <Text style={test.inputext}>Welcome {user.email}</Text>
      </View>
      <View style={test.button_deconnecte}>
      <Button title='Deconnecter' color={"white"} onPress={() => {auth().signOut()}}/>
      </View>
    </View>
  )
  }

export default Drawer;

const test = StyleSheet.create({
  container: {
      flex: 1,
      color: "black",
      backgroundColor: "#033E3E",
      alignItems: "center",
  },
  style_view: {
    marginTop: "15%",
    width: "90%",
    height: "5%",
    fontSize: 20,
    textAlign: "center",
    paddingVertical: "2%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2B5050",
  },
  inputext: {
    color: "white",
    fontSize: 20,
    paddingVertical: "0%",
  },
  button_deconnecte: {
    backgroundColor: "#F5C106",
    borderRadius: 20,
    marginTop: "155%"
  }
})
