import { combineReducers } from "redux"
import { authReducer } from "./auth/auth.slice"
import { filtersReducer } from "./filters/filters.slice"
import { usersReducer } from "./users/users.slice"
import { ordersApi } from "./orders/orders.api"
import { usersApi } from "./users/users.api"
import { countriesApi } from "./countries/countries.api"

export const rootReducer = combineReducers({
  auth: authReducer,
  [ordersApi.reducerPath]: ordersApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
  [countriesApi.reducerPath]: countriesApi.reducer,
  filters: filtersReducer,
  users: usersReducer,
})
