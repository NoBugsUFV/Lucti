import React, { useEffect, useState} from 'react';
import {View, Image} from 'react-native';
import { TextInput, Text } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import logoImg from '../../assets/logo.png';

import styles from './styles';

import firebaseService from '../../services/Firebase/firebaseService';

export default function Login(){

    const navigator = useNavigation();
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    async function signInUser(){
        try {
            let user = await firebaseService.loginUser(email, password);
            await AsyncStorage.setItem("@userData", JSON.stringify(user));
            if(user.email){
                navigator.navigate("Home");
            }
        } catch(error){
            console.log(error);
        }
    }

    return(
        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={logoImg} style={styles.headerLogo}/>
                <Text style={styles.headerSlogan}>Encontre empresas agora!</Text>
            </View>

            <View style={styles.form}>

                <Text style={styles.formLabel}>Email</Text>

                <TextInput
                    theme={{colors: {primary: 'transparent'}}}
                    underlineColor={'transparent'}
                    style={styles.emailInput}
                    placeholder='Ex: seuemail@email.com'
                    onChangeText={text => setEmail(text)}
                />

                <Text style={styles.formLabel}>Senha</Text>

                <TextInput
                    theme={{colors: {primary: 'transparent'}}}
                    secureTextEntry={true}
                    autoCompleteType={"email"}
                    underlineColor={'transparent'}
                    style={styles.passwordInput}
                    placeholder='Digite sua senha'
                    onChangeText={text => setPassword(text)}
                />

                <View style={styles.submit}>

                    <TouchableOpacity style={styles.buttonSubmit} onPress={signInUser}>
                        <Text style={styles.textSubmit}>Entrar</Text>
                    </TouchableOpacity>

                    <View style={styles.links}>

                        <TouchableOpacity style={styles.forgotButton}
                        onPress={()=>{firebaseService.doPasswordReset(email)}}
                        >
                            <Text style={styles.forgotText}>Esqueci minha senha</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.cadastroButton}
                        onPress={()=>{ navigator.navigate('Cadastro')}}>
                            <Text style={styles.cadastroText}>Ainda não possui cadastro?</Text>
                        </TouchableOpacity>

                        <Text style={styles.pwdText}>Powered by No Bugs</Text>

                    </View>
                </View>
            </View>
        </View>
    );
}