import React from 'react';
import { View, Image, Text, FlatList } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { Searchbar } from 'react-native-paper';

import logo from '../../assets/logo.png';

//import useController from '../../services/Firebase/useController';
import companyController from '../../Controllers/companyController';

import styles from './styles';

import foto from '../../assets/foto.jpg'

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

export default function Home({navigation}){

    var state = {
        searchQuery: '',
        companies: null
    };

    var _onChangeSearch = query => this.setState({ searchQuery: query });

    function componentDidMount() {
        companyController.readCompanies().then(ref => {
            ref.on('value', querySnapShot => {
                let data = querySnapShot.val() ? querySnapShot.val() : {};
                let todoItems = {...data};
                console.log(data)
                this.setState({
                  companies: todoItems,
                });
            });
        });
    }
    companyController.readCompanies().then(ref => {
            ref.on('value', querySnapShot => {
                let data = querySnapShot.val() ? querySnapShot.val() : {};
                let todoItems = {...data};
                console.log(data)
                this.setState({
                  companies: todoItems,
                });
            });
        });
    
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                
                <TouchableOpacity onPress={()=>{navigation.openDrawer()}}>
                    <Feather name="menu" size={28} color="#3B5C2F"/>
                </TouchableOpacity>

                <Image source={logo} style={styles.logo}/>

                <Text style={styles.subtitle}>O que você procura?</Text>

                <Searchbar style={styles.searchbar} 
                placeholder="Busque empresas ou serviços" 
                onChangeText={_onChangeSearch} 
                value={state.searchQuery} 
                />

            </View>

            <ScrollView style={styles.content} vertical showsVerticalScrollIndicator={false}>
                <Text style={styles.categoriesTitle}>Categorias</Text>
                <ScrollView style={styles.categories} horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.category}>
                        <Image style={styles.categoryImage} source={foto}/>
                        <Text style={styles.categoryName}>{categories[0].title}</Text>
                    </View>
                    <View style={styles.category}>
                        <Image style={styles.categoryImage} source={foto}/>
                        <Text style={styles.categoryName}>{categories[1].title}</Text>
                    </View>
                    <View style={styles.category}>
                        <Image style={styles.categoryImage} source={foto}/>
                        <Text style={styles.categoryName}>{categories[2].title}</Text>
                    </View>
                    <View style={styles.category}>
                        <Image style={styles.categoryImage} source={foto}/>
                        <Text style={styles.categoryName}>{categories[3].title}</Text>
                    </View>
                    <View style={styles.category}>
                        <Image style={styles.categoryImage} source={foto}/>
                        <Text style={styles.categoryName}>{categories[4].title}</Text>
                    </View>
                    <View style={styles.category}>
                        <Image style={styles.categoryImage} source={foto}/>
                        <Text style={styles.categoryName}>{categories[5].title}</Text>
                    </View>
                </ScrollView>

                <Text style={styles.categoriesTitle}>Populares</Text>
                <ScrollView style={styles.companies} vertical showsVerticalScrollIndicator={false}>
                    <View style={styles.companyCard}>
                        
                        <Image style={styles.companyLogo} source={foto} />
                        <View style={styles.companyInfo}>
                            <Text style={styles.companyName}>Nome da Empresa</Text>
                            <Text style={styles.companyServices} >Serviços ou produtos</Text>
                            <Text style={styles.companyPhone} >(00) 90000-0000</Text>
                        </View>
                        
                    </View>

                    <View style={styles.companyCard}>
                        
                        <Image style={styles.companyLogo} source={foto} />
                        <View style={styles.companyInfo}>
                            <Text style={styles.companyName}>Nome da Empresa</Text>
                            <Text style={styles.companyServices} >Serviços ou produtos</Text>
                            <Text style={styles.companyPhone} >(00) 90000-0000</Text>
                        </View>
                        
                    </View>

                    <View style={styles.companyCard}>
                        
                        <Image style={styles.companyLogo} source={foto} />
                        <View style={styles.companyInfo}>
                            <Text style={styles.companyName}>Nome da Empresa</Text>
                            <Text style={styles.companyServices} >Serviços ou produtos</Text>
                            <Text style={styles.companyPhone} >(00) 90000-0000</Text>
                        </View>
                        
                    </View>

                    <View style={styles.companyCard}>
                        
                        <Image style={styles.companyLogo} source={foto} />
                        <View style={styles.companyInfo}>
                            <Text style={styles.companyName}>Nome da Empresa</Text>
                            <Text style={styles.companyServices} >Serviços ou produtos</Text>
                            <Text style={styles.companyPhone} >(00) 90000-0000</Text>
                        </View>
                        
                    </View>

                    <View style={styles.companyCard}>
                        
                        <Image style={styles.companyLogo} source={foto} />
                        <View style={styles.companyInfo}>
                            <Text style={styles.companyName}>Nome da Empresa</Text>
                            <Text style={styles.companyServices} >Serviços ou produtos</Text>
                            <Text style={styles.companyPhone} >(00) 90000-0000</Text>
                        </View>
                        
                    </View>

                    <View style={styles.companyCard}>
                        
                        <Image style={styles.companyLogo} source={foto} />
                        <View style={styles.companyInfo}>
                            <Text style={styles.companyName}>Nome da Empresa</Text>
                            <Text style={styles.companyServices} >Serviços ou produtos</Text>
                            <Text style={styles.companyPhone} >(00) 90000-0000</Text>
                        </View>
                        
                    </View>

                </ScrollView>

            </ScrollView>

        </View>
    );
}
