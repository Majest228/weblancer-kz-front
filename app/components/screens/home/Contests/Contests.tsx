import React from "react"
import styles from "./Contests.module.scss"
import Link from "next/link"
import Contest from "./Contest/Contest"

const Contests = () => {
  return (
    <div className={styles.contests}>
      <div className={styles.contests__title}>
        <h3>Конкурсы</h3>
        <Link href='/'>Все проекты</Link>
      </div>
      <div className={styles.contests__content}>
        {[...new Array(6)].map(() => <Contest />)}
      </div>
    </div>
  )
}

export default Contests
