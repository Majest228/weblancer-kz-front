import styles from "./Project.module.scss"
import Image from "next/image"
import Eye from "../../../../ui/svg/eye/eye"
import Link from "next/link"
import { useUpdateViewMutation } from "../../../../../store/orders/orders.api"

const Project = ({ item }: any) => {

  const getDateOrder = () => {
    console.log("item", item)
    let a = +new Date()
    let b = +new Date(item?.createdAt)
    let res = (a - b) / 1000 / 60
    let hours = parseInt(res / 60)
    let day = parseInt(hours / 24)
    if (hours > 24) {
      switch (day) {
        case 1:
          return <p>{day} день назад</p>
          break
        case 2:
        case 3:
        case 4:
          return <p>{day} дня назад</p>
          break
        default:
          return <p>{day} дней назад</p>
          break
      }
    } else if (res > 60) {
      return <p>{hours} час назад</p>
    } else {
      return <p>{parseInt(res)} минут назад</p>
    }
  }

  const [updateView] = useUpdateViewMutation()

  const updateState = async (id) => {
    updateView(id)
  }


  return (
    <div className={styles.project} key={item.id}>
      <div className={styles.project__content}>
        <div className={styles.project__content__top}>
          <div className={styles.project__content__top__title}>
            <Link onClick={() => updateState(item.id)} href={`/orders/${item.id}`}>{item.title}
            </Link>
          </div>
        </div>
        <div className={styles.project__content__middle}>
          <div className={styles.project__content__middle__left}>
            <div className={styles.project__content__middle__left__price}>
              <p>{item.price == 0 ? "Договорная" : item.price + " " + "тг."}</p>
            </div>
            <div className={styles.project__content__middle__left__feedback}>
              <p>{item?.ordersResponse
                .length} откликов</p>
            </div>
          </div>
          <div className={styles.project__content__middle__right}>
            <div className={styles.project__content__middle__right__added}>
              <p>{getDateOrder()}</p>
            </div>
            <div className={styles.project__content__middle__right__views}>
              <div
                className={styles.project__content__middle__right__views__ico}
              >
                <Eye w={20} h={20} />
              </div>
              <div
                className={styles.project__content__middle__right__views__count}
              >
                <p>{item.views}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.project__content__bottom}>
          <div className={styles.project__content__bottom__tags}>
            <div className={styles.project__content__bottom__tags__tag}>
              <p>Дизайн сайтов</p>
            </div>
            <div className={styles.project__content__bottom__tags__tag}>
              <p>Дизайн сайтов</p>
            </div>
            <div className={styles.project__content__bottom__tags__tag}>
              <p>Дизайн сайтов</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
