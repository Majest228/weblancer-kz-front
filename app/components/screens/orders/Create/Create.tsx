import React from "react"
import Layout from "../../../layout/Layout"
import styles from "./Create.module.scss"
import Link from "next/link"
import CreateItem from "./CreateItem/CreateItem"
import { Meta } from "../../../../utils/meta/Meta"
const CreatePage = () => {
  const titleMeta = "Создание заказа"
  const description = 'Личная страничка'
  return (
    <Meta Meta title={titleMeta} description={description} >
      <Layout>
        <div className={styles.create}>
          <div className={styles.create__container}>
            <h2 className={styles.create__title}>Выбор заказа</h2>
            <div className={styles.create__content}>
              <CreateItem
                title='проект '
                desc='Проект - это разовая задача, которую выполняет выбранный вами фрилансер.
Опишите задачу или оставьте ТЗ, для того, чтобы фрилансер изучил задачу'
                button='проект'
                link='project'
              />
              <CreateItem
                title='конкурс'
                desc='Конкурс - это тот же проект, но он является открытым и вы будете выбирать фрилансера,
который отправит самый лучший вариант.'
                link=''
                button='конкурс'
              />
            </div>
          </div>
        </div>
      </Layout>
    </Meta>
  )
}

export default CreatePage
