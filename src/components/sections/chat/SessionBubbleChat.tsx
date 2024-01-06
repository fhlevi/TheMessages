import {View, Text} from 'react-native';
import React from 'react';
import clsx from 'clsx';
import { TmessageItem } from '@src/utils/types/RoomChat';
import moment from 'moment';

interface ISessionBubbleChat {
  item: TmessageItem;
  auth: any;
}

export default function SessionBubbleChat({item, auth}: ISessionBubbleChat) {
  const {from = "", message = "", sendTime = ""}: TmessageItem = item || {};

  const isLeftBubble = from === auth.id;

  return (
    <View
      className={clsx(
        'flex-col justify-center items-start mt-4',
        isLeftBubble && 'items-end',
      )}>
      <View className="p-4 bg-gray-200 rounded-2xl">
        <Text className="text-right text-zinc-800 text-[17px] font-medium">
          {message}
        </Text>
      </View>
      <Text className="text-stone-400 text-[17px] font-normal mt-2.5">{moment(sendTime).format('HH:mm')}</Text>
    </View>
  );
}
