import {FlatList, KeyboardAvoidingView, Platform, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import WithMoreDetailWrapper from '@src/components/wrappers/WithMoreDetailWrapper';
import ContactItem from '@src/components/sections/contact/ContactItem';
import SessionTypingAction from '@src/components/sections/chat/SessionTypingAction';
import SessionBubbleChat from '@src/components/sections/chat/SessionBubbleChat';
import { useAuthStore } from '@src/store';
import ChatService from '@src/services/ChatService';
import moment from 'moment';

interface IRChatScreen {
  navigation: any;
};

export default function RoomChatScreen({navigation, ...props}: IRChatScreen) {
  const ios = Platform.OS === 'ios';

  const [messageList, setMessageList] = useState([])
  
  const authentication: any = useAuthStore((state) => state.authentication);
  const chatService = new ChatService();

  const {route}: any = props;
  const {data}: any = route.params;

  useEffect(() => {
    setMessageList([]);

    const onChildAdd = chatService.getMessageByRoomId(data, setMessageList);
    
    return () => chatService.terminateGetMessageByRoomId(data, onChildAdd);
  }, [data.roomId]);

  const sendMessage = (formVal: any): void => {
    const payloadMessage: any = {
      roomId: data.roomId,
      message: formVal?.message,
      from: authentication?.id,
      to: data.id,
      sendTime: moment().format(),
      messageType: 'text',
    }

    chatService.generateMessageData(payloadMessage);
  }

  return (
    <>
      <WithMoreDetailWrapper
        childComponent={<ContactItem item={data} contactClassName="mb-0" />}>
        <FlatList
          data={messageList}
          inverted
          renderItem={({item}) => (
            <SessionBubbleChat item={item} auth={authentication} />
          )}
          keyExtractor={item => item?.id}
          className="px-7 py-2"
        />
        <KeyboardAvoidingView
          keyboardVerticalOffset={24}
          behavior="padding"
          enabled={ios}>
          <SessionTypingAction onPress={sendMessage} />
        </KeyboardAvoidingView>
      </WithMoreDetailWrapper>
    </>
  );
}
