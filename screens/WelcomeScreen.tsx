import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getAuth, signOut } from "firebase/auth";

export default function WelcomeScreen({navigation}:any) {
  function cerrar(){
    const auth = getAuth();
    navigation.navigate("Login")
    Alert.alert("Hasta luego :) ")
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

  }
  return (
    <View>
      <Text>WelcomeScreen</Text>
      <Button title='Cerrar Sesion' onPress={()=>cerrar()}/>
    </View>
  )
}

const styles = StyleSheet.create({})