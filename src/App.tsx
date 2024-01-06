/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {QueryClient, QueryClientProvider} from 'react-query';
import {RootLayout} from '@src/components/layouts';
import Navigations from './navigations/_root';
import SplashScreen from 'react-native-splash-screen';
import { useEffect } from 'react';
import {TailwindProvider} from 'tailwind-rn';
import utilities from '../tailwind.json';

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);
  
  return (
    <TailwindProvider utilities={utilities}>
      <QueryClientProvider client={queryClient}>
        <RootLayout>
          <Navigations />
        </RootLayout>
      </QueryClientProvider>
    </TailwindProvider>
  );
}

export default App;