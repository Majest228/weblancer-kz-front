import React from "react"
import styles from "../Profile.module.scss"
import Link from "next/link"

import ReviewItem from "./ReviewItem/ReviewItem"

const Review = ({ item }) => {
  return (
    <div className={styles.profile__about__content__left__review__content}>
      <ReviewItem item={item} />
    </div>
  )
}

export default Review
