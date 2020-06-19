import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import {DrawerContent} from './pages/Template/DrawerContent';

import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Dados from './pages/Cadastro/dados';
import Endereco from './pages/Cadastro/endereco';
import Categorias from './pages/Cadastro/categorias';
import Final from './pages/Cadastro/final';


const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator 
			drawerStyle={{backgroundColor: 'transparent'}} 
			drawerContent={props => <DrawerContent {...props}/>} 
			initialRouteName="Cadastro">
				<Drawer.Screen name="Login" component={Login} />
				<Drawer.Screen name="Home" component={Home} />
				<Drawer.Screen name="Cadastro" component={Cadastro} />
				<Drawer.Screen name="Dados" component={Dados} />
				<Drawer.Screen name="Endereco" component={Endereco} />
				<Drawer.Screen name="Categorias" component={Categorias} />
				<Drawer.Screen name="Final" component={Final} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}