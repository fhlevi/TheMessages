import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import WithSearchWrapper from '@src/components/wrappers/WithSearchWrapper';
import ContactItem from '@src/components/sections/contact/ContactItem';
import ButtonFloating from '@src/components/commons/ButtonFloating';

type Props = {};

const ContactScreen = (props: Props) => {
  return (
    <WithSearchWrapper title="Contacts" titleClassName="text-[21px]">
      <ScrollView>
        <View className="flex-col gap-6 py-[22px] px-7 border-b-[7px] border-zinc-300">
          <View className="flex-row">
            <Image
              source={require('@src/assets/images/icons/useradd.png')}
              className="mr-6"
            />
            <Text className="text-zinc-800 text-[17px] font-medium">
              Invite friends
            </Text>
          </View>
          <View className="flex-row">
            <Image
              source={require('@src/assets/images/icons/location.png')}
              className="mr-6"
            />
            <Text className="text-zinc-800 text-[17px] font-medium">
              Find people nearby
            </Text>
          </View>
        </View>
        <View className="px-7 py-[30px] flex-col">
          <ContactItem />
        </View>
      </ScrollView>
      <ButtonFloating type="contact" />
    </WithSearchWrapper>
  );
};

export default ContactScreen;
