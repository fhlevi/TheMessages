import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import AuthForm from '@src/components/sections/auth/AuthForm';
import { useAuthStore } from '@src/store';
import UserService from '@src/services/UserService';

interface ILoginScreen {
  navigation: any;
}

function LoginScreen({navigation}: ILoginScreen) {
  const setAuth: any = useAuthStore((state) => state.setAuth);
  const authentication: any = useAuthStore((state) => state.authentication);

  const userService = new UserService();

  const onSubmit = (formVal: any) => {
    userService.getUser(formVal, (response: any) => {
      const data: any = Object.values(response)[0];

      if (data) {
        setAuth({
          ...data,
          isAuthenticated: true
        });

        navigation.navigate('AppTabs', {screen: 'ChatStack'})
        return false;
      }

      setAuth({
        ...authentication,
        ...formVal
      })

      navigation.navigate('AuthStack', {screen: 'CreateUsername'});
    })
  }

  return (
    <ScrollView>
      <AuthForm 
        onPress={onSubmit} 
      />
    </ScrollView>
  );
}

export default LoginScreen;
