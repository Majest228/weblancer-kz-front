import styles from "./Award.module.scss"
import { useAppDispatch } from "../../../../../hooks/hooks"
import {
  updateMaxPrice,
  updateMinPrice,
} from "../../../../../store/filters/filters.slice"

const Award = ({type='order'}) => {
  console.log(type)
  const dispatch = useAppDispatch()
  return (
    <div className={styles.award}>
      <div className={styles.award__title}>{type== 'order'? <p>Вознаграждение за проект</p> : <p>Оплата за час</p>}</div>
      <div className={styles.award__inputs}>
        <div className={styles.award__inputs__input}>
          <input
            type={"number"}
            placeholder={"0"}
            onChange={(e) => dispatch(updateMinPrice(e.target.value))}
          />
        </div>
        <div className={styles.award__inputs__input}>
          <input
            type={"number"}
            placeholder={"13 990"}
            onChange={(e) => dispatch(updateMaxPrice(e.target.value))}
          />
        </div>
      </div>
    </div>
  )
}
export default Award
