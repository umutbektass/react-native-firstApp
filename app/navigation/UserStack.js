import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfilePage, HomePage } from "../screens";

const Stack = createNativeStackNavigator();

const UserStack = () => {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Profile" component={ProfilePage} />
      </Stack.Navigator>
  );
};

export default UserStack;

const styles = StyleSheet.create({
 
});
