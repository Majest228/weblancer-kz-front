import { Middleware, MiddlewareAPI } from "redux"
import { isRejectedWithValue } from "@reduxjs/toolkit"

export const rtkQueryMiddleware: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      alert("Error")
    }
    return next(action)
  }
