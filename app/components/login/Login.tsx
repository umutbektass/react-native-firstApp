import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import {styles} from './Style'
import Modal from '../modal/Modal'
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

const Icon = require('@/assets/images/login/login.png')

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Profile:undefined
};
type NavigationProp = StackNavigationProp<RootStackParamList>;

const Login : React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const [userInfo,setUserInfo] = useState({
    firstName:"",
    lastName:""
  })
  const [modal,setModal] = useState(false)
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={Icon} />
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} placeholder='Enter your email'
       onChangeText={(text)=>setUserInfo((prevtState)=>({
        ...prevtState,firstName:text
      }))}/>
      <Text style={styles.label}>Password</Text>
      <TextInput secureTextEntry style={styles.input} placeholder='Enter your password'
       onChangeText={(text)=>setUserInfo((prevState)=>({
        ...prevState,lastName:text
      }))}/>
      <Pressable style={({pressed})=>[{backgroundColor:pressed ? "red" : "#024CAA"},styles.button]} onPress={()=>setModal(true)}>
        <Text style={styles.buttonText}>Login</Text>
        </Pressable>
        <Pressable onPress={()=>{
          navigation.navigate('Profile')
        }} style={[{backgroundColor:'#0D92F4'},styles.button]}><Text style={styles.buttonText}>Profile Page</Text></Pressable>
      <Text>{userInfo.firstName+ "" +userInfo.lastName }</Text>
      {
        modal && <Modal setModal={setModal}/>
      }
    </View>
  )
}

export default Login
