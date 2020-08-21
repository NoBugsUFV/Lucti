import {StyleSheet} from 'react-native';

export default StyleSheet.create({

//Geral da página
    container:{
        flex: 1,
    },

//Header
    header:{
        paddingHorizontal: 20,
        paddingVertical: 35,
        backgroundColor: "#76AB82",
        height:193,
    },
    logo:{
        alignSelf: 'center',
        marginTop: -30,
        marginBottom: 10,
    },
    subtitle:{
        fontSize: 20,
        alignSelf: 'center',
        color: '#3B5C2F',
        paddingVertical: 10
    },
    searchbar:{
        borderRadius: 40
    },

//Conteúdo da página
    content:{
        paddingHorizontal: 20,
        paddingVertical: 10
    },
//Categorias
    categoriesTitle:{
        fontSize: 18,
        fontWeight: 'bold',
        color: "#3B5C2F"
    },
    categories:{
        paddingVertical: 10,
    },
    category:{
        width: 100,
        marginRight: 10
    },
    categoryImage:{
        width: 100,
        height: 148,
        borderRadius: 10,
    },
    categoryName:{
        alignSelf: 'center'
    },
//Empresas
    companies:{
        alignSelf: 'center',
        width: "100%",
        marginTop: 10,
    },
    companyCard:{
        flexDirection: 'row',
        backgroundColor: "#76AB82",
        height: 89,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginBottom: 15,
        borderRadius: 10,
    },
    companyLogo:{
        width: 70,
        height: 70,
        borderRadius: 10,
    },
    companyInfo:{
        paddingHorizontal: 20,
    },
    companyName:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#EEEEEE'
    },
    companyServices:{
        color: '#3B5C2F',
        paddingVertical: 2
    },
    companyPhone:{
        color: '#3B5C2F'
    }

});