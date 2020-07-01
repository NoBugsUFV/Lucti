import {firebaseDatabase, firebaseAuth} from '../services/Firebase/firebase';


export default class CompanyController {
    static async readCompanies(){
        return  firebaseDatabase.ref('/users').then(ref => {
            ref.on('value', querySnapShot => {
                let data = querySnapShot.val() ? querySnapShot.val() : {};
                let todoItems = {...data};
                console.log(data)
            });
        });
    }
}