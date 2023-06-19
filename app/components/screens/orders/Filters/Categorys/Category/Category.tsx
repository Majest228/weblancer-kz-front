import styles from "./Category.module.scss"
import CategoryTag from "./CategoryTag/CategoryTag"
import { useState } from "react"

const Category = ({ name = "ошибка", children }: any) => {
  const [showTags, setShowTags] = useState(false)
  const [allTrue, setAllTrue] = useState(false)
  return (
    <div className={styles.category}>
      <div className={styles.category__item}>
        <div className={styles.category__item__checkbox}>
          <label>
            <input
              type={"checkbox"}
              onChange={(e) => {
                setAllTrue(!allTrue)
              }}
            />
            <div className={styles.category__item__checkbox__input}></div>
            <p>{name}</p>
          </label>
          <div className={styles.category__item__count}>
            <p>1059</p>
          </div>
        </div>

        <button
          className={`${styles.category__item__arrow} ${
            showTags ? styles.clicked : ""
          }`}
          onClick={() => setShowTags(!showTags)}
        ></button>
      </div>
      <div
        className={`${styles.category__tags} ${showTags ? styles.show : ""}`}
      >
        {children.map((tag: any) => (
          <CategoryTag name={tag.name} state={allTrue} />
        ))}
      </div>
    </div>
  )
}
export default Category
