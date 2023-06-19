import { createAsyncThunk } from "@reduxjs/toolkit"
import { AuthInterface } from "./auth.interface"
import { IAuthForm } from "../../components/ui/auth-form/auth-form.interface"

import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { AuthService } from "../../services/auth.service"

export const register: any = createAsyncThunk<AuthInterface, IAuthForm>(
  "auth/register",
  async ({ email, password, roleId }, thunkAPI) => {
    try {
      const response = await AuthService.register(email, password, roleId)
      toast.success('Регистрация", "Успешна !', {
        position: toast.POSITION.BOTTOM_RIGHT,
      })
      return response.data
    } catch (e) {
      toast.error(`Ошибка", ${e}!`, {
        position: toast.POSITION.BOTTOM_RIGHT,
      })
      return thunkAPI.rejectWithValue(e)
    }
  }
)

export const login: any = createAsyncThunk<AuthInterface, IAuthForm>(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await AuthService.login(email, password)
      toast.success("Вы прошли авторизацию", {
        position: toast.POSITION.BOTTOM_RIGHT,
      })
      return response.data
    } catch (e) {
      toast.error(`Ошибка", ${e}!`, {
        position: toast.POSITION.BOTTOM_RIGHT,
      })
      return thunkAPI.rejectWithValue(e)
    }
  }
)

export const checkAuth = createAsyncThunk(
  "auth/check-auth",
  async (_, thunkAPI) => {
    try {
      const response = await AuthService.getNewTokens()
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)
