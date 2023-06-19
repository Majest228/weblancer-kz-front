import styles from "./Intro.module.scss"
const Intro = ({ title, count, count_title }: any) => {
  return (
    <div className={styles.intro}>
      <div className={styles.intro__content}>
        <div className={styles.intro__content__title}>
          <p>Поиск {title}</p>
        </div>
        <div className={styles.intro__content__count}>
          <p>
            {count} {count_title}
          </p>
        </div>
      </div>
      <div className={styles.intro__line}></div>
    </div>
  )
}
export default Intro
