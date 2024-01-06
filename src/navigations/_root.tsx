import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './AuthStack';
import OnboardingStack from './OnboardingStack';
import AppTabs from './AppTabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useAuth from '@src/hooks/use-auth';

interface IRoot {}

const Stack = createStackNavigator();

function Navigations({}: IRoot) {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState<boolean|null>(null);
  const { authentication } = useAuth();

  const isDummyLogin = Object.values(authentication).length >= 2;

  useEffect(() => {
    AsyncStorage.getItem('isAppFirstLaunched').then(res => {
      if (!res) {
        setIsAppFirstLaunched(true);
      } else {
        setIsAppFirstLaunched(false);
      }
    });
  }, []);

  return (
    isAppFirstLaunched !== null && (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="OnboardingStack">
          {isAppFirstLaunched && (
            <Stack.Screen name="OnboardingStack" component={OnboardingStack} />
          )}
          {!isDummyLogin && (
            <Stack.Screen name="AuthStack" component={AuthStack} />
          )}
          <Stack.Screen name="AppTabs" component={AppTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
}

export default Navigations;
