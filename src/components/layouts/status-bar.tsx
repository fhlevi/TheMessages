import {StatusBar as StatusBarRN} from 'react-native';
import React from 'react';

interface IStatusBar {}

function StatusBar({}: IStatusBar) {
  return <StatusBarRN backgroundColor="transparent" barStyle="dark-content" />;
}

export default StatusBar;
