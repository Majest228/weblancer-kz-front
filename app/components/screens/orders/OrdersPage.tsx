import styles from "./OrdersPage.module.scss"
import Layout from "../../layout/Layout"
import React, { FC } from "react"
import Intro from "../../ui/Intro/Intro"
import Search from "../../ui/Search/Search"

import Filters from "./Filters/Filters"
import Orders from "./Orders/Orders"
import SortDate from "./SortDate/SortDate"
import { useAppDispatch } from "../../../hooks/hooks"
import { initialLoadOrder } from "../../../store/filters/filters.slice"
import { Meta } from "../../../utils/meta/Meta"

const OrdersPage: FC = ({ orders }) => {
  const dispatch = useAppDispatch()
  dispatch(initialLoadOrder())

  const titleMeta = "Заказы"
  const description = 'Личная страничка '
  return (
    <Meta Meta title={titleMeta} description={description} >
      <Layout>
        <Intro
          title='заказов на фрилансе'
          count={orders?.length}
          count_title='открытых заказов'
        />
        <div className={styles.orders__container}>
          <div className={styles.orders__content}>
            <div className={styles.orders__content__orders}>
              <div className={styles.orders__content__orders__content}>
                <Search placeholder='Искать заказы на сайте' />
                <SortDate />
                <Orders orders={orders} />
              </div>
              <Filters type={'order'} />
            </div>
          </div>
        </div>
      </Layout>
    </Meta>
  )
}
export default OrdersPage
