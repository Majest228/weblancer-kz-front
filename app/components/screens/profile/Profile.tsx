import React, { useEffect, useRef, useState } from "react"
import styles from "./Profile.module.scss"
import Layout from "../../layout/Layout"

import Link from "next/link"
import Star from "../../ui/svg/star/star"
import Portfolio from "./Portfolio/Portfolio"
import Review from "./Review/Review"
import { useGetMeQuery } from "../../../store/users/users.api"

import ProfileInfo from "./ProfileInfo/ProfileInfo"
import { Meta } from "../../../utils/meta/Meta"
import { useAuth } from "../../../hooks/useAuth"

const Profile = () => {
  let newDate = new Date()

  const { user } = useAuth()

  const { data: me, isLoading: isLoadingUser } = useGetMeQuery(null, { skip: !user })

  const getAbout = isLoadingUser ? "" : me?.about
  const title = isLoadingUser ? "" : me?.name + " " + me?.surname
  const description = "Личная страничка "
  const role = isLoadingUser ? 0 : me?.roles ? me.roles.id : 0

  return (
    <Meta title={title} description={description}>
      <Layout>
        <div className={styles.profile}>
          <div className={styles.profile__container}>
            <ProfileInfo str='profile' />
          </div>
          <div className={styles.profile__about}>
            <div className={styles.profile__about__container}>
              <div className={styles.profile__about__content}>
                <div className={styles.profile__about__content__left}>
                  <div className={styles.profile__about__content__left__desc}>
                    <h2>{isLoadingUser ? "" : me?.title}</h2>
                    <p
                      className={
                        styles.profile__about__content__left__desc__text
                      }
                      dangerouslySetInnerHTML={{ __html: getAbout }}
                    >
                    </p>
                  </div>
                  {role == 3 || role == 0 ? "" : <Portfolio />}
                  <div className={styles.profile__about__content__left__review}>
                    <div
                      className={
                        styles.profile__about__content__left__review__header
                      }
                    >
                      <h3>Последние отзывы</h3>
                      <Link href='/'>Читать все отзывы</Link>
                    </div>
                    {isLoadingUser
                      ? "" :
                      me?.rating_to.map((item) => <Review item={item} />)
                    }
                  </div>
                </div>
                <div className={styles.profile__about__content__right}>
                  <h3 className={styles.profile__about__content__right__title}>
                    Информация о фрилансере
                  </h3>
                  <ul className={styles.profile__about__content__right__list}>
                    <li
                      className={
                        styles.profile__about__content__right__list__item
                      }
                    >
                      <a href='https://hh.ru/resume/6d63b4d5ff0b435ff10039ed1f454c53586270'>
                        Резюме
                      </a>
                    </li>
                    <li
                      className={
                        styles.profile__about__content__right__list__item
                      }
                    >
                      <Link href='/'>Примеры работ</Link>
                      <span>13</span>
                    </li>
                    <li
                      className={
                        styles.profile__about__content__right__list__item
                      }
                    >
                      <Link href='/'>заказчиков</Link>
                      <span>133</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Meta>
  )
}

export default Profile
