import { NextPageAuth } from "../app/providers/private.route.interface"
import { GetStaticProps } from "next"
import { OrdersService } from "../app/services/orders.service"
import { UsersService } from "../app/services/users.service"

import dynamic from "next/dynamic"

const Home = dynamic(() => import("../app/components/screens/home/Home"), {
  ssr: false,
})


const HomePage: NextPageAuth = ({ freelancers, orders, error }: any) => {
  return <Home freelancers={freelancers} orders={orders} error={error} />
}


export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: freelancers } = await UsersService.getAllFreelancers()
    const { data: orders } = await OrdersService.getAll()
    return {
      props: {
        freelancers,
        orders
      },
      revalidate: 60
    }
  } catch (e) {
    return {
      props: {
        freelancers: [],
        orders: [],
        error: e
      }
    }
  }
}

HomePage.isOnlyUser = false

export default HomePage
