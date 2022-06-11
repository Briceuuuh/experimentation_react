import React, { useState, useEffect } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import {Text, TouchableOpacity ,View, TextInput, Alert, StyleSheet } from "react-native"

const SignUp = ({navigation}: {navigation: any}) =>  {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmpassword, setConfirmPassword] = useState<string>('');
    return (
        <View style={signup.container}>
            <View style={signup.view_welcome}>
                <Text style={signup.text_welcome}>Nouveau ?</Text>
            </View>
            <View style={signup.container_form}>
                <Text style={signup.text_infos}>S'inscrire</Text>
                <Text style={signup.text}>Email</Text>
                <View style={signup.view_value}>
                    <TextInput style={signup.value_text_input} placeholder="name@exemple.com"
                    placeholderTextColor="white" onChangeText={(val) => setEmail(val)}/>
                </View>
                <Text style={signup.text}>Mot de Passe</Text>
                <View style={signup.view_value}>
                    <TextInput style={signup.value_text_input} placeholder="Password" secureTextEntry
                        placeholderTextColor="white" onChangeText={(val) => setPassword(val)}/>
                </View>
                <Text style={signup.text}>Confirmer mot de passe</Text>
                <View style={signup.view_value}>
                    <TextInput style={signup.value_text_input} placeholder="Password" secureTextEntry
                        placeholderTextColor="white" onChangeText={(val) => setConfirmPassword(val)}/>
                </View>
                <Text style={signup.text_subscribe}
                    onPress={() => navigation.navigate("sigin")}>Se connecter</Text>
                <TouchableOpacity style={signup.press}
                    onPress={() => {if (password === confirmpassword) {auth()
                        .createUserWithEmailAndPassword(email, password).then(() => {
                            Alert.alert('Compte créée && Connecté');
                            }).catch(error => {if (error.code === 'auth/email-already-in-use')
                                                    Alert.alert('Email address is already used!');
                                                if (error.code === 'auth/invalid-email')
                                                    Alert.alert('Email address not valid!');
                                                console.error(error);
                                                });
                        } else Alert.alert("Mot de passe différent")}}>
                    <Text style={signup.text_connect}>S'inscrire</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignUp

const signup = StyleSheet.create({
    container: {
        flex: 1,
        color: "black",
        backgroundColor: "#033E3E",
        alignItems: "center",
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
    text_connect: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
    },
    press: {
        marginTop: "91%",
        backgroundColor: "#F5C106",
        borderRadius: 20,
        paddingVertical: 17,
        width: "100%",
        height: "8%",
    },
    text_infos: {
        marginTop:"6%",
        marginBottom: "5%",
        fontWeight: "bold",
        color:"white",
        fontSize: 20
    },
    text: {
        marginTop:"3%",
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
        marginLeft: "74%",
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
    container_form: {
        marginTop: "2%",
        width: "85%",
        height: "84%",
        alignItems: "center"
    },
  })