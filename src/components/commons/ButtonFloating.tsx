import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

interface IButtonFloating {
  type?: string;
  onPress?: () => void;
}

export default function ButtonFloating({type, onPress}: IButtonFloating) {
  let imagePath;

  switch (type) {
    case 'chat':
      imagePath = require('@src/assets/images/icons/edit2.png');
      break;
    case 'contact':
      imagePath = require('@src/assets/images/icons/useradd2.png');
      break;
    default:
      imagePath = null;
      break;
  }

  return (
    <TouchableOpacity 
      className="h-[63px] w-[63px] rounded-full bg-zinc-800 absolute bottom-[30px] right-[25px] items-center justify-center"
      onPress={onPress}>
      <View>{imagePath && <Image source={imagePath} />}</View>
    </TouchableOpacity>
  );
}
