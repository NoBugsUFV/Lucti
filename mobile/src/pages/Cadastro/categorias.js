import React, {useState} from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity, State } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import userController from '../../controllers/userController';


export default function Categorias(props){
    const navigator = useNavigation();

    async function cadastrarUsuario() {
        let user = props.route.params.user;
        const validation = await userController.createAuthUser(user);
        console.log("        validation      "+validation)
        if(validation){
            navigator.navigate('Final');
        }else{
            alert("Falha no cadastro de informações, favor conferir informações")
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>{navigator.goBack()}}>
                        <Feather name="arrow-left" size={28} color="#616161"/>
                </TouchableOpacity>
                <Text style={styles.title}>Categorias</Text>
                <Text style={styles.descCategorias}>Escolha as categorias de serviço ou atendimento do seu negócio: </Text>
            </View>

            <View style={styles.categoryOptions}>

                <View style={styles.categoryRow}>

                    <View style={styles.category}>
                        <TouchableOpacity style={styles.categoryButton}>
                            <Text style={styles.categoryText}>Moda</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.category}>
                        <TouchableOpacity style={styles.categoryButton}>
                            <Text style={styles.categoryText}>Agropecuária</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.category}>
                        <TouchableOpacity style={styles.categoryButton}>
                            <Text style={styles.categoryText}>Vestuário</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>

                <View style={styles.categoryRow}>

                    <View style={styles.category}>
                        <TouchableOpacity style={styles.categoryButton}>
                            <Text style={styles.categoryText}>Agropecuária</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.category}>
                        <TouchableOpacity style={styles.categoryButton}>
                            <Text style={styles.categoryText}>Vestuário</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.category}>
                        <TouchableOpacity style={styles.categoryButton}>
                            <Text style={styles.categoryText}>Moda</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>

                <View style={styles.categoryRow}>

                    <View style={styles.category}>
                        <TouchableOpacity style={styles.categoryButton}>
                            <Text style={styles.categoryText}>Moda</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.category}>
                        <TouchableOpacity style={styles.categoryButton}>
                            <Text style={styles.categoryText}>Agropecuária</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.category}>
                        <TouchableOpacity style={styles.categoryButton}>
                            <Text style={styles.categoryText}>Vestuário</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>

                <View style={styles.categoryRow}>

                    <View style={styles.category}>
                        <TouchableOpacity style={styles.categoryButton}>
                            <Text style={styles.categoryText}>Agropecuária</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.category}>
                        <TouchableOpacity style={styles.categoryButton}>
                            <Text style={styles.categoryText}>Vestuário</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.category}>
                        <TouchableOpacity style={styles.categoryButton}>
                            <Text style={styles.categoryText}>Moda</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>

                <View style={styles.categoryRow}>

                    <View style={styles.category}>
                        <TouchableOpacity style={styles.categoryButton}>
                            <Text style={styles.categoryText}>Moda</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.category}>
                        <TouchableOpacity style={styles.categoryButton}>
                            <Text style={styles.categoryText}>Agropecuária</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.category}>
                        <TouchableOpacity style={styles.categoryButton}>
                            <Text style={styles.categoryText}>Vestuário</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>

                <View style={styles.categoryRow}>

                    <View style={styles.category}>
                        <TouchableOpacity style={styles.categoryButton}>
                            <Text style={styles.categoryText}>Agropecuária</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.category}>
                        <TouchableOpacity style={styles.categoryButton}>
                            <Text style={styles.categoryText}>Vestuário</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.category}>
                        <TouchableOpacity style={styles.categoryButton}>
                            <Text style={styles.categoryText}>Moda</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>

                <View style={styles.categoryRow}>

                    <View style={styles.category}>
                        <TouchableOpacity style={styles.categoryButton}>
                            <Text style={styles.categoryText}>Moda</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.category}>
                        <TouchableOpacity style={styles.categoryButton}>
                            <Text style={styles.categoryText}>Agropecuária</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.category}>
                        <TouchableOpacity style={styles.categoryButton}>
                            <Text style={styles.categoryText}>Vestuário</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>


            </View>

            <TouchableOpacity style={styles.buttonContinue} onPress={
                //() =>{ navigator.getParam(email,''); navigator.navigate('Final')}
                cadastrarUsuario
                }>
                <Text style={styles.textContinue}>Finalizar</Text>
            </TouchableOpacity>

        </View>
    );
}