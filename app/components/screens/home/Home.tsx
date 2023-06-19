import React, { FC } from "react"
import Layout from "../../layout/Layout"
import Intro from "./Intro/Intro"
import Freelancers from "./Freelancers/Freelancers"
import styles from "./Home.module.scss"
import Projects from "./Projects/Projects"
import Contests from "./Contests/Contests"
import { Meta } from "../../../utils/meta/Meta"

const Home: FC = ({ freelancers, orders }: any) => {
  const title = "Главная страница"
  const description = "Страница начальная, со всей информацией"
  return (
    <Meta title={title} description={description}>
      <Layout>
        <div className={styles.home}>
          <Intro />
          <div className={styles.home__container}>
            <div className={styles.home__content}>
              <Freelancers freelancers={freelancers} />
              <Projects orders={orders} />
              <Contests />
            </div>
          </div>
        </div>
      </Layout>
    </Meta>
  )
}

export default Home
