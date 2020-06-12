import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Avatar, Title, Caption, Drawer, Text, TouchableRipple, Switch} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props) {
	const [isDarkTheme, setIsDarkTheme] = React.useState(false);

	const toggleTheme = () => {
		setIsDarkTheme(!isDarkTheme);
	}
    return (
        <View style={{flex: 1, backgroundColor: '#EEEEEE', borderBottomRightRadius: 50, borderTopRightRadius: 50}}>
			<DrawerContentScrollView {...props}>
				<View style={styles.drawerContent}>
					<View style={styles.userInfoSection}>
						<View style={{flexDirection:'column', alignItems: 'center', marginTop:15}}>
							<Avatar.Image 
								source={{uri: 'https://avatars3.githubusercontent.com/u/62998385?s=200&v=4'}}
								size={100}
							/>
							<View style={{flexDirection: 'column', alignItems: 'center'}}>
								<Title style={styles.title}>Gubson Silva</Title>
								<Caption style={styles.caption}>02.560.116/0001-00</Caption>
							</View>
						</View>
					</View>
					<Drawer.Section style={styles.drawerSection}>
						<DrawerItem 
							icon={({color, size}) =>
								<Icon
									name="home"
									color={color}
									size={size}
								/>}
							label="Home" 
							onPress={() => {props.navigation.navigate('Home')}} 
						/>
						<DrawerItem 
							icon={({color, size}) =>
								<Icon
									name="account"
									color={color}
									size={size}
								/>}
							label="Perfil" 
							onPress={() => {props.navigation.navigate('StudentsList')}} 
						/>
						<DrawerItem 
							icon={({color, size}) =>
								<Icon
									name="briefcase"
									color={color}
									size={size}
								/>}
							label="Meus Serviços" 
							onPress={() => {props.navigation.navigate('StudentsListPaper')}} 
						/>
						<DrawerItem 
							icon={({color, size}) =>
								<Icon
									name="format-list-bulleted"
									color={color}
									size={size}
								/>}
							label="Categorias" 
							onPress={() => {props.navigation.navigate('Callback')}} 
						/>
						<DrawerItem 
							icon={({color, size}) =>
								<Icon
									name="star-circle"
									color={color}
									size={size}
								/>}
							label="Planos Lucti" 
							onPress={() => {props.navigation.navigate('DirectCommunication')}} 
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
							color={color}
							size={size}
						/>
					}
					label="Desconectar" 
					onPress={() => {}} 
				/>
			</Drawer.Section>
        </View>
    );
}

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