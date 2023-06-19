import React from "react"
import styles from "../../Profile.module.scss"
import Link from "next/link"
import Image from "next/image"
import Star from "../../../../ui/svg/star/star"

const ReviewItem = ({ item }) => {
  console.log(item)
  const stars = ["star", "star", "star", "star", "star"]
  const rating = item.value
  return (
    <div
      className={styles.profile__about__content__left__review__content__item}
    >
      <Link href='/'>Разработка фирменного стиля для свечей ручной работы</Link>

      <div
        className={
          styles.profile__about__content__left__review__content__item__rating
        }
      >
        <div
          className={
            styles.profile__about__content__left__review__content__item__rating__stars
          }
        >
          {stars.map((star, i) => (
            <Star
              fill={rating >= i + 1 ? "#4db82d" : "#878787"}
              w={25}
              h={25}
            />
          ))}
        </div>
        <h3
          className={
            styles.profile__about__content__left__review__content__item__rating__name
          }
        >
          {item.owners.name} {item.owners.surname}
        </h3>
        <p
          className={
            styles.profile__about__content__left__review__content__item__rating__date
          }
        >
          11 июня 2021
        </p>
      </div>
      <div
        className={
          styles.profile__about__content__left__review__content__item__plus
        }
      >
        <p
          className={
            styles.profile__about__content__left__review__content__item__plus__left
          }
        >
          Плюсы
        </p>
        <p
          className={
            styles.profile__about__content__left__review__content__item__plus__right
          }
        >
          {item.plus}
        </p>
      </div>

      <div
        className={
          styles.profile__about__content__left__review__content__item__minus
        }
      >
        <p
          className={
            styles.profile__about__content__left__review__content__item__minus__left
          }
        >
          Минусы
        </p>
        <p
          className={
            styles.profile__about__content__left__review__content__item__minus__right
          }
        >
          {item.minus}
        </p>
      </div>

      <div
        className={
          styles.profile__about__content__left__review__content__item__comment
        }
      >
        <p
          className={
            styles.profile__about__content__left__review__content__item__comment__left
          }
        >
          Комментарий
        </p>
        <p
          className={
            styles.profile__about__content__left__review__content__item__comment__right
          }
        >
          {item.message}
        </p>
      </div>
    </div>
  )
}

export default ReviewItem
