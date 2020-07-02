import React, {useState} from 'react';
import { View, Text, KeyboardAvoidingView, TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity, State } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import firebaseService from '../../services/Firebase/firebaseService';
import { TextInputMask } from 'react-native-masked-text'

import styles from './styles';

export default function Dados(props){

    const navigator = useNavigation();

    const [empresa, setEmpresa] = useState('');
    const [cnpj, setCNPJ] = useState('');
    const [registro, setRegistro] = useState('');
    const [site, setSite] = useState('');
    const [whatsApp, setWhatsApp] = useState('');
    const [telefone, setTelefone] = useState('');

    return(

        <KeyboardAvoidingView style={styles.container} behavior='position'keyboardVerticalOffset={-155}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>{navigator.goBack()}}>
                    <Feather name="arrow-left" size={28} color="#616161"/>
                </TouchableOpacity>
                <Text style={styles.title}>Seus dados</Text>
            </View>

            <View style={styles.formDados}>

                <View style={styles.formRow}>
                    <Text style={styles.label}>Nome da empresa</Text>
                    <TextInput
                        style={styles.labelInput}
                        placeholder='Ex: No Bugs'
                        placeholderTextColor="#3B5C2F"
                        autoCorrect={false}
                        onChangeText={text => setEmpresa(text)}
                    />
                </View>

                <View style={styles.formRow}>
                    <Text style={styles.label}>CNPJ</Text>
                    <TextInputMask
                        type={'cnpj'}
                        value={cnpj}
                        style={styles.labelInput}
                        placeholder='12.345.678/1234-56'
                        placeholderTextColor="#3B5C2F"
                        keyboardType='numeric'
                        maxLength={18}
                        onChangeText={text => setCNPJ(text)}
                    />
                </View>

                <View style={styles.formRow}>
                    <Text style={styles.label}>Registro Estadual</Text>
                    <TextInputMask
                        type={'custom'}
                        options={{
                            mask: '999.999.999/9999'
                        }}
                        value={registro}
                        style={styles.labelInput}
                        placeholder='123.456.789/1234'
                        placeholderTextColor="#3B5C2F"
                        keyboardType='numeric'
                        maxLength={16}
                        onChangeText={text => setRegistro(text)}
                    />
                </View>

                <View style={styles.formRow}>
                    <Text style={styles.label}>Site</Text>
                    <TextInput
                        style={styles.labelInput}
                        placeholder='Ex: nobugs.com.br'
                        placeholderTextColor="#3B5C2F"
                        keyboardType='url'
                        onChangeText={text => setSite(text)}
                    />
                </View>

                <View style={styles.formRowData}>
                    <View style={styles.row}>
                        <Text style={styles.label}>Whatsapp</Text>
                        <TextInputMask
                            type={'cel-phone'}
                            options={{
                                maskType: 'BRL',
                                withDDD: true,
                            }}
                            value={whatsApp}
                            style={styles.labelInput}
                            keyboardType='phone-pad'
                            placeholder='(00) 90000-0000'
                            maxLength={15}
                            placeholderTextColor="#3B5C2F"
                            onChangeText={text => setWhatsApp(text)}
                        />
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.label}>Telefone</Text>
                        <TextInputMask
                            type={'cel-phone'}
                            options={{
                                maskType: 'BRL',
                                withDDD: true,
                            }}
                            value={telefone}
                            style={styles.labelInput}
                            keyboardType='phone-pad'
                            placeholder='(00) 0000-0000'
                            maxLength={15}
                            placeholderTextColor="#3B5C2F"
                            onChangeText={text => setTelefone(text)}
                        />
                    </View>
                </View>
            </View>

            <TouchableOpacity style={styles.buttonContinue} onPress={() =>{
                let user = props.route.params.user;
                user.empresa = {
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

        </KeyboardAvoidingView>

    );
}