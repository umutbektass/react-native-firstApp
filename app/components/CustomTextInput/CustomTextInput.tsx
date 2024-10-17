import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import {styles} from './Style'

type CustomTextIntputProps = {
    handleOnChangeText:(text:string)=>void,
    handlePlaceHolder:string
}
const CustomTextInput:React.FC<CustomTextIntputProps> = ({handleOnChangeText,handlePlaceHolder}) => {
  return (
    <TextInput style={styles.input} placeholder={handlePlaceHolder}
    onChangeText={handleOnChangeText}/>
  )
}

export default CustomTextInput
