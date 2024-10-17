import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RootNavigation from './navigation/RootNavigation';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function RootLayout() {


  return (
  <RootNavigation/>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop:Constants.statusBarHeight,
    flex:1
  }
})
