import React from 'react';
import StatusBar from '@src/components/layouts/status-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from 'react-native-elements';
import { SafeAreaView } from 'react-native';

interface IBaseLayout {
  children?: React.ReactNode;
}

function BaseLayout({children}: IBaseLayout) {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={{ flex: 1 }}>
        <SafeAreaProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </SafeAreaProvider>
      </SafeAreaView>
    </>
  );
}

export default BaseLayout;
