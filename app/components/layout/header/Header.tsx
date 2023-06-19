import React, { useEffect, useState } from "react"
import styles from "./Header.module.scss"
import Link from "next/link"
import AuthForm from "../../ui/auth-form/AuthForm"
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks"
import { NextPageAuth } from "../../../providers/private.route.interface"
import Navigation from "./Navigation/Navigation"
import cookies from "js-cookie"
import { useAuth } from "../../../hooks/useAuth"
import Image from "next/image"
import ArrowIco from "../../ui/svg/arrow/arrow"
import { getMe } from "../../../store/users/users.actions"
import HeaderModal from "./HeaderModal/HeaderModal"
import { useGetMeQuery } from "../../../store/users/users.api"
import { logout } from "../../../store/auth/auth.slice"

const Header: NextPageAuth = () => {
  const [isShow, setIsShow] = useState(false)

  const { user } = useAuth()
  const result = useGetMeQuery("")
  const { isLoading, data } = useGetMeQuery("")

  const dispatch = useAppDispatch()

  useEffect(() => {
    user ? result.refetch() : ""
  }, [user])

  const onClickLogout = () => {
    dispatch(logout())
    setIsShow(false)
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__content}>
          <div className={styles.header__content__left}>
            <Link className={styles.header__content__left__title} href='/'>
              Kazfl
            </Link>
            <Navigation />
          </div>
          <div className={styles.header__content__right}>
            {user ? (
              <>
                {isLoading ? (
                  <Image
                    src={`http://localhost:8080/api/files/user.png`}
                    alt='avatar'
                    width={40}
                    height={40}
                  />
                ) : data ? (
                  <Image
                    className={styles.header__content__right__profile__photo}
                    src={`http://localhost:8080/api/${data.avatarPath}`}
                    alt='avatar'
                    width={40}
                    height={40}
                  />
                ) : (
                  ""
                )}
                <button
                  className={styles.header__content__right__profile__button}
                  onClick={() => setIsShow(!isShow)}
                >
                  <ArrowIco w={14} h={14} fill={"white"} />
                </button>
                {isShow ? (
                  <HeaderModal
                    setIsShow={setIsShow}
                    isShow={isShow}
                    onClickLogout={onClickLogout}
                  />
                ) : (
                  ""
                )}
                {isLoading ? (
                  ""
                ) : data ? (
                  <p className={styles.header__content__right__profile__name}>
                    {data.name}
                  </p>
                ) : (
                  ""
                )}
              </>
            ) : (
              <>
                <AuthForm str='register' />
                <AuthForm str='login' />
              </>
            )}
            <button className={styles.header__content__right__lang}>
              <span> Рус</span>
              <button
                className={styles.header__content__right__profile__button}
              >
                <ArrowIco w={14} h={14} />
              </button>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

Header.isOnlyUser = false

export default Header
