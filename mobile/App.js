import React, { useEffect } from 'react';
import './src/routes';
import { YellowBox, View, ActivityIndicator } from 'react-native';
import Routes from './src/routes';
import { AuthContext } from './components/context'
import userController from './src/Controllers/userController';
import AsyncStorage from '@react-native-community/async-storage';

export default function App() {
	YellowBox.ignoreWarnings(['Setting a timer']);

	const initialLoginState = {
		isLoading: true,
		userName: null,
		userToken: null
	}

	const loginReducer = (prevState, action) => {
		switch (action.type) {
			case 'RETRIEVE_TOKEN':
				return {
					...prevState,
					userToken: action.token,
					isLoading: false
				}
			case 'LOGIN':
				return {
					...prevState,
					userName: action.id,
					userToken: action.token,
					isLoading: false
				}
			case 'LOGOUT':
				return {
					...prevState,
					userName: null,
					userToken: null,
					isLoading: false
				}
			// case 'REGISTER':
			// 	return {
			// 		...prevState,
			// 		userName: action.id,
			// 		userToken: action.token,
			// 		isLoading: false
			// 	} 
		}
	}
	
	const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState)

	const authContext = React.useMemo(() => ({
		signIn: async (email, password) => {
			try {
				let userToken = await userController.loginUser(email, password);; 
				if(userToken == undefined){
					alert("Usuário ou senha incorretos")
				}else{
					if(userToken.user.emailVerified == true){
						await AsyncStorage.setItem('userToken', JSON.stringify(userToken));
						dispatch({type: 'LOGIN', id: email, token: JSON.stringify(userToken) })
					}else{
						alert("O email ainda não foi verificado")
					}
				}
			}catch(err){
				alert("Falha no login. Por favor tente mais tarde")
			}
		},
		signOut: async () => {
			dispatch({type: 'LOGOUT'})
			try {
				await userController.signOut()
				await AsyncStorage.removeItem('userToken')
			} catch (e) {
				console.log(e)
			}
		},
		// signUp: () => {
		// 	setUserToken('123')
		// 	setIsLoading(false)
		// },
	}), [])

	useEffect(() => {
		setTimeout(async() => {
			let userToken = null
			try {
				userToken = await AsyncStorage.getItem('userToken')
			} catch (e) {
				console.log(e)
			}
			dispatch({type: 'RETRIEVE_TOKEN', token: userToken })
		}, 1000)
	}, [])

	if(loginState.isLoading) {
		return (
			<View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
				<ActivityIndicator size='large'/>
			</View>
		)
	}

	return (
		<AuthContext.Provider value={authContext}>
			<Routes user={loginState.userToken}/>
		</AuthContext.Provider>
	);
}
