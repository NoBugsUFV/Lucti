import React, {useState} from 'react';
import { View, Text, TextInput, KeyboardAvoidingView } from 'react-native';
import { TouchableOpacity, State } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import firebaseService from '../../services/Firebase/firebaseService';

import { Feather } from '@expo/vector-icons';

import styles from './styles';
import BasicInput from '../Template/BasicInput';


/* Estou fazendo novas telas de cadastro sem usar o paper, mas para a primeira entrega, será usado a antiga mesmo, com as correçãoes pedidas*/

export default function Dados(props){

    const navigator = useNavigation();

    const [empresa, setEmpresa] = useState();
    const [cnpj, setCNPJ] = useState();
    const [site, setSite] = useState();
    const [registroEstadual, setRegistroEstadual] = useState();
    const [whatsApp, setWhatsApp] = useState();
    const [telefone, setTelefone] = useState();
    

    return(

        <KeyboardAvoidingView style={styles.container} behavior={'padding'}>
            
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>{navigator.goBack()}}>
                    <Feather name="arrow-left" size={28} color="#616161"/>
                </TouchableOpacity>
                <Text style={styles.title}>Seus dados</Text>
            </View>

            <View style={styles.form}>
                
                <View style={styles.formRow}>
                    <Text style={styles.label}>Nome da empresa</Text>
                    <BasicInput placeholder="Ex: Loja Lucti" 
                    autoCorrect={false}
                    onChangeText={text => setEmpresa(text)}/>
                </View>

                <View style={styles.formRow}>
                    <Text style={styles.label}>CNPJ</Text>
                    <BasicInput placeholder="Digite seu CNPJ"
                    onChangeText={text => setCNPJ(text)} />
                </View>

                <View style={styles.formRow}>
                    <Text style={styles.label}>Registro Estadual</Text>
                    <BasicInput placeholder="Digite o seu numero de registro " />
                </View>

                <View style={styles.formRow}>
                    <Text style={styles.label}>Site</Text>
                    <BasicInput placeholder="Digite o seu numero de registro " />
                </View>

                <View   style={styles.formRowData}>

                    <View style={styles.formRow}>
                        <Text style={styles.label}>Site</Text>
                        <BasicInput placeholder="Digite o seu numero de registro " />
                    </View>

                    <View style={styles.formRow}>
                        <Text style={styles.label}>Site</Text>
                        <BasicInput placeholder="Digite o seu numero de registro " />
                    </View>

                </View>

            </View>

        </KeyboardAvoidingView>
        
    );

}