import React, { useState } from "react"
import Layout from "../../../../layout/Layout"
import styles from "./CreateOrder.module.scss"
import EditorComponent from "../../../../ui/editor/Editor"
import apiAxios from "../../../../../api/api"
import cookies from "js-cookie"
import { useCreateOrderMutation, useGetOrdersQuery } from "../../../../../store/orders/orders.api"
import { useRouter } from "next/router"
import { Meta } from "../../../../../utils/meta/Meta"
const CreateOrder = () => {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [price, setPrice] = useState(0)
  const res = useGetOrdersQuery("")

  const [createOrder] = useCreateOrderMutation()
  const onCreate = async () => {
    await apiAxios
      .post(
        "orders/create",
        { title, description: body, price },
        {
          headers: {
            Authorization: `Bearer ${cookies.get("accessToken")}`,
          },
        }
      )
      .then((result) => {
        res.refetch()
        router.push(`/orders/${result.data}`)
      })
  }
  // @ts-ignore
  const titleMeta = "Создание проекта"
  const description = 'Личная страничка '
  return (
    <Meta Meta title={titleMeta} description={description} >
      <Layout>
        <div className={styles.create__order}>
          <div className={styles.create__order__container}>
            <h2 className={styles.create__order__title}>Создание проекта</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                onCreate()
              }}
              className={styles.create__order__content}
            >
              <div className={styles.create__order__content__name}>
                <h3>Название проекта</h3>
                <input type='text' onChange={(e) => setTitle(e.target.value)} />
              </div>
              <div className={styles.create__order__content__desc}>
                <h3>Описание проекта</h3>
                <EditorComponent height={300} about={body} setAbout={setBody} />
              </div>
              <div className={styles.create__order__content__price}>
                <h3>Бюджет</h3>
                <div className={styles.create__order__content__price__input}>
                  <input
                    type='text'
                    onChange={(e) => setPrice(Number(e.target.value))}
                  />
                  <span>KZT</span>
                </div>
              </div>
              <button className={styles.create__order__content__button}>
                Разместить проект
              </button>
            </form>
          </div>
        </div>
      </Layout>
    </Meta>
  )
}

export default CreateOrder
