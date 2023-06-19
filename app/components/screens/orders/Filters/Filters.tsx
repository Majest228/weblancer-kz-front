import React from "react"
import styles from "./Filters.module.scss"
import Category from "./Categorys/Category/Category"
import Award from "./Award/Award"
import Categorys from "./Categorys/Categorys"
import "./Categorys/Category/Category.module.scss"
import Close from "../../../ui/svg/close/close"
import { useAppSelector } from "../../../../hooks/hooks"
import { useAppDispatch } from "../../../../hooks/hooks"
import { changeShowFilter } from "../../../../store/filters/filters.slice"
const Filters = ({ type = "order", categorys }) => {
  const dispatch = useAppDispatch()
  const { showFilter } = useAppSelector((state) => state.filters)
  return (
    <div
      className={
        showFilter ? styles.filter : styles.filter + " " + styles.filter__none
      }
    >
      <div className={styles.filter__content}>
        <div
          className={styles.filter__content__close}
          onClick={() => dispatch(changeShowFilter())}
        >
          <Close />
        </div>
        <div className={styles.filter__content__title}>
          <p>Категории</p>
        </div>
        <div className={styles.filter__content__categorys}>
          <Categorys categorys={categorys} />
        </div>
        <Award type={type} />
      </div>
    </div>
  )
}

export default Filters
