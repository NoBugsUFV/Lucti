import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Final(){
    const navigator = useNavigation();

    return(
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.titleFinal}>Pronto!</Text>
                <Text style={styles.descCategorias}>Você receberá um email em instantes para validar seu cadastro </Text>
            </View>

            <Feather name='check' size={250} style={styles.check} color="#76AB82"/>

            <TouchableOpacity style={styles.buttonContinue} onPress={() =>{ navigator.navigate('Login')}}>
                <Text style={styles.textContinue}>Ir para o app</Text>
            </TouchableOpacity>

        </View>
    );
}