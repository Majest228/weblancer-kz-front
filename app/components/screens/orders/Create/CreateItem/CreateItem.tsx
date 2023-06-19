import React from "react"
import Link from "next/link"
import styles from "../Create.module.scss"

const CreateItem = ({ title, desc, button, link }: any) => {
  return (
    <div className={styles.create__content__item}>
      <h3 className={styles.create__content__item__title}>
        Создать {title} - <span>бесплатное размещение</span>
      </h3>
      <p className={styles.create__content__item__desc}>{desc}</p>
      <Link
        className={styles.create__content__item__button}
        href={`/orders/create/${link}`}
      >
        Создать {button}
      </Link>
    </div>
  )
}

export default CreateItem
