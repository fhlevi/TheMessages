import ContactItem from '@src/components/sections/contact/ContactItem';
import MenuItem from '@src/components/sections/profiles/MenuItem';
import WithoutSearchWrapper from '@src/components/wrappers/WithoutSearchWrapper';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { arrSetting } from '@src/constants/profiles';
import clsx from 'clsx';
import { useAuthStore } from '@src/store';

interface IProfileScreen {
  navigation: any;
}

const ProfileScreen = ({ navigation }: IProfileScreen) => {
  const authentication: any = useAuthStore((state) => state.authentication);

  return (
    <ScrollView>
      <WithoutSearchWrapper
        titleClassName="text-[21px]"
        title="My profiles"
        headerClassName="flex-col"
        headerChildren={
          <ContactItem 
            item={authentication}
            contactClassName="mb-0 mt-5"
          />
        }>
          <View>
            {arrSetting.map((eachCard, index) => (
              <View key={eachCard.cardName} className={clsx("pt-[32px] pb-[52px] px-7", index === 0 && "border-b-[7px] border-zinc-100")}>
                  <View>
                    <Text className="text-zinc-800 text-[17px] font-medium mb-10">
                      {eachCard.cardName}
                    </Text>
                    <MenuItem menus={eachCard.items} />
                  </View>
              </View>
            ))}
          </View>
      </WithoutSearchWrapper>
    </ScrollView>
  );
};

export default ProfileScreen;
