import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Title, Caption, Searchbar} from 'react-native-paper';
import { render } from 'react-dom';

const Circle = props => <View style={styles.circle}></View>

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
                    <Searchbar placeholder="Busque por empresas ou serviços" onChangeText={this._onChangeSearch} value={searchQuery}/>
                </View>
                <View style={styles.center}>
                    <Circle/>
                    <Circle/>
                    <Circle/>
                </View>
                <View style={styles.south}>
                    <Circle/>
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
        flex: 1,
        backgroundColor: '#76AB82',
        alignItems: 'center',
        justifyContent: 'center'
    },
    center: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#F9F9F9',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    south: {
        flex: 1,
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
		lineHeight: 14,
	},
})