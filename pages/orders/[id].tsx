import OrderItemPage from "../../app/components/screens/orders/OrderItemPage/OrderItemPage"
import { NextPageAuth } from "../../app/providers/private.route.interface"
import { useRouter } from "next/router"
import { useGetByIdQuery } from "../../app/store/orders/orders.api"

const OrderPage: NextPageAuth = () => {
  return (
    <div>
      <OrderItemPage />
    </div>
  )
}

OrderPage.isOnlyUser = true

export default OrderPage
