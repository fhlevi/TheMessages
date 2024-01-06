import {View, Text, Image} from 'react-native';
import React from 'react';
import clsx from 'clsx';

interface IWSWrapper {
  title: string;
  children?: React.ReactNode;
  titleClassName?: string;
}

export default function WithSearchWrapper({
  title,
  children,
  titleClassName = 'text-[28px]',
}: IWSWrapper) {
  return (
    <View className="h-full bg-white">
      <View className="py-[22px] px-7 flex-row justify-between items-center border-b border-zinc-400">
        <Text
          className={clsx(
            'text-center text-zinc-800 font-medium',
            titleClassName,
          )}>
          {title}
        </Text>
        <Image source={require('@src/assets/images/icons/searchnormal1.png')} />
      </View>
      {children}
    </View>
  );
}
