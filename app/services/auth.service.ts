import apiAxios from "../api/api"
import { AuthInterface } from "../store/auth/auth.interface"
import { saveToStorage } from "./auth.helper"
import { cookies } from "js-cookie"

export const AuthService = {
  async register(email: string, password: string, roleId: number) {
    const res = await apiAxios.post<AuthInterface>("/auth/register", {
      email,
      password,
      roleId
    })

    return res
  },

  async login(email: string, password: string) {
    const res = await apiAxios.post<AuthInterface>("/auth/login", {
      email,
      password,
    })

    if (res.data.accessToken) {
      saveToStorage(res.data)
    }
    return res
  },

  async getNewTokens() {
    const refreshToken = cookies.get("refreshToken")
    const response = await apiAxios.post<AuthInterface>(
      "auth/login/access-token",
      {
        refreshToken,
      },
      {
        headers: {
          Authorization: `Bearer ${cookies.get("accessToken")}`,
        },
      }
    )

    if (response.data.accessToken) {
      saveToStorage(response.data)
    }

    return response
  },
}
