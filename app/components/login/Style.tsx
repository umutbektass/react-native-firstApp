import { ImageStyle, StyleSheet, TextStyle } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    icon:{
        width:150,
        height:150,
        resizeMode:"cover"
    } as ImageStyle,
    title:{
        fontSize:20,
        fontWeight:"700",
        marginBottom:25
    } as TextStyle,
    label:{
        fontSize:17,
    } as TextStyle,
    input:{
        width:'80%',
        height:40,
        borderRadius:15,
        borderColor:"#3C3D37",
        borderWidth:1,
        marginVertical:15,
        textAlign:'center'
        
    },
    button:{
        width:'80%',
        height:50,
        borderRadius:30,
        marginBottom:15
    },
    buttonText:{
        fontSize:20,
        color:'white',
        textAlign:'center',
        marginVertical:'auto',
    }
})