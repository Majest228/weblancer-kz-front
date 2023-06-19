import React, { FC } from "react"
import Layout from "../../layout/Layout"
import Intro from "../../ui/Intro/Intro"
import styles from "../freelancers/FreelancersPage.module.scss"
import Search from "../../ui/Search/Search"
import Filters from "../orders/Filters/Filters"
import Freelancers from "./Freelancers/Freelancers"
import { useAppDispatch } from "../../../hooks/hooks"
import { initialLoadOrder } from "../../../store/filters/filters.slice"
import { Meta } from "../../../utils/meta/Meta"

const FreelancersPage: FC = ({ freelancers, categorys }) => {
  const dispatch = useAppDispatch()
  dispatch(initialLoadOrder())
  const titleMeta = "Фрилансеры"
  const description = "Личная страничка "
  return (
    <Meta Meta title={titleMeta} description={description}>
      <Layout>
        <div className={styles.freelancer}>
          <Intro
            title='фрилансеров'
            count={freelancers?.length}
            count_title='фрилансеров'
          />
          <div className={styles.freelancer__container}>
            <div className={styles.freelancer__content}>
              <div className={styles.freelancer__content__freelancer}>
                <div
                  className={styles.freelancer__content__freelancer__content}
                >
                  <Search placeholder='Искать фрилансера на сайте' />
                  <Freelancers freelancers={freelancers} />
                </div>
                <Filters type={"freelancer"} categorys={categorys} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Meta>
  )
}

export default FreelancersPage
