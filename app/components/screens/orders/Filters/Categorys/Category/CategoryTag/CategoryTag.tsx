import styles from "./CategoryTag.module.scss"

const CategoryTag = ({ name = "ошибка", state = false }) => {
  return (
    <div className={styles.tag}>
      <div className={styles.tag__item}>
        <div className={styles.tag__item__checkbox}>
          <label>
            <input type={"checkbox"} defaultChecked={state} />
            <div className={styles.tag__item__checkbox__input}></div>
            <p>{name}</p>
          </label>
          <div className={styles.tag__item__count}>
            <p>1059</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CategoryTag
