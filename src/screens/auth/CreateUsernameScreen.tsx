import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import AuthWrapper from '@src/components/wrappers/AuthWrapper';
import { useAuthStore } from '@src/store';
import { Controller, useForm } from 'react-hook-form';
import uuid from 'react-native-uuid';
import AuthService from '@src/services/AuthService';
import UserService from '@src/services/UserService';

interface ICUsernameScreen {
  navigation?: any;
}

const CreateUsernameScreen: React.FC<ICUsernameScreen> = ({navigation}) => {
  const setAuth: any = useAuthStore((state) => state.setAuth);
  const authentication: any = useAuthStore((state) => state.authentication);

  const authService = new AuthService();
  const userService = new UserService();

  const {control, handleSubmit}: any = useForm();

  const onSubmit = (formVal: any) => {
    const payload = {
      id: uuid.v4(),
      name: formVal.fullName,
      phone: authentication.phoneNumber,
    }

    authService.createUser(payload)

    userService.getUser(authentication, (response: any) => {
      const data: any = Object.values(response)[0];

      setAuth({
        ...data,
        isAuthenticated: true
      });
    })

    navigation.navigate('AppTabs', {screen: 'ChatStack'})
  }

  return (
    <ScrollView>
      <AuthWrapper
        title="Create your name"
        info="Get more people to know your name">
        <View>
          <Controller 
            control={control}
            render={({field: { onChange, value }}) => (
              <View className="h-[62px] border border-stone-300 rounded-[30px] px-[34px] flex flex-row justify-start items-center">
                <Image source={require('@src/assets/images/profile.png')} />
                <View className="w-[29px] rotate-90 border-t border-black"></View>
                <TextInput 
                  className="w-full text-base"
                  value={value}
                  onChangeText={onChange}
                />
              </View>
            )}
            name="fullName"
          />
          <TouchableOpacity
            className="mt-[117px] h-[62px] bg-zinc-800 rounded-[30px] justify-center items-center"
            onPress={handleSubmit(onSubmit)}>
            <Text className="text-white text-lg font-medium">Next</Text>
          </TouchableOpacity>
        </View>
      </AuthWrapper>
    </ScrollView>
  );
};

export default CreateUsernameScreen;
