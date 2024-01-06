import {View, Text} from 'react-native';
import React from 'react';
import tw from '@root/tailwind';

interface IAvatar {
  initital?: string;
  style?: string;
}

export default function Avatar({initital = 'AB', style}: Readonly<IAvatar>) {
  return (
    <View style={tw('w-[63px] h-[63px] bg-gray-200 rounded-full flex justify-center items-center', style)}>
      <Text className="text-center text-zinc-800 text-[21px] font-medium">
        {initital}
      </Text>
    </View>
  );
}
