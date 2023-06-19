import React, { useRef } from "react"
import styles from "../profile/Profile.module.scss"
import stylesP from "../profile/ProfileInfo/ProfileInfo.module.scss"
import Layout from "../../layout/Layout"
import Image from "next/image"
import Verify from "../../ui/svg/verify/verify"
import OfflineStatus from "../../ui/svg/offlineStatus/offlineStatus"
import HomeIco from "../../ui/svg/home/home"

import { dateRegister } from "../../../utils/date.util"
import dayjs from "dayjs"
import Link from "next/link"
import Star from "../../ui/svg/star/star"
import Portfolio from "../profile/Portfolio/Portfolio"
import Review from "../profile/Review/Review"
import { useGetMeQuery } from "../../../store/users/users.api"
import { Meta } from "../../../utils/meta/Meta"

import { useAuth } from "../../../hooks/useAuth"

const UserPage = ({ user }: any) => {
  const { user: profileUser } = useAuth()
  const inputRef = useRef(null)
  let regDate = dayjs(user?.createdAt).format("YYYY,MM,DD")
  let newReg = regDate.split(",")

  const getFullDateRegister = () => {
    let currentDate: number = +dateRegister(newReg)
    if (currentDate < 12) {
      return <p>{currentDate} месяцев на сервисе</p>
    } else if (currentDate > 12) {
      // @ts-ignore
      return <p>{parseInt(currentDate / 12)} год на сервисе</p>
    }
  }
  const stars = ["star", "star", "star", "star", "star"]
  const rating = user?.rating
  const title = user?.name + user?.surname
  const description = "In this section you will find all genres on our site"

  const { data: me, isLoading: isLoadingUser } = useGetMeQuery(null, {
    skip: !profileUser,
  })

  const role = isLoadingUser ? 0 : me?.roles ? me.roles.id : 0

  return (
    <Meta title={title} description={description}>
      <Layout>
        <div className={styles.profile}>
          <div className={styles.profile__container}>
            <div className={stylesP.profile__header}>
              <div className={stylesP.profile__header__content}>
                <div className={stylesP.profile__header__content__left}>
                  <div
                    className={stylesP.profile__header__content__left__photo}
                  >
                    {user ? (
                      <Image
                        src={`http://localhost:8080/api/${user.avatarPath}`}
                        width={210}
                        height={210}
                        alt='user'
                      />
                    ) : (
                      <Image width={210} height={210} alt='user' />
                    )}
                  </div>
                  <div className={stylesP.profile__header__content__left__desc}>
                    <div
                      className={
                        stylesP.profile__header__content__left__desc__name
                      }
                    >
                      <h3>
                        {user?.name} {user?.surname}
                      </h3>
                      {user?.isVery ? <Verify /> : ""}
                    </div>
                    {user?.professionsSelected.slice(0, 2).map((item) => (
                      <p
                        className={
                          stylesP.profile__header__content__left__desc__profession
                        }
                      >
                        {item.professions.name}
                      </p>
                    ))}
                    <div
                      className={
                        stylesP.profile__header__content__left__desc__container
                      }
                    >
                      <div
                        className={
                          stylesP.profile__header__content__left__desc__status
                        }
                      >
                        <OfflineStatus />
                        <p>Был онлайн 14 часов назад</p>
                      </div>
                      <div
                        className={
                          stylesP.profile__header__content__left__desc__country
                        }
                      >
                        {user ? (
                          <Image
                            src={`http://localhost:8080/api/${user?.countries.flag}`}
                            alt='flag'
                            width={24}
                            height={14}
                          />
                        ) : !user?.countries ? (
                          "флаг"
                        ) : (
                          <Image
                            src={`http://localhost:8080/api/files/noup.gif`}
                            alt='flag'
                            width={24}
                            height={14}
                          />
                        )}
                        <p>
                          {user?.countries ? user.countries.name : ""},{" "}
                          {user?.city ? user.city.name : ""}
                        </p>
                      </div>
                    </div>
                    <div
                      className={
                        stylesP.profile__header__content__left__desc__rating
                      }
                    >
                      <div
                        className={
                          stylesP.profile__header__content__left__desc__rating__register
                        }
                      >
                        <HomeIco />
                        <p>{getFullDateRegister()}</p>
                      </div>
                      <div
                        className={
                          stylesP.profile__header__content__left__desc__rating__stars
                        }
                      >
                        {stars?.map((star, i) => (
                          <div
                            className={
                              stylesP.profile__header__content__left__desc__rating__stars__star
                            }
                          >
                            <Star
                              fill={rating >= i + 1 ? "#4db82d" : "#878787"}
                            />
                          </div>
                        ))}
                      </div>
                      <p
                        className={
                          stylesP.profile__header__content__left__desc__rating__review
                        }
                      >
                        {user?.rating_to ? user.rating_to.length : ""} отзыва
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.profile__header__content__right}>
                  {role == 3 || role == 0 ? (
                    ""
                  ) : (
                    <button
                      className={styles.profile__header__content__right__zakaz}
                    >
                      Предложить заказ
                    </button>
                  )}
                  <button
                    className={styles.profile__header__content__right__zakazhik}
                  >
                    Профиль заказчика
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.profile__about}>
            <div className={styles.profile__about__container}>
              <div className={styles.profile__about__content}>
                <div className={styles.profile__about__content__left}>
                  <div className={styles.profile__about__content__left__desc}>
                    <p
                      className={
                        styles.profile__about__content__left__desc__text
                      }
                      dangerouslySetInnerHTML={{ __html: user?.about }}
                    ></p>
                  </div>

                  <Portfolio />
                  <div className={styles.profile__about__content__left}>
                    <div
                      className={
                        styles.profile__about__content__left__review__header
                      }
                    >
                      <h3>Последние отзывы</h3>
                      <Link href='/'>Читать все отзывы</Link>
                    </div>
                    {user?.rating_to.map((item) => (
                      <Review item={item} />
                    ))}
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

export default UserPage
