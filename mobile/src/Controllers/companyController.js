import {firebaseDatabase, firebaseAuth} from '../services/Firebase/firebase';


export default class CompanyController {
    static async readCompanies(){
        return  firebaseDatabase.ref('/users');
    }
}