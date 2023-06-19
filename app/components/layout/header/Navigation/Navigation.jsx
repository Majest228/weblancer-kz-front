import React, { useRef, useState } from "react"
import Link from "next/link"
import styles from "../Header.module.scss"
import { useOnClickOutside } from "../../../../hooks/hooks"

const Navigation = () => {
  const [show, setShow] = useState(!false)
  const outside = useRef(null)
  useOnClickOutside(outside, () => setShow(!false))
  return (
    <nav className={!show ? styles.cross : ""} ref={outside}>
      <div onClick={() => setShow(!show)}>
        <button></button>
      </div>
      <ul
        className={
          show
            ? styles.header__content__left__list + " " + styles.show
            : styles.header__content__left__list
        }
      >
        <li>
          <Link href='/orders'>Заказы</Link>
        </li>
        <li>
          <Link href='/freelancers'>Фрилансеры</Link>
        </li>
        <li>
          <Link href='/'>Конкурсы</Link>
        </li>
        <li>
          <Link href='/'>Форум</Link>
        </li>
        <li>
          <Link href='/'>Помощь</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
