import React, {useState} from 'react';
import { View, Text, TextInput, KeyboardAvoidingView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity, State } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Endereco(props){

    const navigator = useNavigation();

    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [cep, setCep] = useState('');
    const [complemento, setComplemento] = useState('');

    return(

        <KeyboardAvoidingView style={styles.container} behavior='position'keyboardVerticalOffset={-190}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>{navigator.goBack()}}>
                    <Feather name="arrow-left" size={28} color="#616161"/>
                </TouchableOpacity>
                <Text style={styles.title}>Seu endereço</Text>
            </View>

            <View style={styles.form}>

                <View style={styles.formRow}>
                    <Text style={styles.label}>Endereço</Text>
                    <TextInput
                        style={styles.labelInput}
                        placeholder='Av. Brasil'
                        autoCorrect={false}
                        placeholderTextColor="#3B5C2F"
                        onChangeText={text => setEndereco(text)}
                    />
                </View>

                <View style={styles.formRowData}>
                    
                    <View style={styles.rowNum}>
                        <Text style={styles.label}>Nº</Text>
                        <TextInput
                            style={styles.labelInput}
                            placeholder='Ex: 90'
                            keyboardType='numeric'
                            placeholderTextColor="#3B5C2F"
                            onChangeText={text => setNumero(text)}
                        />
                    </View>

                    <View style={styles.rowBairro}>
                        <Text style={styles.label}>Bairro</Text>
                        <TextInput
                            style={styles.labelInput}
                            placeholder='Ex: Centro'
                            autoCorrect={false}
                            placeholderTextColor="#3B5C2F"
                            onChangeText={text => setBairro(text)}
                        />
                    </View>

                </View>

                <View style={styles.formRowData}>
                    <View style={styles.rowCidade}>
                        <Text style={styles.label}>Cidade</Text>
                        <TextInput
                            style={styles.labelInput}
                            placeholder='Ex: Viçosa'
                            autoCorrect={false}
                            placeholderTextColor="#3B5C2F"
                            onChangeText={text => setCidade(text)}
                        />
                    </View>

                    <View style={styles.rowUF}>
                        <Text style={styles.label}>UF</Text>
                        <TextInput
                            style={styles.labelInput}
                            placeholder='Ex: MG'
                            placeholderTextColor="#3B5C2F"
                            maxLength={2}
                            onChangeText={text => setUf(text)}
                        />
                    </View>
                </View>

                <View style={styles.formRowData}>
                    <View style={styles.rowCep}>
                        <Text style={styles.label}>CEP</Text>
                        <TextInput
                            style={styles.labelInput}
                            placeholder='Ex: 12345-678'
                            placeholderTextColor="#3B5C2F"
                            maxLength={8}
                            keyboardType='numeric'
                            onChangeText={text => setCep(text)}
                        />
                    </View>

                    <View style={styles.rowComplemento}>
                        <Text style={styles.label}>Complemento</Text>
                        <TextInput
                            style={styles.labelInput}
                            placeholder='Ex: A'
                            autoCorrect={false}
                            placeholderTextColor="#3B5C2F"
                            onChangeText={text => setComplemento(text)}
                        />
                    </View>
                </View>
            </View>

            <TouchableOpacity style={styles.buttonContinue}

             onPress={() =>{ 
                let user =  props.route.params.user;
                user.empresa.endereco = {
                    endereco:endereco,
                    numero:numero,
                    bairro:bairro,
                    cidade:cidade,
                    uf:uf,
                    cep:cep,
                    complemento:complemento
                };
                navigator.navigate('Categorias', {user:user})}}>
                <Text style={styles.textContinue}>Continuar</Text>
            </TouchableOpacity>

        </KeyboardAvoidingView>
        
    );
}