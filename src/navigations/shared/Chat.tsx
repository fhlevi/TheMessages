import React from 'react';
import ChatScreen from '@src/screens/chat/ChatScreen';
import RoomChatScreen from '@src/screens/chat/RoomChatScreen';
import UserListScreen from '@src/screens/chat/UserListScreen';

interface IChat {
  Screen: any;
}

export default function addChatStack(Stack: IChat) {
  return (
    <>
      <Stack.Screen 
        name="Messages" 
        component={ChatScreen} 
      />
      <Stack.Screen 
        name="RoomMessages" 
        component={RoomChatScreen} 
      />
      <Stack.Screen 
        name="UserLists" 
        component={UserListScreen} 
      />
    </>
  );
}
