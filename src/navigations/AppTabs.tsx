import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabBar} from '@src/components/layouts';
import React from 'react';
import useTranslation from '@src/hooks/use-translation';
import {Image} from 'react-native';
import ChatStack from './ChatStack';
import ContactStack from './ContactStack';
import CallStack from './CallStack';
import ProfileStack from './ProfileStack';
import { getTabBarOptions } from './AppTabs.options';
import { useTailwind } from 'tailwind-rn';

interface IAppTabs {}

const Tab = createBottomTabNavigator();

const tabBarListeners = ({navigation, route}: any) => ({
  tabPress: () => navigation.navigate(route.name),
});

const AppTabs = ({}: IAppTabs) => {
  const {t} = useTranslation();
  const tw = useTailwind();

  return (
    <Tab.Navigator tabBar={TabBar} screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="ChatStack"
        component={ChatStack}
        listeners={tabBarListeners}
        options={({route}) => ({
          tabBarLabel: 'Messages',
          tabBarIcon: () => (
            <Image source={require('@src/assets/images/tabs/message.png')} />
          ),
          ...getTabBarOptions(route, { initialRoute: 'Messages' })
        })}
      />
      <Tab.Screen
        name="ContactStack"
        component={ContactStack}
        listeners={tabBarListeners}
        options={({route}) => ({
          tabBarLabel: 'Contacts',
          tabBarIcon: () => (
            <Image
              source={require('@src/assets/images/tabs/profile2user.png')}
            />
          ),
          ...getTabBarOptions(route, { initialRoute: 'Contacts' })
        })}
      />
      <Tab.Screen
        name="CallStack"
        component={CallStack}
        listeners={tabBarListeners}
        options={({route}) => ({
          tabBarLabel: 'Calls',
          tabBarIcon: () => (
            <Image source={require('@src/assets/images/tabs/call.png')} />
          ),
          ...getTabBarOptions(route, { initialRoute: 'Calls' })
        })}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        listeners={tabBarListeners}
        options={({route}) => ({
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <Image source={require('@src/assets/images/tabs/profile.png')} />
          ),
          ...getTabBarOptions(route, { initialRoute: 'Profile' })
        })}
      />
    </Tab.Navigator>
  );
};

export default AppTabs;
