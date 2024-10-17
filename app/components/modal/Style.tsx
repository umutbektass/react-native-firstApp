import { StyleSheet, TextStyle } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#E4E0E1",
  },
  closeBtn: {
   position:'absolute',
   top:15,
   right:15,
    color: "black",
    fontSize: 25,
    fontWeight: 'bold',
  } as TextStyle,
});
