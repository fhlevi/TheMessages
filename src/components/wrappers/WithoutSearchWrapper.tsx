import {View, Text, Image} from 'react-native';
import React from 'react';
import clsx from 'clsx';

interface IWoSWrapper {
  title?: string;
  children?: React.ReactNode;
  titleClassName?: string;
  headerClassName?: string;
  headerChildren?: React.ReactNode;
}

export default function WithoutSearchWrapper({
  title,
  children,
  titleClassName = 'text-[28px] justify-between items-center',
  headerClassName = 'flex-row',
  headerChildren,
}: IWoSWrapper) {
  return (
    <View className="h-full min-h-screen bg-white">
      <View
        className={clsx(
          'py-[22px] px-7 border-b border-zinc-400',
          headerClassName,
        )}>
        <Text className={clsx('text-zinc-800 font-medium', titleClassName)}>
          {title}
        </Text>
        {headerChildren}
      </View>
      {children}
    </View>
  );
}
