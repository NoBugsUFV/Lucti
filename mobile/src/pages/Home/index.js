import React from 'react';
import {View, Image, Text} from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';


export default function Home(){
    return(
        <View style={styles.container}>
            <View >
                <Text style={styles.texto}>Home</Text>
            </View>
        </View>
    );
}