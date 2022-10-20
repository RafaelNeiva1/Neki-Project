import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    buttonStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#485a96',
        borderWidth: 0.5,
        border:'none',
        height: 40,
        borderRadius: 5,
        margin: 5,
        marginTop:10
      },
      buttonImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        borderRadius:5
      },
      buttonTextStyle: {
        color: '#fff',
        marginBottom: 4,
        marginLeft: 10,
      },
      icon:{
        paddingHorizontal:6
      },
      container:{
        borderTopWidth:1,
        borderTopColor:"#aaa"
        
      }

})