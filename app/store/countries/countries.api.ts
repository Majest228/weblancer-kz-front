import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import cookies from "js-cookie"

export const countriesApi = createApi({
  reducerPath: "api/countries",
  tagTypes: ["Countries"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/",
    prepareHeaders: (headers) => {
      headers.set("authorization", `Bearer ${cookies.get("accessToken")}`)
      return headers
    },
  }),
  endpoints: (build) => ({
    getAll: build.query({
      query: () => ({
        url: "countries",
      }),
    }),
    getCountry: build.query({
      query: () => ({
        url: "countries/country",
      }),
    }),
  }),
})

export const { useGetCountryQuery, useGetAllQuery } = countriesApi
