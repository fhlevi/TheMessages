import database from '@react-native-firebase/database';

class ChatRepository {
    createUserChat({ receiverId, senderId, ...payload }: any) {
        database()
            .ref(`/chatlist/${receiverId}/${senderId}`)
            .update(payload)
    }
    async getUserChatBySenderId(senderId: any, callback: any) {
        database()
            .ref(`/chatlist/${senderId}`)
            .on('value', snapshot => {
                callback(snapshot.val())
            })
    } 
    getUserChatBySenderAndReceiverId(senderId:any, receiverId:any, callback:any) {
        database()
            .ref(`/chatlist/${senderId}/${receiverId}`)
            .once('value')
            .then(snapshot => {
                callback(snapshot.val())
            });
    }
    createMessageData(data: any) {
        return database().ref(`/messages/${data.roomId}`).push()
    }
    beginListeningMessageByRoomId(data: any, setMessageList: any) {
        return database()
            .ref(`/messages/${data.roomId}`)
            .on('child_added', snapshot => {
                setMessageList((state: any) => [snapshot.val(), ...state])
            });
    }
    endListeningMessageByRoomId(data: any, onChildAdd: any) {
        return database().ref(`/messages/${data.roomId}`).off('child_added', onChildAdd);
    }
}

export default ChatRepository;