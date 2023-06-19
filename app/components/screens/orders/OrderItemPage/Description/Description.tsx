import React from "react"
import styles from "./Description.module.scss"
import Image from "next/image"
import Example from "../../../../../assets/ExampleFigma.jpg"

const Description = ({ description, isLoading }: any) => {
  const getDesc = !isLoading ? description : ""
  return (
    <div className={styles.OrderItem__description}>
      <div className={styles.OrderItem__description__content}>
        <div
          dangerouslySetInnerHTML={{ __html: getDesc }}
          className={styles.OrderItem__description__content__text}
        ></div>
        <div className={styles.OrderItem__description__content__docs}>
          {/* <div className={styles.OrderItem__description__content__docs__title}>
            <p>Приложения</p>
          </div> */}
          {/* <div
            className={styles.OrderItem__description__content__docs__example}
          >
            <div
              className={
                styles.OrderItem__description__content__docs__example__item
              }
            >
              <Image src={Example} alt={""} />
            </div>
            <div
              className={
                styles.OrderItem__description__content__docs__example__item
              }
            >
              <Image src={Example} alt={""} />
            </div>
            <div
              className={
                styles.OrderItem__description__content__docs__example__item
              }
            >
              <Image src={Example} alt={""} />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Description
