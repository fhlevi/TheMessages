import useStore, { useAuthStore } from "@src/store";

export default function useAuth () {
    const isAuthenticated = useStore((state: any) => state.isAuthenticated);
    const authentication = useAuthStore((state: any) => state.authentication)

    return {
        isAuthenticated,
        authentication
    }
}