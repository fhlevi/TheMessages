import database from '@react-native-firebase/database';

class AuthRepository {
    createUserAccount({ id, ...payload }: any) {
        database()
            .ref(`/users/${id}`)
            .set({id, ...payload})
            .then(() => console.log('Data set.'));
    }
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

export default AuthRepository;