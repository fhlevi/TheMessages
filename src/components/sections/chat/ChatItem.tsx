import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Avatar from '@src/components/commons/Avatar';
import tw from '@root/tailwind';

interface IChatItem {
  onClick?: () => void;
  item?: any;
}

export default function ChatItem({ onClick, item }: IChatItem) {
  return (
    <TouchableOpacity 
      style={tw('flex-row justify-between items-center mb-[17px]')}
      onPress={onClick}>
      <View style={tw('flex-row')}>
        <Avatar />
        <View style={tw('justify-center ml-4')}>
          <Text className="text-zinc-800 text-[17px] font-medium">
            {item?.name}
          </Text>
          <Text className="text-zinc-500 text-sm font-normal">
            {item?.lastMessage}
          </Text>
        </View>
      </View>
      <View>
        <Text className=" text-zinc-500 text-sm font-normal">9:23</Text>
      </View>
    </TouchableOpacity>
  );
}
