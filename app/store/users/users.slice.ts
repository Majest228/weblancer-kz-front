import { getAllFreelancers, getMe } from "./users.actions"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: null,
  isError: null,
  isLoadingUser: true,
  isLoadingFreelancer: true,
  freelancers: null,
}

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [getMe.pending]: (state) => {
      state.isLoadingUser = true
      state.user = null
    },
    [getMe.fulfilled]: (state, action) => {
      state.isLoadingUser = false
      state.user = action.payload
    },
    [getMe.rejected]: (state) => {
      state.isLoadingUser = true
      state.user = null
    },
    [getAllFreelancers.pending]: (state) => {
      state.isLoadingFreelancer = true
      state.freelancers = null
    },
    [getAllFreelancers.fulfilled]: (state, action) => {
      state.isLoadingFreelancer = false
      state.freelancers = action.payload
    },
    [getAllFreelancers.rejected]: (state) => {
      state.isLoadingFreelancer = true
      state.freelancers = null
    },
  },
})

export const usersReducer = usersSlice.reducer
