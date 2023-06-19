import React, { useEffect, useRef } from "react"
import Link from "next/link"
import styles from "../Header.module.scss"
import cookies from 'js-cookie'

import { useAuth } from "../../../../hooks/useAuth"

import { useGetMeQuery } from "../../../../store/users/users.api"
import { getStoreLocal } from "../../../../utils/useLocal"
import { useOnClickOutside } from "../../../../hooks/hooks"
const HeaderModal = ({ onClickLogout, setIsShow, isShow }: any) => {
  const res = useGetMeQuery("")

  const escape = useRef<HTMLElement>(null)
  const outside = useRef<HTMLElement>(null)

  const handleEscape = (event: any) => {
    if (event.keyCode == 27) setIsShow(false)
  }

  useOnClickOutside(outside, () => setIsShow(false))

  useEffect(() => {
    if (isShow) document.addEventListener("keydown", handleEscape, false)
    return () => {
      document.addEventListener("keydown", handleEscape, false)
    }
  }, [handleEscape, isShow])

  return (
    <div className={styles.header__content__right__profile__modal} ref={outside}>
      <Link href='/profile'>Профиль</Link>
      <button onClick={() => onClickLogout()}>Выйти</button>
    </div>
  )
}

export default HeaderModal
