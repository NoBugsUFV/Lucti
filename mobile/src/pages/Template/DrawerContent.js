import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Avatar, Title, Caption, Drawer, Text, TouchableRipple, Switch, DefaultTheme, DarkTheme, Provider as PaperProvider} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../../../components/context';
import { useNavigation } from '@react-navigation/native';

export function DrawerContent(props) {

	const navigator = useNavigation();

	const [isDarkTheme, setIsDarkTheme] = React.useState(false);

	const toggleTheme = () => {
		setIsDarkTheme(!isDarkTheme);
	}

	const [user, setUser] = React.useState();

	if(user == null && props.userToken.userToken.user !== null){
		setUser(JSON.parse(props.userToken.userToken.user))
		navigator.navigate("Home");
	}
	
	const { signOut } = React.useContext(AuthContext) 

	const signOutHandle = () => {
		signOut()
		setUser(null)
		navigator.navigate("Login")
	}
	
    return (
		<PaperProvider theme={isDarkTheme ? darkTheme : defaultTheme}>
			<View style={{flex: 1, backgroundColor: !isDarkTheme ? '#F9F9F9' :'#242424', borderBottomRightRadius: 50, borderTopRightRadius: 50}}>
				<DrawerContentScrollView {...props}>
					<View style={styles.drawerContent}>
						<View style={styles.userInfoSection}>
							<TouchableOpacity style={{flexDirection:'column', alignItems: 'center', marginTop:15}} onPress={() => {props.navigation.navigate(user ? 'Profile' : 'Login')}}>
								<Avatar.Image source={{uri: 'https://avatars3.githubusercontent.com/u/62998385?s=200&v=4'}} size={user ? 100 : 0}/>
								<View style={{flexDirection: 'column', alignItems: 'center'}}>
									<Title style={styles.title}>{user ? user.user.email : 'Acesse sua conta agora!'}</Title>
									<Caption style={styles.caption}>{user ? user.user.email : 'Clique aqui'}</Caption>
								</View>
							</TouchableOpacity>
						</View>
						<Drawer.Section style={styles.drawerSection}>
							<DrawerItem 
								icon={({color, size}) =>
									<Icon
										name="home"
										color={!isDarkTheme ? color : 'white'}
										size={size}
									/>}
								label="Anúncios" 
								labelStyle={{color: isDarkTheme ? 'white' : '#202020' }}
								onPress={() => {props.navigation.navigate('Home')}} 
							/>
							<DrawerItem 
								icon={({color, size}) =>
									<Icon
										name="account"
										color={!isDarkTheme ? color : 'white'}
										size={size}
									/>}
								label="Perfil" 
								labelStyle={{color: isDarkTheme ? 'white' : '#202020' }}
								onPress={() => {props.navigation.navigate('Login')}} 
							/>
							<DrawerItem 
								icon={({color, size}) =>
									<Icon
										name="briefcase"
										color={!isDarkTheme ? color : 'white'}
										size={size}
									/>}
								label="Meus Serviços" 
								labelStyle={{color: isDarkTheme ? 'white' : '#202020' }}
								onPress={() => {props.navigation.navigate('Login')}} 
							/>
							<DrawerItem 
								icon={({color, size}) =>
									<Icon
										name="format-list-bulleted"
										color={!isDarkTheme ? color : 'white'}
										size={size}
									/>}
								label="Categorias" 
								labelStyle={{color: isDarkTheme ? 'white' : '#202020' }}
								onPress={() => {props.navigation.navigate('Login')}} 
							/>
							<DrawerItem 
								icon={({color, size}) =>
									<Icon
										name="star-circle"
										color={!isDarkTheme ? color : 'white'}
										size={size}
									/>}
								label="Planos Lucti" 
								labelStyle={{color: isDarkTheme ? 'white' : '#202020' }}
								onPress={() => {props.navigation.navigate('Login')}} 
							/>
						</Drawer.Section>
						<Drawer.Section title="Preferências">
							<TouchableRipple onPress={() => {toggleTheme()}}>
								<View style={styles.preference}>
									<Text>Tema Noturno</Text>
									<View pointerEvents="none">
										<Switch value={isDarkTheme}/>
									</View>
								</View>
							</TouchableRipple>
						</Drawer.Section>
					</View>
				</DrawerContentScrollView>
				<Drawer.Section style={styles.bottomDrawerSection}>
					<DrawerItem 
						icon={({color, size}) => 
							<Icon
								name="exit-to-app"
								color={!isDarkTheme ? color : 'white'}
								size={size}
							/>
						}
						label={user ? "Desconectar" : "Conectar"}
						labelStyle={{color: isDarkTheme ? 'white' : '#202020' }}
						onPress={() => {user ? signOutHandle() : props.navigation.navigate('Login')}}
					/>
				</Drawer.Section>
			</View>
		</PaperProvider>
    );
}

const darkTheme = {
	...DarkTheme,
	roundness: 2,
	colors: {
	  ...DarkTheme.colors,
	  primary: '#3B5C2F',
	  accent: '#76AB82',
	},
};

const defaultTheme = {
	...DefaultTheme,
	roundness: 2,
	colors: {
		...DefaultTheme.colors,
		primary: '#3B5C2F',
		accent: '#76AB82',
	},
};

const styles = StyleSheet.create({
	drawerContent: {
		flex: 1
	},
	userInfoSection: {
		alignItems: 'center',
	},
	title: {
		fontSize:18,
		marginTop: 3,
		fontWeight: 'bold',
	},
	caption: {
		fontSize: 14,
		lineHeight: 14,
	},
	row: {
		marginTop: 20,
		flexDirection: 'row',
		alignItems: 'center',
	},
	section: {
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 15,
	},
	paragraph: {
		fontWeight: 'bold',
		marginRight: 3,
	},
	drawerSection: {
		marginTop: 15,
	},
	bottomDrawerSection: {
		marginBottom: 15,
		borderTopColor: '#44644B',
		borderTopWidth: 1
	},
	preference: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 12,
		paddingHorizontal: 16,
	},
});