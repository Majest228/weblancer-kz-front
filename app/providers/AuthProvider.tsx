import dynamic from "next/dynamic"
import { FC, PropsWithChildren, useEffect } from "react"
import { TypeComponentAuthFields } from "./private.route.interface"
import { useAuth } from "../hooks/useAuth"
import { useActions } from "../hooks/useActions"
import cookies from "js-cookie"

const DynamicCheckRole = dynamic(() => import("./CheckRole"), {
  ssr: false,
})

const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
  Component: { isOnlyUser },
  children,
}) => {
  const { user } = useAuth()
  const { checkAuth } = useActions()

  useEffect(() => {
    const accessToken = cookies.get("accessToken")
    if (accessToken) checkAuth()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // useEffect(() => {
  //   const refreshToken = cookies.get("refreshToken")
  // }, [pathname]) // eslint-disable-line react-hooks/exhaustive-deps

  return !isOnlyUser ? (
    <>{children}</>
  ) : (
    <DynamicCheckRole Component={{ isOnlyUser }}>{children}</DynamicCheckRole>
  )
}

export default AuthProvider
