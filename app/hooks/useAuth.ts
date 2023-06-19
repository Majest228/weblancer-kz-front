import { useAppSelector } from "./hooks"

export const useAuth = () => useAppSelector((state) => state.auth)
