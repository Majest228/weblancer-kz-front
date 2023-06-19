import { NextPageAuth } from "../../app/providers/private.route.interface"
import { GetServerSideProps, GetStaticProps, NextPage } from "next"
import { wrapper } from "../../app/store/store"
import { useGetOrdersQuery } from "../../app/store/orders/orders.api"
import { OrdersService } from "../../app/services/orders.service"

import dynamic from "next/dynamic"

const Orders = dynamic(() => import("../../app/components/screens/orders/OrdersPage"), {
  ssr: false,
})


const OrdersPage: NextPageAuth = ({ orders }) => {
  return <Orders orders={orders} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data: orders } = await OrdersService.getAll()

    return {
      props: {
        orders
      }
    }
  } catch (e) {
    return {
      props: {
        error: e,
        orders: []
      }
    }

  }
}


OrdersPage.isOnlyUser = false

export default OrdersPage
