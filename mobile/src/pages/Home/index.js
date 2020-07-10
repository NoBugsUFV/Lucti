import React, {useState,useEffect} from 'react';
import { View, Image, Text, FlatList} from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { Searchbar } from 'react-native-paper';
import logo from '../../assets/logo.png';
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

    // const [loading, setLoading] = useState(false);
    const [empresas, setEmpresas] = useState([]);
    //const[companies, setCompanies] = useState();
    async function loadEmpresas(){        

        // if(loading){
        //     return;
        // }
        //setLoading(true);

        //const response = companyController.getDataList;
        await companyController.getDataList('users', (dataReceived) =>       
        setEmpresas({empresa: dataReceived}))
        
        // console.log(empresas);
        
        //setLoading(false);
    }
    useEffect(() => {
        loadEmpresas();
    }, []);

    // const renderItem = ({ item }) => (
    //     <View style={styles.companies}>
    //       <Text>a</Text>
    //       <Text>a</Text>
    //     </View>
    //   );

    const renderCategories = ({ item }, contador = 1) =>
    (
        <View style={styles.category}>
            <Image style={styles.categoryImage} source={{uri:`https://picsum.photos/70${contador+=1}`}}/>
            <Text style={styles.categoryName}>{item.title}</Text>
        </View>
    );

    const renderItem = ({ item }, contador = 1) =>
    (
        <View style={styles.companyCard}>  
            <Image
                style={styles.companyLogo}
                source={{
                uri:`https://picsum.photos/70${contador+=1}`}}
            />          
            {/* <Image style={styles.companyLogo} source={foto} /> */}
            <View style={styles.companyInfo}>
                <Text style={styles.companyName}>{item.empresa.empresa}</Text>
                <Text style={styles.companyServices} >{item.empresa.endereco.cidade}</Text>
                <Text style={styles.companyPhone} >{item.empresa.telefone}</Text>
            </View>    
        </View>
    );

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
                //onChangeText={_onChangeSearch} 
                //value={state.searchQuery} 
                />

            </View>

            {/* <ScrollView style={styles.content} vertical showsVerticalScrollIndicator={false}>
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

                
               
            </ScrollView> */}
            <FlatList
                ListHeaderComponent={
                    <FlatList
                        style={{ margin: 5 }}
                        horizontal={true}
                        data={categories}
                        renderItem={renderCategories}
                        keyExtractor={item => item.id.toString()}
                    />
                }
                ListFooterComponent={
                    <FlatList
                        style={{ marginTop: 5 }}
                        //contentContainerStyle={styles.companies}
                        // ListHeaderComponent={
                        //     <Text style={styles.categoriesTitle}>Populares</Text>
                        // }
                        data={empresas.empresa}
                        renderItem={renderItem}
                        //keyExtractor={item => item.codAlimento}
                    />  
                }
            />

           

        </View>
    );
}
