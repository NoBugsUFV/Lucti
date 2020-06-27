import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer } from 'react-navigation';

import {DrawerContent} from './pages/Template/DrawerContent';

// Rotas do Drawer
import Home from './pages/Home';
import Login from './pages/Login';

//Rotas do Stack
import Cadastro from './pages/Cadastro';
import Dados from './pages/Cadastro/dados';
import Endereco from './pages/Cadastro/endereco';
import Categorias from './pages/Cadastro/categorias';
import Final from './pages/Cadastro/final';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


 export function DrawerRoutes(){
	return(
		<Drawer.Navigator
		screenOptions={{headerShown: false}}
		drawerStyle={{backgroundColor: 'transparent'}} 
		drawerContent={props => <DrawerContent {...props}/>} 
		initialRouteName="Login">
			<Drawer.Screen name="Login" component={Login} />
			<Drawer.Screen name="Home" component={Home} />
		</Drawer.Navigator>	
	);
}

export function StackRoutes(){
	return(
		<Stack.Navigator screenOptions={{headerShown: false}}>
      		<Stack.Screen name="Cadastro" component={Cadastro} />
			<Stack.Screen name="Dados" component={Dados} />
			<Stack.Screen name="Endereco" component={Endereco} />
			<Stack.Screen name="Categorias" component={Categorias} />
			<Stack.Screen name="Final" component={Final} />
		</Stack.Navigator>
	);
}

export default function Routes(){
	return(
		<NavigationContainer>
			<Stack.Navigator screenOptions={{headerShown: false}}>
				<Stack.Screen name="Drawer" component={DrawerRoutes}/>
				<Stack.Screen name="Stack" component={StackRoutes}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

