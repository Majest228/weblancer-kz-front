import Cookies from 'js-cookie'

export const getStoreLocal = (name: string) => {
  if (typeof localStorage !== "undefined") {
    const ls = localStorage.getItem(name)
    return ls ? JSON.parse(ls) : null
  }
  return null
}

export const removeTokensStorage = () => {
  Cookies.remove('accessToken')
  Cookies.remove('refreshToken')
}

