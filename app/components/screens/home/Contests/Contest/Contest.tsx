import styles from "./Contest.module.scss"
import Eye from "../../../../ui/svg/eye/eye"
import Quest from "../../../../ui/svg/quest/quest"
const Contest = (): JSX.Element => {
  return (
    <div className={styles.contest}>
      <div className={styles.contest__content}>
        <div className={styles.contest__content__top}>
          <div className={styles.contest__content__top__title}>
            <p>Разработать Мобильное приложение для интернет магазина</p>
          </div>
        </div>
        <div className={styles.contest__content__middle}>
          <div className={styles.contest__content__middle__left}>
            <div className={styles.contest__content__middle__left__price}>
              <p>Договорная</p>
            </div>
            <div className={styles.contest__content__middle__left__feedback}>
              <p>25 откликов</p>
            </div>
          </div>
          <div className={styles.contest__content__middle__right}>
            <div className={styles.contest__content__middle__right__ends}>
              <p>Через день</p>
              <div
                className={styles.contest__content__middle__right__ends__quest}
              >
                {" "}
                <Quest />
              </div>
            </div>
            <div className={styles.contest__content__middle__right__views}>
              <div
                className={styles.contest__content__middle__right__views__ico}
              >
                <Eye w={20} h={20} />
              </div>
              <div
                className={styles.contest__content__middle__right__views__count}
              >
                <p>232</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contest__content__bottom}>
          <div className={styles.contest__content__bottom__tags}>
            <div className={styles.contest__content__bottom__tags__tag}>
              <p>Дизайн сайтов</p>
            </div>
            <div className={styles.contest__content__bottom__tags__tag}>
              <p>Дизайн сайтов</p>
            </div>
            <div className={styles.contest__content__bottom__tags__tag}>
              <p>Дизайн сайтов</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contest
