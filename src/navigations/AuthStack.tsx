import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import addAuthStack from './shared/Auth';

interface IAuthStack {}

const Stack = createStackNavigator();

function AuthStack({}: IAuthStack) {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {addAuthStack(Stack)}
    </Stack.Navigator>
  );
}

export default AuthStack;
