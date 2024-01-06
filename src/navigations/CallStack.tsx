import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import addCallStack from './shared/Call';

interface ICallStack {}

const Stack = createStackNavigator();

function CallStack({}: ICallStack) {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {addCallStack(Stack)}
    </Stack.Navigator>
  );
}

export default CallStack;
