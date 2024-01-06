import AsyncStorage from "@react-native-async-storage/async-storage";
import create from "zustand";
import { persist } from 'zustand/middleware';

const useAuthStore = create(persist((set) => ({
    authentication:{},
    setAuth: (authentication: any) => set({ authentication }),
}), {
    name: 'auth',
    getStorage: () => AsyncStorage,
}));

export default useAuthStore;
