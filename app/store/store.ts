import { configureStore, ThunkAction } from "@reduxjs/toolkit"
import { rootReducer } from "./root-reducer"
import { ordersApi } from "./orders/orders.api"
import { createWrapper } from "next-redux-wrapper"
import { usersApi } from "./users/users.api"
import { countriesApi } from "./countries/countries.api"

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(ordersApi.middleware),
// })

export function makeStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        ordersApi.middleware,
        usersApi.middleware,
        countriesApi.middleware
      ),
    devTools: true,
  })
}

export const store = makeStore()

export type RootStore = ReturnType<typeof makeStore>

export type RootState = ReturnType<RootStore["getState"]>

export type AppDipsatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export const wrapper = createWrapper<RootState>(makeStore, { debug: false })
