import {firebaseDatabase, firebaseAuth} from '../Firebase/firebase';
import AsyncStorage from '@react-native-community/async-storage';

export default class FirebaseService {
    static getDataList = (nodePath, callback, size = 10) => {

        let query = firebaseDatabase.ref(nodePath).limitToLast(size);
        query.on('value', dataSnapshot => {
            let items = [];
            dataSnapshot.forEach(childSnapshot => {
                let item = childSnapshot.val();
                item['key'] = childSnapshot.key;
                items.push(item);
            });
            callback(items);
        });

        return query;
    };
    static getEmpresas(){
        let query = firebaseDatabase.ref('/empresas')
    }
    static createUser(user){
        console.log(user);
        var key = firebaseDatabase.ref('/users').push().key;
        firebaseDatabase.ref('/users').child(key).set(user);
    };

    static createAuthUser(user){
        try {
            firebaseAuth.createUserWithEmailAndPassword(user.login.email, user.login.password)
            .then(
                response => { 
                    alert("Você receberá um email em instantes para validar seu cadastro")
                    firebaseAuth.currentUser.sendEmailVerification().then(
                           ()=>{
                               console.log(user)
                               var key = firebaseDatabase.ref('/users').push().key;
                               firebaseDatabase.ref('/users').child(key).set(user);
                        }
                    )  
               }
            ).catch(err => {
                    alert(err)
            });
        } catch (error) {
             alert(error)
        }
    }

    static async loginUser(email, password){
        try {
            const user = await firebaseAuth.signInWithEmailAndPassword(email, password).catch(
                function(error){
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    alert(errorCode + "__"+ errorMessage +"__"+ error.toString())
                }
            )
            console.log(user)
            return user;

       } catch (error) {
           alert(error.toString())
           console.log(error.toString())
           return error;
       }
    }

    static doPasswordReset(email){
        if(email!=null){
            firebaseAuth.sendPasswordResetEmail(email).then(
                function(){
                    alert("Você receberá um email em instantes para redefinir sua senha")
                }
            )
        }else{
            alert("Email inválido")
        }
        
    } 

    static getCurrentUser() {
        return firebaseAuth.currentUser;
    }

    static signOut(){
        firebaseAuth.signOut()
        .then(() => {})
        .catch(err => console.log(err));
    }

    static async readCompanies(){
        return  firebaseDatabase.ref('/users');
    }
}