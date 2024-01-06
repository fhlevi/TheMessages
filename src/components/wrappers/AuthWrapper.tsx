import {View, Text} from 'react-native';
import React from 'react';

type Props = {
  children?: React.ReactNode;
  title: string;
  info: string;
};

const AuthWrapper = ({children, title, info}: Props) => {
  return (
    <View className="px-[38px] flex flex-col pt-20 bg-white h-screen gap-12">
      <View className="flex flex-col gap-5">
        <Text className="text-black text-2xl font-medium text-center">
          {title}
        </Text>
        <Text className="text-center text-neutral-400 text-lg font-normal">
          {info}
        </Text>
      </View>
      {children}
    </View>
  );
};

export default AuthWrapper;
