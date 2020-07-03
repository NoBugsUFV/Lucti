import React, { useEffect, useState} from 'react';
import {View, Image, KeyboardAvoidingView, Text, TextInput, Linking} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import PasswordInputText from 'react-native-hide-show-password-input';

import logoImg from '../../assets/logo.png';

import styles from './styles';

import userController from '../../Controllers/userController';

export default function Login2(){

    const navigator = useNavigation();
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    async function signInUser(){
        try {
            let user = await userController.loginUser(email,password);
            if(user == undefined){
                alert("Usuário não cadastrado")
            }else{
                if(user.user.emailVerified == true){
                    navigator.navigate("Home");
                }else{
                    alert("O email ainda não foi verificado")
                }
            }
            
        }catch{
            alert("Falha no login. Por favor tente mais tarde")
        }
    }

    return(

        <KeyboardAvoidingView style={styles.container} behavior='position' keyboardVerticalOffset={-175}>
            
            <View style={styles.header}>
                <Image source={logoImg} style={styles.headerLogo}/>
                <Text style={styles.headerSlogan}>Encontre empresas agora!</Text>
            </View>

            <View style={styles.form}>

                <Text style={styles.formLabel}>Email</Text>
                <TextInput style={styles.input} autoCorrect={false} keyboardType='email-address' placeholder="Digite seu email" placeholderTextColor="#616161" selectionColor="#3B5C2F" onChangeText={text => setEmail(text)}/>

                <Text style={styles.formLabel}>Senha</Text>
                <PasswordInputText
                    inputContainerStyle={styles.labelPassword}
                    fontSize={14}
                    label={''}
                    lineWidth={0}
                    activeLineWidth={0} 
                    placeholder="Digite sua senha"
                    placeholderTextColor="#616161" 
                    selectionColor="#3B5C2F"  
                    autoCorrect={false}
                    onChangeText={text => setPassword(text)}
                 />

            </View>

            <View style={styles.submit}>

                <TouchableOpacity style={styles.buttonSubmit} onPress={signInUser}>
                    <Text style={styles.textSubmit}>Entrar</Text>
                </TouchableOpacity>

                <View style={styles.links}>

                    <TouchableOpacity style={styles.forgotButton}
                    onPress={()=>{userController.doPasswordReset(email)}}
                    >
                        <Text style={styles.forgotText}>Esqueci minha senha</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cadastroButton}
                        onPress={()=>{ navigator.navigate('Stack', { screen: 'Cadastro' })}}
                    >
                        <Text style={styles.cadastroText}>Ainda não possui cadastro?</Text>
                    </TouchableOpacity>

                    <Text style={styles.pwdText}>Powered by No Bugs</Text>

                </View>
            </View>
            
        </KeyboardAvoidingView>

    );
}