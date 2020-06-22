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

    //Endereço
    row:{
        width: '48%',
        marginRight: 10

    },
    rowNum:{
        width: '30%',
        marginRight: 10
    },
    rowBairro:{
        width: '65%',
    },
    rowCidade:{
        width: '65%',
        marginRight: 10
    },
    rowUF:{
        width: '30%',
    },
    rowCep:{
        width: '48%',
        marginRight: 10
    },
    rowComplemento:{
        width: '48%'
    },
    descCategorias:{
        marginTop: 20,
        paddingHorizontal: 20,
        fontSize: 18,
        textAlign: 'center'
    },

    // Categorias

    categoryOptions:{
        paddingTop: 40,
        paddingBottom: 35,
        flexDirection:'column',
        alignContent: 'space-between',
        alignSelf: 'center'
    },
    categoryRow:{
        paddingVertical: 10,
        flexDirection:'row',
        alignContent: 'space-between',
    },
    category:{
        paddingHorizontal: 5
    },
    categoryButton:{
        backgroundColor: '#CCCCCC',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 40,
    },
    // Final

    titleFinal:{
        paddingTop: 40,
        fontSize: 36,
        alignSelf: "center",
        color: "#3B5C2F",
    },

    check:{
        paddingVertical: 70,
        alignSelf: 'center'
    }

});