import React, {useState} from 'react';
import { View, Text, CheckBox, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

let info = null;
export default function Cadastro(){
    
    const navigator = useNavigation();

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [confimeSenha, setConfirmeSenha] = useState();


    console.log(info);

    return(

        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>{navigator.goBack()}}>
                    <Feather name="arrow-left" size={28} color="#616161"/>
                </TouchableOpacity>
                <Text style={styles.title}>Cadastro</Text>
            </View>

            <View style={styles.form}>
                
                <View style={styles.formRow}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        theme={{colors: {primary: 'transparent'}}}
                        underlineColor={'transparent'}
                        style={styles.labelInput}
                        placeholder='Ex: seuemail@email.com'
                        onChangeText={text => setEmail(text)}
                    />
                </View>

                <View style={styles.formRow}>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                        theme={{colors: {primary: 'transparent'}}}
                        underlineColor={'transparent'}
                        style={styles.labelInput}
                        placeholder='Digite uma senha'
                        onChangeText={text => setSenha(text)}
                    />
                </View>

                <View style={styles.formRow}>
                    <Text style={styles.label}>Confirme a senha</Text>
                    <TextInput
                        theme={{colors: {primary: 'transparent'}}}
                        underlineColor={'transparent'}
                        style={styles.labelInput}
                        placeholder='Digite a senha novamente'
                        onChangeText={text => setConfirmeSenha(text)}
                    />
                </View>
                <View style={styles.termsCheck}>
                    <CheckBox />
                    <Text>Li e concordo com os <Text onPress={() => Linking.openURL('http://google.com')} style={{color: "#3B5C2F"}}>termos de uso</Text></Text>
                </View>

            </View>
                
                {/* .navigation.navigate('tela2', {resultado: this.state.resutadoSoma}) */}
            
            <TouchableOpacity style={styles.buttonContinue} 
            onPress={()=>{
                let user = {
                    email:email,
                    senha:senha
                };
                navigator.navigate('Dados',{user:user});
                }}>
                <Text style={styles.textContinue}>Continuar</Text>
            </TouchableOpacity>

        </View>

    );
}