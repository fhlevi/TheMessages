import { View, Text, Image } from 'react-native';
import React from 'react';
import clsx from 'clsx';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface IWSWrapper {
    childComponent?: React.ReactNode;
    children?: React.ReactNode;
    titleClassName?: string;
    title?: string
}

export default function WithMoreDetailWrapper({
    title,
    childComponent,
    children,
    titleClassName = 'text-[28px]',
}: IWSWrapper) {
    return (
        <View className="h-full bg-white flex-1">
            <View className="py-[12px] px-7 flex-row justify-between items-center border-b border-zinc-400">
                <AntDesign name="left" size={26} style={{color: 'black'}} />
                {childComponent ?? (
                    <Text
                        className={clsx(
                            'text-center text-zinc-800 font-medium',
                            titleClassName,
                        )}>
                        {title}
                    </Text>
                )}
                <Image source={require('@src/assets/images/icons/more.png')} />
            </View>
            {children}
        </View>
    );
}
