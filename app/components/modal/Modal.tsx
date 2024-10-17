import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {styles} from './Style'

interface ModalProps {
    setModal:(visible:boolean)=>void;
}
const Modal: React.FC<ModalProps> = ({ setModal }) => {
  return (
    <View style={styles.container}>
      <Pressable  onPress={()=>setModal(false)}><Text style={styles.closeBtn}>X</Text></Pressable>
    </View>
  )
}

export default Modal

