import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import {DrawerContent} from './pages/Template/DrawerContent';

import Home from './pages/Home';
import Login from './pages/Login';

const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator 
			drawerStyle={{backgroundColor: 'transparent'}} 
			drawerContent={props => <DrawerContent {...props}/>} 
			initialRouteName="Login">
				<Drawer.Screen name="Login" component={Login} />
				<Drawer.Screen name="Home" component={Home} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}