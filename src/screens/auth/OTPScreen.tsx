import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import AuthWrapper from '@src/components/wrappers/AuthWrapper';
import InputOTP from '@src/components/forms/InputOTP';

interface IotpScreen {
  navigation: any;
}

const OTPScreen = ({navigation}: IotpScreen) => {
  return (
    <ScrollView>
      <AuthWrapper
        title="Enter code"
        info="We’ve sent the code via SMS to +62 999
        9999 000">
        <View>
          <InputOTP
            onChangeCode={(code: string) => {
              if (code.length === 4) {
                navigation.navigate('AuthStack', {screen: 'CreateUsername'});
              }
            }}
          />
          <View className="text-center flex-row items-center justify-center mt-[153px]">
            <Text className="text-neutral-400 text-lg font-normal">
              Didn’t get the code?{' '}
            </Text>
            <Text className="text-neutral-700 text-lg font-medium">
              Resent code
            </Text>
          </View>
        </View>
      </AuthWrapper>
    </ScrollView>
  );
};

export default OTPScreen;
