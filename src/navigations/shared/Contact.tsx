import ContactScreen from '@src/screens/contact/ContactScreen';
import React from 'react';

interface IContact {
  Screen: any;
}

export default function addContactStack(Stack: IContact) {
  return (
    <>
      <Stack.Screen name="Contacts" component={ContactScreen} />
    </>
  );
}
