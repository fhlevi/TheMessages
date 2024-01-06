import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import React from 'react';
import clsx from 'clsx';
import tw from '@root/tailwind';

interface ITabBar {
  state: any;
  descriptors: any;
  navigation: any;
  isKeyboardShown: boolean;
}

const TabBar = ({state, descriptors, navigation, isKeyboardShown}: ITabBar) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (isKeyboardShown || focusedOptions.tabBarVisible === false) {
    return null;
  }

  const focusedRouteName = getFocusedRouteNameFromRoute(
    state.routes[state.index],
  );

  const routesWithActiveIcon: any = {
    ChatStack: ['Messages'],
    ContactStack: ['Contacts'],
    CallStack: ['Calls'],
    ProfileStack: ['Profile'],
  };

  return (
    <View style={tw("flex-row justify-between bg-white h-[76px] pt-2")}>
      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];

        const label = options.tabBarLabel || route.name;

        const isFocused = state.index === index;

        const isActive = focusedRouteName
          ? routesWithActiveIcon[route.name].includes(focusedRouteName)
          : isFocused;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableWithoutFeedback
            key={route.key}
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityRole="button"
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}>
            <View style={tw(`flex-1 items-center ${isActive ? 'opacity-100' : 'opacity-70'}`)}>
              {options.tabBarIcon()}
              <Text
                style={tw('mt-[10px] text-black')}>
                {label}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
};

export default TabBar;
