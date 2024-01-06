import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WelcomeScreen = ({navigation}: any) => {
  const handleNextStep = () => {
    AsyncStorage.setItem('isAppFirstLaunched', 'false');
    navigation.navigate('AuthStack', { screen: 'Login' })
  }
  return (
    <View className="px-[38px] pt-[17px] bg-white h-full w-full">
      <View className="w-full items-center h-full">
        <Text className="text-black text-[32px] font-medium">What’s up</Text>
        <Image
          source={require('@src/assets/images/onboarding.png')}
          className="mt-[85px]"
        />
        <Text className="text-center text-neutral-400 text-lg font-normal mt-[68px]">
          Let’s talk with your friends and family wherever and whenever
        </Text>
        <TouchableOpacity
          className="mt-9 h-[62px] bg-zinc-800 rounded-[30px] justify-center items-center w-full"
          onPress={handleNextStep}>
          <Text className="text-white text-lg font-medium">
            Continue with phone
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;
