import apiAxios from "../api/api"
import { getOrderById } from "../store/orders/orders.actions"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const OrdersService = {
  async getAll() {
    return apiAxios.get("orders")
  },
  async getOrderById(id: number) {
    return apiAxios.get(`orders/${id}`)
  },
}
