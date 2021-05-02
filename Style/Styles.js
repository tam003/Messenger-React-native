import {  StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection : 'column',
      
    },
    title: {
      alignItems: 'center',
      justifyContent: 'center',
      color: 'red',
      //fontFamily: 'Time New Roman',
      fontSize: 20,
    },
    input: { 
      color: 'black',
      //fontFamily: 'Time New Roman',
      fontSize: 16,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: 'black',
      borderStyle: 'solid',
      padding: 10,
      margin: 10,
      width: '80%',
      height: 50,
  
    },
    buttonLogin: {
      //color: 'black',
      //fontFamily: 'Time New Roman',
      fontSize: 16,
      borderRadius: 8,
      borderWidth: 1,
      padding: 10,
      margin: 10,
      width: '80%',
      height: 50,
      
    },
    error: {
        color: 'red',
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonAddContact: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: '#6bfaee',
        padding: 10,
        margin: 40,
    },
    buttonAddContactText: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 50,
      borderWidth: 0.25,
      backgroundColor: '#ffffff'
    },
    sendMessageContainer: {
      flexDirection: "row",
      alignItems: "center",
      alignContent: "center",
      //justifyContent: "flex-buttom",
      marginEnd: 10,
      alignSelf: 'flex-end',
      position: 'absolute',
      bottom: 0
    },

    inputSend: {
      borderRadius: 20,
      marginLeft: 10,
      backgroundColor: '#ffffff',
      borderWidth: 0.5,
      width: "70%",
      color: 'black'
    },
  
    sendBtnContainer: {
      //height: appStyle.fieldHeight,
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
      alignItems: "center",
      justifyContent: "flex-end",
      flexDirection: "row",
      width: "25%",
      marginEnd: 10,
      
    },
  });
  
  export default styles