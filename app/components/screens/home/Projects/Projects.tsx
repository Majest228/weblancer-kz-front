import styles from "./Projects.module.scss"
import Link from "next/link"

import dynamic from "next/dynamic"

const Project = dynamic(() => import("../Projects/project/Project"), {
  ssr: false,
})

const Projects = ({ orders }) => {

  return (
    <div className={styles.projects}>
      <div className={styles.projects__title}>
        <h3>Последние проекты</h3>
        <Link href='/orders'>Все проекты</Link>
      </div>
      <div className={styles.projects__content}>
        {orders
          ? orders.sort((a, b) => b.views - a.views).slice(0, 6).map((order) => <Project item={order} />)
          : ""}
      </div>
    </div>
  )
}
export default Projects
