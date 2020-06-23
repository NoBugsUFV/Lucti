import React, {useState} from 'react';
import { View, Text,  } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import { TouchableOpacity, State } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import firebaseService from '../../services/Firebase/firebaseService';

import styles from './styles';

export default function Dados(props){

    const navigator = useNavigation();

    const [empresa, setEmpresa] = useState();
    const [cnpj, setCNPJ] = useState();
    const [registro, setRegistro] = useState();
    const [site, setSite] = useState();
    const [whatsApp, setWhatsApp] = useState();
    const [telefone, setTelefone] = useState();
    
    return(
        <View style={styles.container} >
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>{navigator.goBack()}}>
                    <Feather name="arrow-left" size={28} color="#616161"/>
                </TouchableOpacity>
                <Text style={styles.title}>Seus dados</Text>
            </View>

            <View style={styles.form, {paddingTop: 10, paddingBottom: 15}}>
                
                <View style={styles.formRow}>
                    <Text style={styles.label}>Nome da empresa</Text>
                    <TextInput
                        theme={{colors: {primary: 'transparent'}}}
                        underlineColor={'transparent'}
                        style={styles.labelInput}
                        placeholder='Ex: No Bugs'
                        autoCorrect={false}
                        onChangeText={text => setEmpresa(text)}
                    />
                </View>

                <View style={styles.formRow}>
                    <Text style={styles.label}>CNPJ</Text>
                    <TextInput
                        theme={{colors: {primary: 'transparent'}}}
                        underlineColor={'transparent'}
                        style={styles.labelInput}
                        placeholder='Digite seu CNPJ'
                        keyboardType='numeric'
                        onChangeText={text => setCNPJ(text)}
                    />
                </View>

                <View style={styles.formRow}>
                    <Text style={styles.label}>Registro Estadual</Text>
                    <TextInput
                        theme={{colors: {primary: 'transparent'}}}
                        underlineColor={'transparent'}
                        style={styles.labelInput}
                        placeholder='Digite seu Registro Estadual'
                        keyboardType='numeric'
                        onChangeText={text => setRegistro(text)}
                    />
                </View>

                <View style={styles.formRow}>
                    <Text style={styles.label}>Site</Text>
                    <TextInput
                        theme={{colors: {primary: 'transparent'}}}
                        underlineColor={'transparent'}
                        style={styles.labelInput}
                        placeholder='Digite seu site'
                        keyboardType='url'
                        onChangeText={text => setSite(text)}
                    />
                </View>
                <View style={styles.formRowData}>
                    <View style={styles.row}>
                        <Text style={styles.label}>Whatsapp</Text>
                        <TextInput
                            theme={{colors: {primary: 'transparent'}}}
                            underlineColor={'transparent'}
                            style={styles.labelInputData}
                            keyboardType='phone-pad'
                            placeholder='(00) 90000-0000'
                            onChangeText={text => setWhatsApp(text)}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Telefone</Text>
                        <TextInput
                            theme={{colors: {primary: 'transparent'}}}
                            underlineColor={'transparent'}
                            style={styles.labelInputData}
                            placeholder='(00) 0000-0000'
                            keyboardType='phone-pad'
                            onChangeText={text => setTelefone(text)}
                        />
                    </View>
                </View>
                
            </View>

            <TouchableOpacity style={styles.buttonContinue} onPress={() =>{
                let user = props.route.params.user;
                user.dados = {
                    empresa:empresa,
                    cnpj:cnpj,
                    registro:registro,
                    site:site,
                    whatsApp:whatsApp,
                    telefone:telefone
                };
                navigator.navigate('Endereco', {user:user})}}>
                <Text style={styles.textContinue}>Continuar</Text>
            </TouchableOpacity>
        </View>
    );
}