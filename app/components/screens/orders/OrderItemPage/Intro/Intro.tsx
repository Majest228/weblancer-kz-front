import React from "react"
import styles from "./Intro.module.scss"
import Image from "next/image"
import Share from "../../../../../assets/share.svg"
import Bulb from "../../../../../assets/bulbOn.svg"

const IntroOrderItem = ({ title, price, isLoading, response, createdAt }: any) => {

  const getDateOrder = () => {
    let a = +new Date()
    let b = +new Date(createdAt)
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
    <>
      <div className={styles.IntroOrderItem}>
        <div className={styles.IntroOrderItem__content}>
          <div className={styles.IntroOrderItem__content__top}>
            <div className={styles.IntroOrderItem__content__top__left}>
              <div className={styles.IntroOrderItem__content__top__left__date}>
                <p>Опубликовано  <span>{getDateOrder()}</span></p>
              </div>
              <div
                className={styles.IntroOrderItem__content__top__left__feedback}
              >
                {response?.length} откликов
              </div>
            </div>
            <div className={styles.IntroOrderItem__content__top__right}>
              <div
                className={styles.IntroOrderItem__content__top__right__share}
              >
                <Image src={Share} alt={""} />
              </div>
              <div className={styles.IntroOrderItem__content__top__right__bulb}>
                <Image src={Bulb} alt={""} />
              </div>
            </div>
          </div>
          <div className={styles.IntroOrderItem__content__middle}>
            <div className={styles.IntroOrderItem__content__middle__title}>
              {!isLoading ? <h3>{title}</h3> : ""}
            </div>
            <div className={styles.IntroOrderItem__content__middle__price}>
              {!isLoading ? <p>{price}</p> : ""}
            </div>
          </div>
          <div className={styles.IntroOrderItem__content__bottom}>
            <div className={styles.IntroOrderItem__content__bottom__payment}>
              <ul>
                <li>
                  <a>Интеграция платежных систем</a>
                </li>
                <li>
                  <a>Интеграция платежных систем</a>
                </li>
              </ul>
            </div>
            <div className={styles.IntroOrderItem__content__bottom__status}>
              <div
                className={styles.IntroOrderItem__content__bottom__status__item}
              >
                <div
                  className={
                    styles.IntroOrderItem__content__bottom__status__item__content
                  }
                >
                  <p>Прием заявок</p>
                </div>
              </div>
              <div
                className={styles.IntroOrderItem__content__bottom__status__item}
              >
                <div
                  className={
                    styles.IntroOrderItem__content__bottom__status__item__content
                  }
                >
                  <p>Выбор исполнителя</p>
                </div>
              </div>
              <div
                className={styles.IntroOrderItem__content__bottom__status__item}
              >
                <div
                  className={
                    styles.IntroOrderItem__content__bottom__status__item__content
                  }
                >
                  <p>Выполнение заказа</p>
                </div>
              </div>
              <div
                className={styles.IntroOrderItem__content__bottom__status__item}
              >
                <div
                  className={
                    styles.IntroOrderItem__content__bottom__status__item__content
                  }
                >
                  <p>Обмен отзывами</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.IntroOrderItem__line}></div>
    </>
  )
}

export default IntroOrderItem
