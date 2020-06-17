import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import {DrawerContent} from './pages/Template/DrawerContent';

import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Dados from './pages/Cadastro/dados';

const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator 
			drawerStyle={{backgroundColor: 'transparent'}} 
			drawerContent={props => <DrawerContent {...props}/>} 
			initialRouteName="Home">
				<Drawer.Screen name="Login" component={Login} />
				<Drawer.Screen name="Home" component={Home} />
				<Drawer.Screen name="Cadastro" component={Cadastro} />
				<Drawer.Screen name="Dados" component={Dados} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}