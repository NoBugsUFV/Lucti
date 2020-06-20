import {firebaseDatabase, firebaseAuth} from '../Firebase/firebase';


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
    static createUser(user){
        console.log(user);
        var key = firebaseDatabase.ref('/users').push().key;
        firebaseDatabase.ref('/users').child(key).set(user);
    };

    static createAuthUser(user){
        try {
            firebaseAuth.createUserWithEmailAndPassword(user.login.email,user.login.senha)
            .then(
                function(response){ 
                    alert("Você receberá um email em instantes para validar seu cadastro")
                    firebaseAuth.currentUser.sendEmailVerification().then(
                           ()=>{
                               console.log(user)
                               var key = firebaseDatabase.ref('/users').push().key;
                               firebaseDatabase.ref('/users').child(key).set(user);
                        }
                    )
                    .catch(
                        function (params) {
                            alert("Algo de errado aconteceu")
                        }
                    )
                        
               }
            ).catch(
                function name(params) {
                    alert(params)
                }
            );
        } catch (error) {
            alert(error)
        }
    }
    static async loginUser(email,senha){
        try {
            firebaseAuth.signInWithEmailAndPassword(email,senha).then(
                function(response){
                    //alert("usario de email está logado");

                }
            ).catch(
                function(response){
                    alert(response);
                }
            );
       } catch (error) {
           console.log(error.toString())
       }
       return firebaseAuth.currentUser;
       
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
}