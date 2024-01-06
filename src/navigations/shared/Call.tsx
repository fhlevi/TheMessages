import CallScreen from '@src/screens/calls/CallScreen';
import React from 'react';

interface ICall {
  Screen: any;
}

export default function addCallStack(Stack: ICall) {
  return (
    <>
      <Stack.Screen name="Calls" component={CallScreen} />
    </>
  );
}
