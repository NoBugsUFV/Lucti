import React from 'react';
import {View, Image, Text} from 'react-native';
import { TextInput } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

import logoImg from '../../assets/logo.png';

import styles from './styles';


export default function Login(){
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
                />

                <Text style={styles.formLabel}>Senha</Text>

                <TextInput
                    theme={{colors: {primary: 'transparent'}}}
                    secureTextEntry={true}
                    autoCompleteType={"email"}
                    underlineColor={'transparent'}
                    style={styles.passwordInput}
                    placeholder='Digite sua senha'
                />

                <View style={styles.submit}>

                    <TouchableOpacity style={styles.buttonSubmit}>
                        <Text style={styles.textSubmit}>Entrar</Text>
                    </TouchableOpacity>

                    <View style={styles.links}>

                        <TouchableOpacity style={styles.forgotButton}>
                            <Text style={styles.forgotText}>Esqueci minha senha</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.cadastroButton}>
                            <Text style={styles.cadastroText}>Ainda não possui cadastro?</Text>
                        </TouchableOpacity>

                        <Text style={styles.pwdText}>Powered by No Bugs</Text>

                    </View>
                </View>
            </View>
        </View>
    );
}