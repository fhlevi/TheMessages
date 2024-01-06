import ProfileScreen from '@src/screens/profiles/ProfileScreen';
import React from 'react';

interface IProfile {
  Screen: any;
}

export default function addProfileStack(Stack: IProfile) {
  return (
    <>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </>
  );
}
