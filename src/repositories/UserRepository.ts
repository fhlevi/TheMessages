import database from '@react-native-firebase/database';

class UserRepository {
    async getUserAccount({ phoneNumber }: any, callback: any) {
        database()
            .ref('/users/')
            .orderByChild('phone')
            .equalTo(phoneNumber)
            .once('value')
            .then(snapshot => {
                callback(snapshot.val())
            });
    } 
    getAllUserAccount(callback: any) {
        database()
            .ref('/users/')
            .once('value')
            .then(snapshot => {
                callback(snapshot.val())
            });
    }
}

export default UserRepository;