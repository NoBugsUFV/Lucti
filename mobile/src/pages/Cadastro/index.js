import React, {useState} from 'react';
import { View, Text, CheckBox, Linking, TextInput, KeyboardAvoidingView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import PasswordInputText from 'react-native-hide-show-password-input';

import styles from './styles';

export default function Cadastro(){

    const navigator = useNavigation();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();


    return(
        <KeyboardAvoidingView style={styles.container} behavior='position' keyboardVerticalOffset={-130}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>{navigator.navigate('Login')}}>
                    <Feather name="arrow-left" size={28} color="#616161"/>
                </TouchableOpacity>
                <Text style={styles.title}>Cadastro</Text>
            </View>

            <View style={styles.form}>

                <View style={styles.formRow}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.labelInput}
                        placeholder='Ex: seuemail@email.com'
                        placeholderTextColor='#3B5C2F'
                        onChangeText={text => setEmail(text)}
                        keyboardType= "email-address"
                    />
                </View>

                <View style={styles.formRow}>
                    <Text style={styles.label}>Senha</Text>
                    <PasswordInputText
                        inputContainerStyle={styles.labelPassword}
                        fontSize={14}
                        label={''}
                        lineWidth={0}
                        activeLineWidth={0}
                        placeholder='Digite sua senha'
                        placeholderTextColor='#3B5C2F'
                        onChangeText={text => setPassword(text)}
                    />
                </View>


                <View style={styles.formRow}>
                    <Text style={styles.label}>Confirme a senha</Text>
                    <PasswordInputText                        
                        inputContainerStyle={styles.labelPassword}
                        fontSize={14}
                        label={''}
                        lineWidth={0}
                        activeLineWidth={0}
                        placeholder='Digite a senha novamente'
                        placeholderTextColor='#3B5C2F'
                        onChangeText={text => setConfirmPassword(text)}
                    />
                </View>
                <View style={styles.termsCheck}>
                    <CheckBox />
                    <Text>Li e concordo com os <Text onPress={() => Linking.openURL('http://google.com')} style={{color: "#3B5C2F"}}>termos de uso</Text></Text>
                </View>
            </View>

            <TouchableOpacity style={styles.buttonContinue} 
                onPress={()=> {
                    let user = {
                        login: {
                            email:email,
                            password:password
                        }
                    };

                    navigator.navigate('Dados', {user:user});
                }}>
                <Text style={styles.textContinue}>Continuar</Text>
            </TouchableOpacity>
            
        </KeyboardAvoidingView>
    );
}