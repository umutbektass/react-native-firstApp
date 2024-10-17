import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserStack from './UserStack';
import AuthStack from './AuthStack';
import { NavigationContainer } from '@react-navigation/native';
const RootNavigation = () => {
    const isAuth=false;
  return (
   
    <NavigationContainer  independent={true}>
    {
      isAuth ? <UserStack/> : <AuthStack/>
    }
  </NavigationContainer>
  )
}

export default RootNavigation

const styles = StyleSheet.create({
 
})