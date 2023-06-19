import React from "react"
import Link from "next/link"
import Image from "next/image"
import item from "../../../../assets/item.jpg"
import styles from "../Profile.module.scss"

const Portfolio = () => {
  return (
    <div className={styles.profile__about__content__left__portfolio}>
      <div className={styles.profile__about__content__left__portfolio__header}>
        <h3>Работы в портфолио</h3>
        <Link href='/'>Смотреть все работы</Link>
      </div>
      <div className={styles.profile__about__content__left__portfolio__content}>
        <Image src={item} width={276} height={180} alt='item' />
        <Image src={item} width={276} height={180} alt='item' />
        <Image src={item} width={276} height={180} alt='item' />
        <Image src={item} width={276} height={180} alt='item' />
        <Image src={item} width={276} height={180} alt='item' />
        <Image src={item} width={276} height={180} alt='item' />
      </div>
    </div>
  )
}

export default Portfolio
