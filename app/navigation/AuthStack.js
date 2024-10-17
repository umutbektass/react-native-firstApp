import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomePage, LoginPage,SignupPage} from '../screens'
const Stack = createNativeStackNavigator();


const AuthStack = () => {
  return (
   <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
      <Stack.Screen name='Home' component={HomePage}/>
    <Stack.Screen name='Login' component={LoginPage}/>
    <Stack.Screen name='Signup' component={SignupPage} />
   </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})