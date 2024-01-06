import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Avatar from '@src/components/commons/Avatar';
import clsx from 'clsx';

interface IContactItem {
  contactClassName?: string;
  item?: any;
}

export default function ContactItem({ contactClassName, item }: Readonly<IContactItem>) {
  const {name = ''} = item ?? {}

  return (
    <TouchableOpacity className={clsx('flex-row mb-[17px]', contactClassName)}>
      <Avatar style="h-[53px] w-[53px]" />
      <View className="flex-row justify-between items-center w-auto ml-4">
        <View>
          <Text className="text-zinc-800 text-[17px] font-medium">
            {name}
          </Text>
          <Text className="text-zinc-500 text-sm font-normal">
            Last seen today at 8:40
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
