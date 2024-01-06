import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import addContactStack from './shared/Contact';

interface IContactStack {}

const Stack = createStackNavigator();

function ContactStack({}: IContactStack) {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {addContactStack(Stack)}
    </Stack.Navigator>
  );
}

export default ContactStack;
