import React from "react"
import styles from "./Intro.module.scss"
import intro from "../../../../assets/intro.png"
import Image from "next/image"
import Link from "next/link"
import AuthForm from "../../../ui/auth-form/AuthForm"
import FlagKz from "../../../ui/svg/FlagKz/FlagKz"
const Intro = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.intro__container}>
        <div className={styles.intro__content}>
          <div className={styles.intro__content__left}>
            <h3 className={styles.intro__content__left__title}>
              Лучшая фриланс биржа Казахстана
            </h3>
            <p className={styles.intro__content__left__description}>
              Разместите свой заказ на бирже или станьте исполнителем
            </p>
            <div className={styles.intro__content__left__buttons}>
              <Link
                href='orders/create'
                className={styles.intro__content__left__buttons__order}
              >
                Разместить заказ
              </Link>
              <AuthForm str='register' role={2} />
            </div>
          </div>
          <div className={styles.intro__content__right}>
            <FlagKz />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
