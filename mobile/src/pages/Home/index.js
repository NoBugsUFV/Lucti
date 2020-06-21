import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Card, Avatar, Title, Caption, Searchbar} from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

import logo from '../../assets/logo.png';

import firebaseService from '../../services/Firebase/firebaseService';

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
        <Card style={styles.categoriesCard} key={categorie.id}>
            <Card.Cover source={{ uri: categorie.picture }} />
            <Card.Content style={{alignItems: 'center', marginTop: 5}}>
                <Title style={{lineHeight: 20, fontSize: 18}}>{categorie.title}</Title>
            </Card.Content>
        </Card>
    )
})

export const Highlights = props => {
    const keys = Object.keys(props.companies ? props.companies : {})
    return keys.map(key => {
        return (
            <Card style={styles.card} key={key}>
                <Card.Cover source={{ uri: 'https://i.imgur.com/sv5ruRC.jpg' }} />
                <Card.Content style={{alignItems: 'center', marginTop: 5}}>
                    <Title style={{lineHeight: 20, fontSize: 18}}>{props.companies[key].dados.empresa}</Title>
                </Card.Content>
            </Card>
        )
    })
}

export default class Home extends React.Component {
    state = {
        searchQuery: '',
        companies: null
    };

    _onChangeSearch = query => this.setState({ searchQuery: query });

    componentDidMount() {
        firebaseService.readCompanies().then(ref => {
            ref.on('value', querySnapShot => {
                let data = querySnapShot.val() ? querySnapShot.val() : {};
                let todoItems = {...data};
                this.setState({
                  companies: todoItems,
                });
            });
        });
      }

        render(){
            return(
                <View style={styles.container}>
                    <View style={styles.north}>
                        <Image source={logo} style={styles.logo}/>
                        <Caption style={styles.caption}>Encontre empresas agora!</Caption>
                        <Searchbar style={styles.searchbar} placeholder="Busque por empresas ou serviços" onChangeText={this._onChangeSearch} value={this.state.searchQuery}/>
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
                        <ScrollView style={{width: '100%'}}>
                            <Highlights companies={this.state.companies}></Highlights>
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
        justifyContent: 'center',
        paddingBottom: '8%'
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