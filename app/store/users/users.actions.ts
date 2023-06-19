import { createAsyncThunk } from "@reduxjs/toolkit"
import apiAxios from "../../api/api"
// @ts-ignore
import cookies from "js-cookie"
import axios from "../../api/api"

export const getMe: any = createAsyncThunk("getMe", async () => {
  const res = await axios.get("users/profile", {
    headers: {
      Authorization: `Bearer ${cookies.get("accessToken")}`,
    },
  })
  return res.data
})

export const getAllFreelancers: any = createAsyncThunk(
  "getAllFreelancers",
  async () => {
    const res = await apiAxios.get("users/freelancers", {})
    return res.data
  }
)
