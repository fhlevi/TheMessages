import React from 'react';
import LoginScreen from '@src/screens/auth/LoginScreen';
import OTPScreen from '@src/screens/auth/OTPScreen';
import CreateUsernameScreen from '@src/screens/auth/CreateUsernameScreen';

interface IAuth {
  Screen: any;
}

export default function addAuthStack(Stack: IAuth) {
  return (
    <>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="OTP" component={OTPScreen} />
      <Stack.Screen name="CreateUsername" component={CreateUsernameScreen} />
    </>
  );
}
