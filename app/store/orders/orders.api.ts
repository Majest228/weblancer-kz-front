import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import cookies from 'js-cookie'

export const ordersApi = createApi({
  reducerPath: "api/orders",
  tagTypes: ["Orders"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/",
    prepareHeaders: (headers) => {
      headers.set("authorization", `Bearer ${cookies.get("accessToken")}`)
      return headers
    },
  }),
  endpoints: (build) => ({
    getOrders: build.query({
      query: () => ({
        url: "orders"
      }),
      providesTags: () => [{ type: "Orders" }]
    }),
    getById: build.query({
      query: (id: any) => ({
        url: `orders/${id}`
      }),
      providesTags: () => [{ type: "Orders" }]
    }),
    getFullResponseByOrderId: build.query({
      query: (id: any) => ({
        url: `orders/response/all/${id}`
      }),
      providesTags: () => [{ type: "Orders" }]
    }),
    createOrder: build.mutation({
      query: (body) => ({
        url: "orders/create",
        method: "POST",
        body
      }),
      invalidatesTags: () => [{ type: "Orders" }]
    }),
    // createResponse: build.mutation({
    //   query: (body) => ({
    //     url: "orders/create/response",
    //     method: "POST",
    //     body
    //   }),
    //   invalidatesTags: () => [{ type: "Orders" }]
    // }),
    updateView: build.mutation({
      query: (id) => ({
        url: `orders/view/${id}`,
        method: "POST",
        body: id
      }),
      invalidatesTags: () => [{ type: "Orders" }]
    })
  }),
})
export const { useCreateResponseMutation, useUpdateViewMutation, useCreateOrderMutation, useGetOrdersQuery, useGetByIdQuery, useGetFullResponseByOrderIdQuery } = ordersApi
