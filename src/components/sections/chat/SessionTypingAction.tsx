import {View, TouchableOpacity, Image, TextInput} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import clsx from 'clsx';
import { Controller, useForm } from 'react-hook-form';
import tw from '@root/tailwind';
import { ios } from '@src/constants/platform';

export default function SessionTypingAction({onPress}: any) {  
  const {control, handleSubmit, setValue}: any = useForm();

  const onSubmit = (formVal: any) => {
    onPress(formVal)
    setValue('message', '');
  }
  
  return (
    <View style={tw('px-9 flex-row bg-white items-center border-t border-zinc-400', ios ? 'py-[21px]' : 'py-3')}>
      <TouchableOpacity className="mr-[21px]">
        <Image style={tw('w-6 h-6')} source={require('@src/assets/images/room-chat/sticker.png')} />
      </TouchableOpacity>
      
      <Controller 
        control={control}
        render={({ field: { onChange, value } }: any) => (
          <TextInput
            value={value}
            style={tw('w-3/4')}
            placeholder="Type a message"
            onChangeText={text => onChange(text)}
            multiline
          />
        )}
        name="message"
      />

      <TouchableOpacity 
        className="mx-[21px]"
        onPress={handleSubmit(onSubmit)}>
        <Feather name="send" size={20} style={{color: 'black'}} />
      </TouchableOpacity>

      {/* {!msg ? (
        <>
          <TouchableOpacity className="mx-[21px]">
            <Image
              source={require('@src/assets/images/room-chat/document.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity className="mr-[21px]">
            <Image
              source={require('@src/assets/images/room-chat/camera.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity className="mr-[21px]">
            <Image
              source={require('@src/assets/images/room-chat/microphone2.png')}
            />
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity 
          className="mx-[21px]"
          onPress={onPress}>
          <Feather name="send" size={20} style={{color: 'black'}} />
        </TouchableOpacity>
      )} */}
    </View>
  );
}
