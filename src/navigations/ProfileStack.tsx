import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import addProfileStack from './shared/Profile';

interface IProfileStack {}

const Stack = createStackNavigator();

function ProfileStack({}: IProfileStack) {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {addProfileStack(Stack)}
    </Stack.Navigator>
  );
}

export default ProfileStack;
