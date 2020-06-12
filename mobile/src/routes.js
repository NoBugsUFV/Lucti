import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Button, View } from 'react-native';

const Drawer = createDrawerNavigator();

import Login from './pages/Login';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';


export default function Routes(){
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="LoginPage">
            <Drawer.Screen name="HomePage" component={HomePage} />
            <Drawer.Screen name="LoginPage" component={LoginPage} />
        </Drawer.Navigator>
    </NavigationContainer>
}


