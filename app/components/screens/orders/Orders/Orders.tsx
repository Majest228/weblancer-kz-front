import React, { useEffect } from "react"
import styles from "../OrdersPage.module.scss"
import OrderItem from "./OrderItem/OrderItem"
import { useAppSelector } from "../../../../hooks/hooks"

import { IOrders } from "../../../../store/orders/orders.interface"
import { useGetOrdersQuery } from "../../../../store/orders/orders.api"
import OrderItemSkeleton from "./OrderItem/OrderItemSkeleton"

const Orders = ({ orders }) => {
  const filters = useAppSelector((state) => state.filters)

  function Filter(orders: IOrders[] = [], filters: any = {}) {
    const keys = Object.keys(filters).filter((key) =>
      filters.hasOwnProperty(key)
    )
    return orders.filter((elem: IOrders) => {
      const commonKeys = keys.filter((key) => elem.hasOwnProperty(key))
      return commonKeys.reduce((flag: boolean, key: string): any => {
        if (key == "title") {
          if (elem[key].toUpperCase().includes(filters.title[0].toUpperCase()))
            return flag
          else return false
        }
        if (key == "price") {
          if (elem[key] >= filters[key][0] && elem[key] <= filters[key][1])
            return flag
          else return false
        }
      }, true)
    })
  }

  const filterData = Filter(orders, filters)
  console.log(filterData, filters)
  return (
    <div className={styles.items}>
      {filterData
        ?.sort((a, b) => b.views - a.views)
        .map((item) => (
          <OrderItem item={item} />
        ))}
    </div>
  )
}

export default Orders
