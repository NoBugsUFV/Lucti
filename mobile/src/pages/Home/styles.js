import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        height: '100%'
    },
    north: {
        height:230,
        flex: 1.5,
        flexDirection: 'column',
        backgroundColor: '#76AB82',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '8%',
        paddingHorizontal: 20,
    },
    center: {
        flex: 2,
        flexDirection: 'column',
        backgroundColor: '#F9F9F9',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    south: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F9F9F9',
        paddingHorizontal: 10
    },
    circle: {
        width: 100,
        height: 100,
        backgroundColor: '#242424',
        borderRadius: 50
    },
    title: {
		fontSize: 16,
		marginTop: 3,
        fontWeight: 'bold',
	},
	caption: {
        fontSize: 14,
        marginTop: 10,
        color: '#364F3C'
    },
    logo: {
        marginTop: 50
    },
    searchbar: {
        marginTop: 20,
        backgroundColor: '#F9F9F9',
        borderRadius: 50,
        width: '98%'
    },
    card : {
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,
        borderRadius: 10,
    },
    categoriesCard : {
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,
        borderRadius: 10,
        width: 140,
    },
})