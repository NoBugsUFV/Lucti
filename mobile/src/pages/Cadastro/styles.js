import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    container:{
        flex: 1,
        color: "#EEEEEE",
        paddingHorizontal: 30
    },
    header:{
        marginTop: Constants.statusBarHeight + 20,
    },
    title:{
        fontSize: 36,
        alignSelf: "center",
        color: "#3B5C2F",
    },
    form:{
        paddingVertical: 40,
    },
    formRow:{
        paddingVertical: 5
    },
    label:{
        marginBottom: 3,
        marginLeft: 20
    },
    labelInput:{
        borderTopRightRadius:40,
        borderTopLeftRadius:40,
        borderRadius: 40,
        backgroundColor: "#CCCCCC",
        paddingLeft: 10
    },
    termsCheck:{
        flexDirection: "row",
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20
    },
    buttonContinue:{
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: 280,
        height: 60,
        borderRadius: 40,
        backgroundColor: "#76AB82",
    },

    textContinue:{
        color: "#EEEEEE"
    },
    formRowData:{
        paddingVertical: 5,
        flexDirection:'row',
        alignContent: 'space-between',
    },
    labelInputData:{
        borderTopRightRadius:40,
        borderTopLeftRadius:40,
        borderRadius: 40,
        backgroundColor: "#CCCCCC",
        paddingHorizontal: 20
    },
    row:{
        width: '48%',
        marginRight: 10

    }
});