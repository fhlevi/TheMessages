import {View, ScrollView, FlatList} from 'react-native';
import React, { useEffect, useState } from 'react';
import WithSearchWrapper from '@src/components/wrappers/WithSearchWrapper';
import ChatItem from '@src/components/sections/chat/ChatItem';
import ButtonFloating from '@src/components/commons/ButtonFloating';
import { useAuthStore } from '@src/store';
import ChatService from '@src/services/ChatService';
import tw from '@root/tailwind';

interface IChatScreen {
  navigation: any;
};

const ChatScreen = ({navigation}: IChatScreen) => {
  const [chatList, setChatList] = useState<any[]>([])

  const authentication: any = useAuthStore((state) => state.authentication);
  const chatService = new ChatService();
  
  const roomChatRedirect = (item: any) => {
    navigation.navigate('RoomMessages', {data: item})
  }

  const onPressButton = () => {
    navigation.navigate('UserLists')
  }

  useEffect(() => {
    getUserChatWithSenderId();
  }, []);

  const getUserChatWithSenderId = () => {
    chatService.getChatUserListBySenderId(authentication?.id, (res: any) => {
      if (res) {
        setChatList(Object.values(res))
      }
    });
  };

  return (
    <WithSearchWrapper title="Messages">
      <FlatList
        data={chatList}
        style={tw('px-6 pt-4 mb-4')}
        renderItem={({item}: any) => (
          <ChatItem item={item} onClick={() => roomChatRedirect(item)} />
        )}
        keyExtractor={(item: any) => item?.id}
      >
      </FlatList>
      <ButtonFloating type="chat" onPress={onPressButton} />
    </WithSearchWrapper>
  );
};

export default ChatScreen;
