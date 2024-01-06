import {View, TextInput} from 'react-native';
import React, {useState} from 'react';

interface IinputOTP {
  inputCount?: number;
  onChangeCode?: Function;
}

const InputOTP: React.FC<IinputOTP> = ({
  inputCount = 4,
  onChangeCode = () => {},
}) => {
  const initDefaultValue = new Array(inputCount).fill('');
  const OTPinputRef: any[] = [];
  const OTPinput = [];

  const [otpText, setOtpText] = useState<any[]>(initDefaultValue);

  const setRef = (ref: any) => {
    OTPinputRef.push(ref);
  };

  const handleChangeCode = (result: any[]) => {
    setOtpText(result.slice(0, inputCount));
    onChangeCode(result.slice(0, inputCount).join(''));
  };

  const handleChangeText = (val: string, i: number) => {
    const result = otpText;

    if (val) {
      if (i < inputCount - 1) {
        OTPinputRef[i + 1].focus();
      }

      result[i] = val;
      handleChangeCode(result);
    } else {
      if (i > 0) {
        OTPinputRef[i - 1].focus();
      }

      result[i] = '';
      handleChangeCode(result);
    }
  };

  for (let i = 0; i < 4; i++) {
    OTPinput.push(
      <TextInput
        key={i}
        ref={setRef}
        className="w-[71px] h-[71px] text-neutral-600 text-[33px] font-bold border border-stone-300 py-1 rounded-full text-center"
        keyboardType="numeric"
        maxLength={1}
        textContentType="oneTimeCode"
        onChangeText={val => handleChangeText(val, i)}
      />,
    );
  }

  return (
    <View>
      <View className="flex flex-row gap-[22px]">{OTPinput}</View>
    </View>
  );
};

export default InputOTP;
