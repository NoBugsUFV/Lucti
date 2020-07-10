import {firebaseDatabase, firebaseAuth} from '../services/Firebase/firebase';

export default class CompanyController {

    static async readCompanies(){
        return  firebaseDatabase.ref('/users');
    }

    static async getDataList (nodePath, callback, size = 10) {
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
}