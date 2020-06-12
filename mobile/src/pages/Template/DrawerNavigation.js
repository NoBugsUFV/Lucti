import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props) {

	const [isDarkTheme, setIsDarkTheme] = React.useState(false);

	const toggleTheme = () => {
		setIsDarkTheme(!isDarkTheme);
	}

    return (
        <View style={{flex: 1}}>
			<DrawerContentScrollView {...props}>
				<View style={styles.drawerContent}>
					<View style={styles.userInfoSection}>
						<View style={{flexDirection:'row', marginTop:15}}>
							<Avatar.Image 
								source={{uri: 'https://avatars1.githubusercontent.com/u/48305873?s=460&u=126b48eeffc0c682c658c9077cfffb55c2b22b2b&v=4'}}
								size={50}
							/>
							<View style={{marginLeft: 15, flexDirection: 'column'}}>
								<Title style={styles.title}>Júlio Alves</Title>
								<Caption style={styles.caption}>@jknvlvxs</Caption>
							</View>
						</View>
						{/* <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>777</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>777</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View> */}
					</View>
					<Drawer.Section style={styles.drawerSection} title="Projetos das Aulas">
						<DrawerItem 
							icon={({color, size}) =>
								<Icon
									name="drawing-box"
									color={color}
									size={size}
								/>}
							label="FlexBox (Círculos)" 
							onPress={() => {props.navigation.navigate('FlexBox')}} 
						/>
						<DrawerItem 
							icon={({color, size}) =>
								<Icon
									name="account-multiple"
									color={color}
									size={size}
								/>}
							label="Estudantes (Native)" 
							onPress={() => {props.navigation.navigate('StudentsList')}} 
						/>
						<DrawerItem 
							icon={({color, size}) =>
								<Icon
									name="account-multiple"
									color={color}
									size={size}
								/>}
							label="Estudantes (Paper)" 
							onPress={() => {props.navigation.navigate('StudentsListPaper')}} 
						/>
						<DrawerItem 
							icon={({color, size}) =>
								<Icon
									name="subdirectory-arrow-left"
									color={color}
									size={size}
								/>}
							label="Comunicação Indireta" 
							onPress={() => {props.navigation.navigate('Callback')}} 
						/>
						<DrawerItem 
							icon={({color, size}) =>
								<Icon
									name="subdirectory-arrow-right"
									color={color}
									size={size}
								/>}
							label="Comunicação Direta" 
							onPress={() => {props.navigation.navigate('DirectCommunication')}} 
						/>
						<DrawerItem 
							icon={({color, size}) =>
								<Icon
									name="rotate-orbit"
									color={color}
									size={size}
								/>}
							label="Eventos" 
							onPress={() => {props.navigation.navigate('Events')}} 
						/>
						<DrawerItem 
							icon={({color, size}) =>
								<Icon
									name="account-check-outline"
									color={color}
									size={size}
								/>}
							label="Validar Propriedades" 
							onPress={() => {props.navigation.navigate('ValidateProperties')}} 
						/>
						<DrawerItem 
							icon={({color, size}) =>
								<Icon
									name="cellphone"
									color={color}
									size={size}
								/>}
							label="Plataformas" 
							onPress={() => {props.navigation.navigate('Platforms')}} 
						/>
						<DrawerItem 
							icon={({color, size}) =>
								<Icon
									name="format-list-numbered"
									color={color}
									size={size}
								/>}
							label="Contador" 
							onPress={() => {props.navigation.navigate('Counter')}} 
						/>
						<DrawerItem 
							icon={({color, size}) =>
								<Icon
									name="numeric-6-circle"
									color={color}
									size={size}
								/>}
							label="Mega Sena" 
							onPress={() => {props.navigation.navigate('MegaSena')}} 
						/>
						<DrawerItem 
							icon={({color, size}) =>
								<Icon
									name="alphabetical"
									color={color}
									size={size}
								/>}
							label="Inverter Texto" 
							onPress={() => {props.navigation.navigate('Reverse')}} 
						/>
						<DrawerItem 
							icon={({color, size}) =>
								<Icon
									name="numeric"
									color={color}
									size={size}
								/>}
							label="Par ou Ímpar" 
							onPress={() => {props.navigation.navigate('EvenOdd')}} 
						/>
						<DrawerItem 
							icon={({color, size}) =>
								<Icon
									name="alphabetical"
									color={color}
									size={size}
								/>}
							label="Texto Simples" 
							onPress={() => {props.navigation.navigate('Simple')}} 
						/>
					</Drawer.Section>
					{/* <Drawer.Section title="Preferences">
						<TouchableRipple onPress={() => {toggleTheme()}}>
							<View style={styles.preference}>
								<Text>Dark Theme</Text>
								<View pointerEvents="none">
									<Switch value={isDarkTheme}/>
								</View>
							</View>
						</TouchableRipple>
					</Drawer.Section> */}
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
		flex: 1,
	},
	userInfoSection: {
		paddingLeft: 20,
	},
	title: {
		fontSize: 16,
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
		borderTopColor: '#f4f4f4',
		borderTopWidth: 1
	},
	preference: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 12,
		paddingHorizontal: 16,
	},
});