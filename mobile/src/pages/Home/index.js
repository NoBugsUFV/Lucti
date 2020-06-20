import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, Button, Avatar, Title, Paragraph, Caption, Searchbar} from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import firebaseService from '../../services/Firebase/firebaseService';


const Circle = props => <View style={styles.circle}></View>
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const categories = [
    {id: 1, title: 'Vestuário', picture: 'https://picsum.photos/700'},
    {id: 2, title: 'Bebidas', picture: 'https://picsum.photos/700'},
    {id: 3, title: 'Moda', picture: 'https://picsum.photos/700'},
    {id: 4, title: 'Beleza', picture: 'https://picsum.photos/700'},
    {id: 5, title: 'Transportes', picture: 'https://picsum.photos/700'},
    {id: 6, title: 'Esportes', picture: 'https://picsum.photos/700'},
    {id: 7, title: 'Mecânicas', picture: 'https://picsum.photos/700'},
    {id: 8, title: 'Eletrônicos', picture: 'https://picsum.photos/700'}
]



export const Categories = props => 
categories.map(categorie => {
    return (
        <Card style={styles.card} key={categorie.id}>
            <Card.Cover source={{ uri: categorie.picture }} />
            <Card.Content>
                <Title style={{lineHeight: 20}}>{categorie.title}</Title>
            </Card.Content>
        </Card>
    )
})

export default class Home extends React.Component{
    state = {
        searchQuery: '',
    };

    _onChangeSearch = query => this.setState({ searchQuery: query });

    render(){
        const { searchQuery } = this.state;

        return(
            <View style={styles.container}>
                <View style={styles.north}>
                    <Title style={styles.title}>LUCTI</Title>
                    <Caption style={styles.caption}>Encontre empresas agora!</Caption>
                    <Searchbar placeholder="Busque por empresas ou serviços" 
                    onChangeText={this._onChangeSearch} value={searchQuery}/>
                </View>
                <View style={styles.center}>
                    <View style={{flexDirection: 'row'}}>
                        <Title style={{flex: 5}}>Categorias</Title>
                        <Caption style={{flex: 1}}>Ver todas</Caption>
                    </View>
                    <ScrollView horizontal={true}>
                        <Categories></Categories>
                    </ScrollView>
                </View>
                <View style={styles.south}>
                    <View style={{flexDirection: 'row'}}>
                        <Title style={{flex: 5}}>Populares</Title>
                        <Caption style={{flex: 1}}>Ver todas</Caption>
                    </View>
                    <ScrollView style={{width: '90%'}}>
                        <Categories></Categories>
                    </ScrollView>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    north: {
        flex: 1.5,
        backgroundColor: '#76AB82',
        alignItems: 'center',
        justifyContent: 'center'
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
        backgroundColor: '#F9F9F9'
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
    },
    card : {
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,
        borderRadius: 10
    }
})