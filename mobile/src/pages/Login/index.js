import React from 'react';
import {View, Image, Text} from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';


export default function Login(){
    return(
        <View style={styles.container}>
            <View >
                <Image source={logoImg}/>
                <Text>Encontre empresas agora!</Text>
            </View>
        </View>
    );
}