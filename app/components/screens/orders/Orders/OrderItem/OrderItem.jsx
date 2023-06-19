import styles from "./OrderItem.module.scss"
import Link from "next/link"
import Image from "next/image"
import View from "../../../../../assets/view.svg"
import { useAppDispatch, useAppSelector } from "../../../../../hooks/hooks"
import React, { useEffect } from "react"
import {
  getAllOrders,
  getOrderById,
} from "../../../../../store/orders/orders.actions"
import { useGetDateCreateOrder } from "../../../../../hooks/useGetDateCreateOrder"
import OrderItemSkeleton from "./OrderItemSkeleton"
import { useUpdateViewMutation } from "../../../../../store/orders/orders.api"
import Eye from "../../../../ui/svg/eye/eye"

const OrderItem = ({ item, isLoading }) => {
  const [updateView] = useUpdateViewMutation()

  const updateState = async (id) => {
    updateView(id)
  }

  const getDateOrder = () => {
    let a = +new Date()
    let b = !isLoading ? +new Date(item.createdAt) : ""
    let res = (a - b) / 1000 / 60
    let hours = parseInt(res / 60)
    let day = parseInt(hours / 24)
    if (hours > 24) {
      switch (day) {
        case 1:
          return <p>{day} день назад</p>
          break
        case 2:
        case 3:
        case 4:
          return <p>{day} дня назад</p>
          break
        default:
          return <p>{day} дней назад</p>
          break
      }
    } else if (res > 60) {
      return <p>{hours} час назад</p>
    } else {
      return <p>{parseInt(res)} минут назад</p>
    }
  }

  return (
    <div className={styles.order__item}>
      <div className={styles.order__item__container}>
        <div className={styles.order__item__content}>
          <Link
            href={`/orders/${item.id}`}
            onClick={() => updateState(item.id)}
            className={styles.order__item__content__title}
          >
            {item.title}
          </Link>
          <p
            className={styles.order__item__content__about}
            dangerouslySetInnerHTML={{ __html: item?.description }}
          ></p>
          <div className={styles.order__item__content__price}>
            <p className={styles.order__item__content__price__number}>
              {item.price == 0 ? "Договорная" : item.price + " " + "тг."}
            </p>
            <span className={styles.order__item__content__price__time}>
              {getDateOrder()}
            </span>
          </div>

          <div className={styles.order__item__content__views}>
            <p className={styles.order__item__content__views__response}>
              {item?.ordersResponse.length} откликов
            </p>
            <div className={styles.order__item__content__views__number}>
              <Eye w={22} h={22} />
              <span>{item.views}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderItem
