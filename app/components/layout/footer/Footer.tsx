import React from "react"
import styles from "./Footer.module.scss"
import Link from "next/link"
import { NextPageAuth } from "../../../providers/private.route.interface"

const Footer: NextPageAuth = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__content}>
          <div className={styles.footer__content__service}>
            <ul>
              <li>
                <Link href={"/"}>О сервисе</Link>
              </li>
              <li>
                <Link href={"/"}>О компании</Link>
              </li>
              <li>
                <Link href={"/"}>Контакты</Link>
              </li>
              <li>
                <Link href={"/"}>Отзывы</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer__content__users}>
            <ul>
              <li>
                <Link href={"/"}>Пользователям</Link>
              </li>
              <li>
                <Link href={"/"}>Задачи и теги</Link>
              </li>
              <li>
                <Link href={"/"}>Фриланс заказы</Link>
              </li>
              <li>
                <Link href={"/"}>Партнёрская программа</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer__content__help}>
            <ul>
              <li>
                <Link href={"/"}>Помощь</Link>
              </li>
              <li>
                <Link href={"/"}>Помощь</Link>
              </li>
              <li>
                <Link href={"/"}>Правила сервиса</Link>
              </li>
              <li>
                <Link href={"/"}>Служба поддержки</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer__content__support}>
            <ul>
              <li>
                <Link href={"/"}>support@kazfl.kz</Link>
              </li>
              <li>
                <Link href={"/"}>Ежедневно с 8:00 до 22:00</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footer__information}>
          <div className={styles.footer__information__domain}>
            <p>Kazfl.kz © 2022</p>
          </div>
          <div className={styles.footer__information__agreement}>
            <p>Пользовательское соглашение</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.isOnlyUser = false

export default Footer
