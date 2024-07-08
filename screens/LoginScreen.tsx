import { Button, StyleSheet, Text, View, TextInput, Alert} from 'react-native'
import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/Config';

export default function LoginScreen({ navigation }: any) {

  const [correo, setCorreo] = useState('')
  const [contrasenia, setContrasenia] = useState('')

  function login() {
    signInWithEmailAndPassword(auth, correo, contrasenia)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
     console.log(user);
     navigation.navigate('Drawer')
    // Alert.alert("Acseso")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code ;
      const errorMessage = error.message;
      let titulo = ""
      let mensaje=""
if(errorCode == "auth/wrong-passwod")
  {titulo="error de contraseñia", mensaje="la contraseñia esta incorrecta"} 
else if (errorCode == "auth/wrong-passwod")
  {
  titulo="error de usuario", mensaje="El usuario esta incorrecto"
}else { titulo="error de Acceso", mensaje="Revisar credenciales" }
      Alert.alert(titulo , mensaje)
    });
  
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Login</Text>

      <TextInput
        placeholder='Ingresa tu correo electrónico'
        onChangeText={(texto) => (setCorreo(texto))}
        keyboardType='email-address'
      />
      <TextInput
        placeholder='Ingresa contraseña'
        onChangeText={(texto) => (setContrasenia(texto))}
      />

      <Button title='Ingresar' onPress={() => login () } />

      <Text onPress={() => navigation.navigate('Registro')}> 👉 Regístrate aquí 👈</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})