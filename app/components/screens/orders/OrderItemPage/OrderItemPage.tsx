import React from "react"
import styles from "./OrderItem.module.scss"
import Layout from "../../../layout/Layout"
import Description from "./Description/Description"
import IntroOrderItem from "./Intro/Intro"
import Request from "./Request/Request"
import {
  useGetByIdQuery,
  useGetFullResponseByOrderIdQuery,
} from "../../../../store/orders/orders.api"
import { useRouter } from "next/router"
import { Meta } from "../../../../utils/meta/Meta"
import { useGetMeQuery } from "../../../../store/users/users.api"
import AllRequest from "./Request/MyRequest/AllRequest"

const OrderItemPage = () => {
  const router = useRouter()
  const id = router.query.id
  const { data, isLoading, error } = useGetByIdQuery(id)


  const { data: response, isLoading: isLoadingResponse } =
    useGetFullResponseByOrderIdQuery(id)



  const getCountResponse = isLoadingResponse ? 0 : response?.length

  const titleMeta = isLoading ? "" : data?.title
  const description = "Личная страничка"
  const { data: user, isLoading: isLoadingUser } = useGetMeQuery("")
  const role = isLoadingUser ? 0 : user?.roles ? user.roles.id : 0
  const checkOwner = data?.users?.id == user?.id

  return (
    <Meta title={titleMeta} description={description}>
      <Layout>
        <div className={styles.orderItem}>
          {isLoading ? (
            ""
          ) : data == null ? null : (
            <>
              <IntroOrderItem
                price={data.price == null ? 0 : data?.price == 0 ? "Договорная" : data.price + " " + "KZT"}
                title={data?.title}
                response={response}
                createdAt={data?.createdAt}
              />
              <div className={styles.orderItem__body}>
                <div className={styles.orderItem__left}>
                  <Description
                    description={data.description}
                    isLoading={isLoading}
                  />
                  {role == 3 || role == 0 ? (
                    <div className={styles.orderItem__response}>
                      <h3 className={styles.orderItem__response__title}>
                        Количество заявок - {getCountResponse}
                      </h3>
                      {checkOwner ? response?.map(res => <AllRequest item={res} />) : ""}
                    </div>
                  ) : (
                    <>
                      <div className={styles.orderItem__response}>
                        <h3 className={styles.orderItem__response__title}>
                          Количество заявок - {getCountResponse}
                        </h3>
                        <p>
                          Вы можете оставить заявку, для того, чтобы заказчик
                          смог рассмотреть вашу кандидатуру
                        </p>
                      </div>

                      <Request />
                    </>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </Layout>
    </Meta>
  )
}

export default OrderItemPage
