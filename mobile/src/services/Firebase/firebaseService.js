import {firebaseDatabase, firebaseAuth} from '../Firebase/firebase'

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
    static createUser = (user) => {
        var key = firebaseDatabase.ref('/users').push().key;
        firebaseDatabase.ref('/users').child(key).set(user);
    };
    static createAuthUser(email,senha){
        try {
            firebaseAuth.createUserWithEmailAndPassword(email,senha)
            .then(
                doSendEmailVerification = () =>{
                    firebaseAuth.currentUser.sendEmailVerification({
                        url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
                    })
                }
            );
        } catch (error) {
            
        }
    }
    static loginUser(email,senha){
        try {
            firebaseAuth.signInWithEmailAndPassword(email,senha).then(
                function(user){
                    alert("usario de email " + user.user.email + " está logado");
                }
            ).catch(
                function(response){
                    alert(response);
                }
            );
       } catch (error) {
           console.log(error.toString())
       }
    }
}
/*let jsonUser= {
    dados:{
         cnpj:"556565656"
    },
    endereco:{
         rua:"ceara",
         bairro:"luzia augusta"
    },
    login:{
         email:"bebeto@gmail.com",  
    }

 }*/