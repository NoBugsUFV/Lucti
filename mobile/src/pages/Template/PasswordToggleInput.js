import React from 'react'
import {View, TextInput, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../Login/styles';

export default class PasswordToggleInput extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            secureTextEntry: true,
            iconName: 'eye'
        }
    }

    iconOnPress = () => {
        this.setState({
            secureTextEntry: !this.state.secureTextEntry,
            iconName: this.state.iconName == 'eye' ? 'eye-off' : 'eye'
        })
    }

    render () {
        return (
            <View style={styles.passwordView}>
                <TextInput {...this.props} style={styles.labelPassword} placeholder="Digite sua senha" placeholderTextColor="#616161" selectionColor="#3B5C2F" secureTextEntry={this.state.secureTextEntry} />
                <TouchableOpacity onPress={this.iconOnPress} style={{paddingTop: 20}}>
                    <Icon name={this.state.iconName} size={20}/>
                </TouchableOpacity>
            </View>
        )
    }
}