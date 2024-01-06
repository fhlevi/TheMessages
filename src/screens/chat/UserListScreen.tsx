import { View, Text, TextInput, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import WithoutSearchWrapper from '@src/components/wrappers/WithoutSearchWrapper'
import ChatItem from '@src/components/sections/chat/ChatItem';
import UserService from '@src/services/UserService';
import { useAuthStore } from '@src/store';
import ChatService from '@src/services/ChatService';
import uuid from 'react-native-uuid';
import WithSearchWrapper from '@src/components/wrappers/WithSearchWrapper';

const items = [
  {
    id: 1,
    name: 'test'
  },
  {
    id: 2,
    name: 'test'
  },
]

export default function UserListScreen({navigation}: any) {
  const [allUser, setAllUser] = useState<any[]>([])

  const authentication: any = useAuthStore((state) => state.authentication);
  const userService = new UserService();
  const chatService = new ChatService();

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () => {
    userService.getAllUser((res: any) => {
      const usersList = Object.values(res)

      setAllUser(usersList.filter((it: any) => it.id !== authentication.id))
    });
  };

  const createChatList: any = (data: any): void => {
    chatService.getChatUserListChatScreenBySenderAndReceiverId(authentication.id, data?.id, (res: any) => {
      if (!res || res === null) {
        const roomId = uuid.v4();

        const payload = {
          roomId,
          id: authentication.id,
          name: authentication.name,
          phone: authentication.phone, 
          lastMessage: ''
        }

        chatService.generateUserChat({
          receiverId: data?.id, 
          senderId: authentication.id,  
          ...payload
        })

        delete data['password'];
        data.lastMessage = '';
        data.roomId = roomId;

        chatService.generateUserChat({
          receiverId: authentication.id, 
          senderId: data?.id,  
          ...data
        })

        navigation.navigate('RoomMessages', {data})
      } else {
        navigation.navigate('RoomMessages', {data: res})
      }
    })
  }

  return (
    <WithSearchWrapper 
      title="New Chat" 
      titleClassName="text-[20px] font-semibold"
    >
      {/* <TextInput 
          className="bg-gray-100 rounded-lg mt-2 px-4"
          placeholder="Search name or number"
        /> */}
      <FlatList 
        data={allUser}
        className='px-7 pt-4 mb-4'
        renderItem={({item}: any) => (
          <View className="flex-col">
            <ChatItem item={item} onClick={() => createChatList(item)} />
          </View>
        )}
        keyExtractor={(item: any) => item?.id}
      />
    </WithSearchWrapper>
  )
}