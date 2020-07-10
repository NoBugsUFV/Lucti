import { StyleSheet } from 'react-native';

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
        paddingTop: 50
    },
    formLabel:{
        fontSize: 16,
        marginLeft: 25,
        marginBottom: 2,
    },
    input:{
        height: 60,
        backgroundColor: "#CCCCCC",
        borderRadius: 40,
        fontSize: 16,
        color: "#3B5C2F",
        paddingLeft: 20,
        paddingRight:20,
        marginBottom: 10
    },
    passwordView: {
        flexDirection: 'row',
        backgroundColor: "#CCCCCC",
        borderRadius:40,
        height: 60,
        paddingLeft: 20,
        paddingRight:20,
        marginBottom: 10
    },
    labelPassword:{
        flex: 1,
        fontSize: 16
    },
    submit:{
        alignSelf: "center",
        marginTop: 20
    },
    buttonSubmit:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 230,
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
    

});