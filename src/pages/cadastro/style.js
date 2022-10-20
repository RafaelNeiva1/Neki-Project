import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#2e2e2e",

    },
    form: {
        borderWidth: 2,
        borderRadius: 10,
        padding: 20,
        marginTop: 50,
        height: 530,
        width:'90%',
        backgroundColor: "#fff",
        alignSelf:"center",
        justifyContent:"center"
    },
    text:{
      fontSize:15,
      color:'#576F72',
      paddingVertical:7
    },
    inputArea: {
        flexDirection:"row",
        width:'90%',
        borderColor:"#aaa",
        backgroundColor:"#fff",
        borderWidth:1,
        borderRadius:5,
        alignItems:"center",
        padding:8,
        margin:10,
        marginHorizontal:10
        
    },
    
    inputsenha: {
        width:'85%',
        flexDirection:"row"

    },
    
    eye:{
        justifyContent:"center",
        alignItems:"center",
        width:'15%'
        

    },
    inputemail: {
        borderColor:"#aaa",
        width:'90%',
        borderWidth:1,
        borderRadius:5,
        padding:8,
        margin:10,
        flexDirection:"row"

    },
    cadastrar:{
        backgroundColor:"#8FE3CF",
        paddingHorizontal:80,
        paddingVertical:9,
        color:"#fff",
        borderRadius:6,
        alignSelf:"center",
        marginVertical:30
    },
    back:{
        backgroundColor:"#00ABB3",
        paddingHorizontal:20,
        paddingVertical:6,
        color:"#fff",
        borderRadius:10,
        fontWeight:"bold",
        alignSelf:"center",
        marginVertical:10

    },
    entre:{
        fontStyle:"italic"
    }
}) 