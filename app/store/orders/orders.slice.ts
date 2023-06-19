import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getAllOrders, getOrderById, updateCountView } from "./orders.actions"
import { IOrders, OrdersState } from "./orders.interface"

const initialState: OrdersState = {
  orders: [],
  isErrorOrders: null,
  isError: null,
  isLoadingOrders: true,
  order: {},
}

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllOrders.pending]: (state: any) => {
      state.isLoadingOrders = true
    },
    [getAllOrders.fulfilled]: (state: any, action: PayloadAction<IOrders>) => {
      state.isLoadingOrders = false
      state.orders = action.payload
    },
    [getAllOrders.rejected]: (state: any) => {
      state.isLoadingOrders = false
      state.orders = []
      state.isLoadingOrders = "error"
    },
    [getOrderById.pending]: (state: any) => {
      state.isLoading = true
    },
    [getOrderById.fulfilled]: (state: any, action: PayloadAction<IOrders>) => {
      state.isLoading = false
      state.order = action.payload
    },
    [getOrderById.rejected]: (state: any) => {
      state.isLoading = true
      state.order = {}
      state.isError = "error"
    },
  },
})

export const ordersReducer = ordersSlice.reducer
