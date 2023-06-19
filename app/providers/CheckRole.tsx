import { FC, PropsWithChildren } from "react"
import { TypeComponentAuthFields } from "./private.route.interface"
import { useAppSelector } from "../hooks/hooks"
import { useRouter } from "next/router"
import { useAuth } from "../hooks/useAuth"

const CheckRole: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
  children,
  Component: { isOnlyUser, isOnlyAdmin },
}) => {
  // const { accessToken, isLoading } = useAppSelector((state) => state.auth)
  // const { replace, pathname } = useRouter()
  //
  // const Children = () => <>{children}</>
  //
  // if (accessToken) return <Children />
  //
  // if (isOnlyUser) pathname !== "/" && replace("/404")
  //
  // return null
  const { user } = useAuth()
  const router = useRouter()

  const Children = () => <>{children}</>

  if (!isOnlyUser) return <Children />
  // if (user) if (user.roles.name == "admin") return <Children />

  if (isOnlyAdmin) {
    router.pathname !== "/404" && router.replace("/404")
    return null
  }
  const isUser = user && !user.isAdmin

  if (isUser && isOnlyUser) return <Children />
  else {
    router.pathname !== "/" && router.replace("/")
    return null
  }
}

export default CheckRole
