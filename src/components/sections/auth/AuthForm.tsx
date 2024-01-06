import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import AuthWrapper from '@src/components/wrappers/AuthWrapper';
import {Controller, useForm} from 'react-hook-form';

interface IAuthForm {
  onPress?: (props: any) => void;
}

const AuthForm = ({ onPress = () => {}}: IAuthForm) => {
  const {control, handleSubmit}: any = useForm();

  const onSubmit: any = (formVal: any) => {
    onPress(formVal);
  };

  return (
    <AuthWrapper
      title="Enter your phone number"
      info="Please confirm your region and enter your phone number">
      <View>
        <View className="h-[62px] px-[34px] bg-white rounded-[30px] mb-5 border border-stone-300 flex flex-row justify-start items-center">
          <Image source={require('@src/assets/images/world.png')} />
          <Text className="text-zinc-800 text-lg font-medium ml-3">
            Indonesia (+62)
          </Text>
        </View>
        <Controller
          control={control}
          render={({ field: { onChange, value } }: any) => (
            <View className="h-[62px] border border-stone-300 rounded-[30px] px-[34px] flex flex-row justify-start items-center">
              <Image source={require('@src/assets/images/phone.png')} />
              <View className="w-[29px] rotate-90 border-t border-black"></View>
              <TextInput
                value={value}
                className="w-full text-base"
                keyboardType="numeric"
                onChangeText={(text) => onChange(text)}
              />
            </View>
          )}
          name="phoneNumber"
        />
        <TouchableOpacity
          className="mt-9 h-[62px] bg-zinc-800 rounded-[30px] justify-center items-center"
          onPress={handleSubmit(onSubmit)}>
          <Text className="text-white text-lg font-medium">Continue</Text>
        </TouchableOpacity>
      </View>
    </AuthWrapper>
  );
};

export default AuthForm;
