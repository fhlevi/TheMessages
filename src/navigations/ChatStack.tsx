import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import addChatStack from './shared/Chat';

interface IChatStack {}

const Stack = createStackNavigator();

function ChatStack({}: IChatStack) {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {addChatStack(Stack)}
    </Stack.Navigator>
  );
}

export default ChatStack;
