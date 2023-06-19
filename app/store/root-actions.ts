import * as authActions from "./auth/auth.actions"
import * as usersActions from "./users/users.actions"
import * as ordersActions from "./orders/orders.actions"
export const rootActions = {
  ...authActions,
  ...usersActions,
  ...ordersActions,
}
