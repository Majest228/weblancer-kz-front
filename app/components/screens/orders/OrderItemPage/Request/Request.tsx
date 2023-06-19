import { useRouter } from "next/router"
import React, { useState, useEffect } from "react"
import apiAxios from "../../../../../api/api"
import styles from "./Request.module.scss"
import cookies from 'js-cookie'
import { useCreateOrderMutation, useGetByIdQuery, useGetFullResponseByOrderIdQuery, useGetOrdersQuery } from "../../../../../store/orders/orders.api"
import { useGetMeQuery } from "../../../../../store/users/users.api"
import MyRequest from "./MyRequest/MyRequest"
import AllRequest from "./MyRequest/AllRequest"

const Request = () => {
  const [day, setDay] = useState(0)
  const [price, setPrice] = useState(0)
  const [comments, setComments] = useState("")
  const [ordersId, setOrderId] = useState(0)
  const router = useRouter()
  const id = router.query.id


  const { data: response, isLoading: isLoadingResponse } = useGetFullResponseByOrderIdQuery(id)
  const { data: order, isLoading: isLoadingOrder } = useGetByIdQuery(id)

  const { data: user, isLoading: isLoadingUser } = useGetMeQuery("")


  const checkReqUser = isLoadingUser ? {} : user

  const checkReqRes = isLoadingResponse ? [] : response
  const useCheckUser = checkReqRes.find(item => item == null || undefined ? {} : item.owner == null || undefined ? 0 : item.owner.id == checkReqUser.id ? true : false)
  const res = useGetByIdQuery(id)


  useEffect(() => {
    setOrderId(Number(id))
  }, [id])
  const [checkUser, setCheckUser] = useState(false)

  useEffect(() => {
    setCheckUser(useCheckUser)
  }, [useCheckUser])
  const all = useGetFullResponseByOrderIdQuery(id)

  const [createorder] = useCreateOrderMutation()

  const onCreate = async () => {
    await apiAxios
      .post(
        "orders/create/response",
        { day, price, comments, ordersId },
        {
          headers: {
            Authorization: `Bearer ${cookies.get("accessToken")}`,
          },
        }
      )
      .then((result) => {
        res.refetch()
        setCheckUser(true)
        all.refetch()
      })
  }

  return (
    <div className={styles.OrderItem}>
      <div className={styles.OrderItem__request}>

        {!checkUser ? (
          <div className={styles.OrderItem__request__content}>
            <div className={styles.OrderItem__request__content__title}>
              <p>Ваша заявка</p>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault()
              onCreate()
            }} className={styles.OrderItem__request__content__form}>
              <div className={styles.OrderItem__request__content__form__inputs}>
                {order?.price == 0 ? <div
                  className={
                    styles.OrderItem__request__content__form__inputs__number
                  }
                >
                  <input type='number' placeholder={"Цена"} onChange={(e) => setPrice(+e.target.value)} />
                  <p>KZT</p>
                </div> : ""}
                <div
                  className={
                    styles.OrderItem__request__content__form__inputs__number
                  }
                >
                  <input type='number' placeholder={"Сроки"} onChange={(e) => setDay(+e.target.value)} />
                  <p>Дней</p>
                </div>
              </div>
              <div className={styles.OrderItem__request__content__form__radios}>
                <div
                  className={
                    styles.OrderItem__request__content__form__radios__button
                  }
                >
                  <label>
                    <input
                      id={"price"}
                      type={"radio"}
                      name='Who'
                      defaultChecked
                    />
                    <span
                      className={
                        styles.OrderItem__request__content__form__radios__button__input
                      }
                    ></span>
                    <p>
                      Комиссию <a>9%</a> оплачивает заказчик
                    </p>
                  </label>
                </div>
                <div
                  className={
                    styles.OrderItem__request__content__form__radios__button
                  }
                >
                  <label>
                    <input id={"term"} type={"radio"} name='Who' />
                    <span
                      className={
                        styles.OrderItem__request__content__form__radios__button__input
                      }
                    ></span>
                    <p>
                      Я оплачиваю комиссию <a>9%</a>
                    </p>
                  </label>
                </div>
              </div>
              <div className={styles.OrderItem__request__content__form__textarea}>
                <textarea onChange={(e) => setComments(e.target
                  .value)} placeholder='Комментарий..' />
              </div>
              <div className={styles.OrderItem__request__content__form__submit}>
                <button type="submit">Добавить заявку</button>
              </div>
            </form>
          </div>
        ) : (
          <div className={styles.OrderItem__request__content}>
            <MyRequest />
          </div>
        )}
      </div>
    </div>
  )
}

export default Request
