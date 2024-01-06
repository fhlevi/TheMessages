import ChatRepository from "@src/repositories/ChatRepository";

class ChatService {
    private chatRepository:ChatRepository;

    constructor(){
        this.chatRepository = new ChatRepository()
    }

    generateUserChat({ receiverId, senderId, ...payload }: any) {
        this.chatRepository.createUserChat({receiverId, senderId, ...payload});
    }
    getChatUserListBySenderId(senderId:any, callback:any) {
        this.chatRepository.getUserChatBySenderId(senderId, (res: any) => {
            callback(res);
        })
    }
    getChatUserListChatScreenBySenderAndReceiverId(senderId:any, receiverId:any, callback:any) {
        this.chatRepository.getUserChatBySenderAndReceiverId(senderId, receiverId, (res: any) => {
            callback(res);
        });
    }
    generateMessageData(data: any) {
        const newReference = this.chatRepository.createMessageData(data);

        data.id = newReference.key;

        this.setMessageData(data, newReference);
    }
    setMessageData(data: any, newReference: any) {
        newReference
            .set(data)
            .then(() => {
                const chatListUpdate = {
                    lastMessage: data?.message,
                    sendTime: data?.sendTime
                }

                this.generateUserChat({
                    receiverId: data?.to, 
                    senderId: data?.from,  
                    ...chatListUpdate
                })

                this.generateUserChat({
                    receiverId: data?.from, 
                    senderId: data?.to,  
                    ...chatListUpdate
                })
            });
    }
    getMessageByRoomId(data: any, setMessageList: any) {
        return this.chatRepository.beginListeningMessageByRoomId(data, setMessageList);
    }
    terminateGetMessageByRoomId(data: any, onChildAdd: any) {
        return this.chatRepository.endListeningMessageByRoomId(data, onChildAdd);
    }
}

export default ChatService;