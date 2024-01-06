import WelcomeScreen from '@src/screens/onboarding/WelcomeScreen';
import React from 'react';

interface IAuth {
  Screen: any;
}

export default function addOnboardingStack(Stack: IAuth) {
  return (
    <>
      <Stack.Screen name="Onboarding" component={WelcomeScreen} />
    </>
  );
}
