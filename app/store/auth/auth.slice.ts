import { createSlice } from "@reduxjs/toolkit"
import { getStoreLocal, removeTokensStorage } from "../../utils/useLocal"
import { register, login, checkAuth } from "./auth.actions"

const initialState = {
  user: getStoreLocal("user"),
  isLoading: true,
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null
      removeTokensStorage()
      localStorage.removeItem('user')
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false
        state.user = null
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.user = payload.user
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false
        state.user = null
      })
      .addCase(checkAuth.fulfilled, (state, { payload }) => {
        state.user = payload.user
      })
  },
})

export const authReducer = authSlice.reducer

export const { logout } = authSlice.actions

