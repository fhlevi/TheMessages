
import { TSettings } from '@src/utils/types/Profile';
import { Text, View, Image } from 'react-native';

export default function MenuItem({ menus }: any) {
    return (
        <View className="flex-col gap-[33px]">
            {menus.map((eachMenu: TSettings, iMenu: React.Key | null | undefined) => (
                <View key={iMenu} className="flex-row">
                    <Image
                        source={eachMenu.imgSource.icon}
                        className="mr-6"
                    />
                    <Text className="text-zinc-800 text-[17px] font-medium">
                        {eachMenu.title}
                    </Text>
                </View>
            ))}
        </View>
    )
}