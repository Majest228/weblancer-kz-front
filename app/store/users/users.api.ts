import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import cookies from "js-cookie"

export const usersApi = createApi({
  reducerPath: "api/users",
  tagTypes: ["User"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/",
    prepareHeaders: (headers) => {
      headers.set("authorization", `Bearer ${cookies.get("accessToken")}`)
      return headers
    },
  }),
  endpoints: (build) => ({
    getMe: build.query({
      query: () => ({
        url: "users/profile",
      }),
      providesTags: () => [{ type: "User" }]
    }),
    getUserById: build.query({
      query: (id: any) => ({
        url: `users/profile/${id}`,
      }),
      providesTags: () => [{ type: "User" }]
    }),
    getAllFrellancers: build.query({
      query: () => ({
        url: "users/freelancers",
      }),
      providesTags: () => [{ type: "User" }]
    }),
    updatePhoto: build.mutation({
      query: (body) => ({
        url: `users/files`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: () => [{ type: "User" }]
    }),
    updateBody: build.mutation({
      query: (body) => ({
        url: "users/profile/description",
        method: "PUT",
        body
      }),
      invalidatesTags: () => [{ type: "User" }]
    }),
    updateProfile: build.mutation({
      query: (body) => ({
        url: "users/profile",
        method: "PUT",
        body
      }),
      invalidatesTags: () => [{ type: "User" }]
    }),
    updateRole: build.mutation({
      query: (body) => ({
        url: "users/profile/role",
        method: "PUT",
        body
      }),
      invalidatesTags: () => [{ type: "User" }]
    })

  }),
})
export const {
  useGetMeQuery,
  useGetUserByIdQuery,
  useUpdatePhotoMutation,
  usePrefetch,
  useGetAllFrellancersQuery,
  useLazyGetMeQuery,
  useUpdateBodyMutation,
  useUpdateProfileMutation,
  useUpdateRoleMutation
} = usersApi
