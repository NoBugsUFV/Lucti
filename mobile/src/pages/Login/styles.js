import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: { 
        flex: 1,
        color: "#EEEEEE",
    },
    header:{
        height:230,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: "#76AB82",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        elevation: 18,
    },
    headerLogo:{
        marginTop: 90
    },
    headerSlogan:{
        marginTop: 10,
        fontSize: 14,
        color: '#364F3C',
    },
    form:{
        paddingHorizontal: 40,
        paddingVertical: 60,
    },

    formLabel:{
        fontSize: 16,
        marginLeft: 17,
        marginBottom: 1,
    },  

    emailInput:{
        borderStyle: "solid",
        borderTopRightRadius:40,
        borderTopLeftRadius:40,
        borderRadius: 40,
        backgroundColor: "#CCCCCC",
        marginBottom: 20,
        height: 50,
    },
    passwordInput:{
        backgroundColor: "#CCCCCC",
        borderTopRightRadius:40,
        borderTopLeftRadius:40,
        borderRadius: 40,
        height: 50
    },
    submit:{
        alignSelf: "center",
        marginTop: 25,
    },
    buttonSubmit:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 280,
        height: 50,
        borderRadius: 40,
        backgroundColor: "#76AB82",
    },
    textSubmit:{
        fontSize: 18,
        color: "#EEEEEE"
    },
    links:{
        marginTop: 20
    },
    forgotButton:{
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    forgotText:{
        color: "#3B5C2F",
        fontSize: 14,
        fontWeight: "bold"
    },
    cadastroButton:{
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cadastroText:{
        color: "#3B5C2F",
        fontSize: 14,
    },
    pwdText:{
        marginTop: 70,
        alignSelf: "center"
    }
    
})