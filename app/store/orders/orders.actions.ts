import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import apiAxios from "../../api/api"

export const getOrderById: any = createAsyncThunk(
  "getById",
  async (id: number) => {
    const res = await apiAxios.get(`orders/${id}`)
    return res.data
  }
)

export const getAllOrders: any = createAsyncThunk("getAll", async () => {
  const res = await apiAxios.get("orders")
  return res.data
})
