import React, {useState} from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity, State } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Final(){
    const navigator = useNavigation();

    return(
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.titleFinal}>Pronto!</Text>
                <Text style={styles.descCategorias}>Seu cadastro foi realizado! </Text>
            </View>

            <Feather name='check' size={250} style={styles.check} color="#76AB82"/>

            <TouchableOpacity style={styles.buttonContinue} onPress={() =>{ navigator.navigate('Home')}}>
                <Text style={styles.textContinue}>Ir para o app</Text>
            </TouchableOpacity>

        </View>
    );
}