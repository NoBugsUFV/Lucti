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
        console.log(user)
        jsonUser= {
            dados:{
                 cnpj:"556565656"
            },
            endereco:{
                 rua:"ceara",
                 bairro:"luzia augusta"
            },
            login:{
                 email:"bebeto@gmail.com",  
            }};
        var key = firebaseDatabase.ref('/users').push().key;
        firebaseDatabase.ref('/users').child(key).set(jsonUser);
    };
    /*.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return this.props.firebase.user(authUser.user.uid).set({
          username,
          email,
          roles,
        });
      })
      .then(() => {
        return this.props.firebase.doSendEmailVerification();
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        ...
      });*/
      /*function signUpUser(){
        
        try {
             if(senha < 6){
                 alert("Por favor informe uma senha com mais de 6");
                 return;
             }
             firebaseService.createAuthUser(email,senha);
        } catch (error) {
            console.log(error.toString());
        }
  
      }*/


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