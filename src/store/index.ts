import AsyncStorage from '@react-native-async-storage/async-storage';
import create from 'zustand';
import shallow from 'zustand/shallow';
import useAuthStore from './auth';

const useStore = create(set => ({
  isInitialized: false,

  token: null,
  isAuthenticated: false,
  setToken: (token: any) =>
    set({
      token,
      isAuthenticated: !!token,
    }),
}));

useStore.subscribe(
  (current: any, prev: any) => {
    if (prev.isInitialized) {
      AsyncStorage.setItem('token', JSON.stringify(current.value));
    }
  },
  state => ({isInitialized: state.isInitialized, value: state.token}),
  shallow,
);

export default useStore;

export {
    useAuthStore
}
