import React, { useState, useEffect } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import {Text, TouchableOpacity ,View, TextInput, StyleSheet } from "react-native"

const SignIn = ({navigation}: {navigation: any}) =>  {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    return (
        <View style={sigin.container}>
            <View style={sigin.view_welcome}>
                <Text style={sigin.text_welcome}>Bienvenue</Text>
            </View>
            <View style={sigin.container_form}>
                    <Text style={sigin.text_infos}>Se connecter</Text>
                    <Text style={sigin.text}>Email</Text>
                    <View style={sigin.view_value}>
                        <TextInput style={sigin.value_text_input} placeholder="name@exemple.com"
                        placeholderTextColor="white" onChangeText={(val) => setEmail(val)}/>
                    </View>
                    <Text style={sigin.text}>Mot de Passe</Text>
                    <View style={sigin.view_value}>
                        <TextInput style={sigin.value_text_input} placeholder="Password" secureTextEntry
                            placeholderTextColor="white" onChangeText={(val) => setPassword(val)}/>
                    </View>
                    <Text style={sigin.text_subscribe}
                        onPress={() => navigation.navigate("signup")}>S'inscrire</Text>
                    <TouchableOpacity style={sigin.press} onPress={() => {auth().signInWithEmailAndPassword(email, password)}}>
                        <Text style={sigin.text_connect}>Se Connecter</Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignIn

const sigin = StyleSheet.create({
    container: {
        flex: 1,
        color: "black",
        backgroundColor: "#033E3E",
        alignItems: "center",
    },
    container_form: {
        marginTop: "2%",
        width: "85%",
        height: "84%",
        alignItems: "center"
    },
    inputext: {
      width: "80%",
      height: "5%",
      marginTop: "3%",
      backgroundColor: "white",
      textAlign: "center",
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center"
    },
    text_infos: {
        marginTop:"6%",
        marginBottom: "5%",
        fontWeight: "bold",
        color:"white",
        fontSize: 20
    },
    text: {
        marginTop:"2%",
        fontWeight:"bold",
        color:"white",
        fontSize: 14
    },
    view_value: {
        width: "100%",
        height: 56,
        backgroundColor: "#1C5151",
        borderRadius:11,
        marginTop:"1%",
    },
    value_text_input: {
        marginTop: "5.5%",
        marginLeft: "4%",
        color:"white"
    },
    text_subscribe: {
        color: "white",
        marginLeft: "81%",
        marginTop: "3%"
    },
    view_welcome: {
        marginTop: "10%",
        width: "85%",
        height: "6%",
        alignItems: "center"
    },
    text_welcome: {
        fontSize:40,
        fontWeight: "bold",
        color:"white"
    },
    press: {
        marginTop: "120%",
        backgroundColor: "#F5C106",
        borderRadius: 20,
        paddingVertical: 17,
        width: "100%",
        height: "8%",
      },
    text_connect: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
    }
  })