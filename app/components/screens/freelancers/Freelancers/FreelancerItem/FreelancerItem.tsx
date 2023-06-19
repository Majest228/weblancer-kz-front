import styles from "../../../freelancers/FreelancersPage.module.scss"
import Image from "next/image"
import Link from "next/link"
import OfflineStatus from "../../../../ui/svg/offlineStatus/offlineStatus"
import React from "react"
import HomeIco from "../../../../ui/svg/home/home"
import { useGetFullDateRegister } from "../../../../../hooks/useGetFullDateRegister"
import dayjs from "dayjs"
import Star from "../../../../ui/svg/star/star"
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu"
import useDrag from "../../../../../utils/usedrag.util"
import { LeftArrow, RightArrow } from "../../../../../utils/arrows"

const FreelancerItem: any = ({ item }: any) => {
  let regDate = item?.createdAt
    ? dayjs(item.createdAt).format("YYYY,MM,DD")
    : ""
  let newReg = regDate.split(",")
  type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>
  let currentDate = new Date()
  const getFullDateRegister = useGetFullDateRegister(currentDate, newReg)
  const { dragStart, dragStop, dragMove, dragging } = useDrag()
  const handleDrag =
    ({ scrollContainer }: scrollVisibilityApiType) =>
    (ev: React.MouseEvent) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff
        }
      })

  const stars = ["star", "star", "star", "star", "star"]
  const rating = item ? item.rating : 0
  function onWheel(
    apiObj: scrollVisibilityApiType,
    ev: React.WheelEvent
  ): void {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15
    console.log(isThouchpad)
    if (isThouchpad) {
      ev.stopPropagation()
      return
    }

    if (ev.deltaY < 0) {
      apiObj.scrollNext()
    } else if (ev.deltaY > 0) {
      apiObj.scrollPrev()
    }
  }
  return (
    <div className={styles.freelancer__items__item}>
      <div className={styles.freelancer__items__item__container}>
        <div className={styles.freelancer__items__item__content}>
          <div className={styles.freelancer__items__item__content__left}>
            <Image
              src={`http://localhost:8080/api/${item.avatarPath}`}
              alt='user'
              width={153}
              height={154}
            />
            <div
              className={styles.freelancer__items__item__content__left__desc}
            >
              <div
                className={
                  styles.freelancer__items__item__content__left__desc__name
                }
              >
                {item ? (
                  <>
                    <Link href={`/users/${item.id}`}>
                      {item.name} {item.surname}
                    </Link>
                    <span>{item.login}</span>
                  </>
                ) : (
                  ""
                )}
              </div>
              <div
                className={
                  styles.freelancer__items__item__content__left__desc__country
                }
              >
                <p>{item?.countries ? item.countries.name : ""}</p>
              </div>
              <div
                className={
                  styles.freelancer__items__item__content__left__desc__status
                }
              >
                <OfflineStatus r={10} />
                <p>Был онлайн 14 часов назад</p>
              </div>
              <div
                className={
                  styles.freelancer__items__item__content__left__desc__date
                }
              >
                <HomeIco w={10} h={10} />
                {getFullDateRegister}
              </div>
              <div
                className={
                  styles.freelancer__items__item__content__left__desc__stars
                }
              >
                {stars.map((star, i) => (
                  <div
                    className={
                      styles.freelancer__items__item__content__left__desc__stars__star
                    }
                  >
                    <Star fill={rating >= i + 1 ? "#4db82d" : "#878787"} />
                  </div>
                ))}
                <p>
                  {item ? item?.rating_to.length : ""}
                  <span>отзыва</span>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.freelancer__items__item__content__center}>
            <div
              className={styles.freelancer__items__item__content__center__top}
            >
              <p
                className={
                  styles.freelancer__items__item__content__center__top__hour
                }
              >
                $10 / час{" "}
              </p>
              <div
                className={styles.freelancer__items__item__content__top__right}
              >
                <p>#1</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        onMouseLeave={() => dragStop()}
        className={styles.freelancer__items__item__content__center__bottom}
      >
        <ScrollMenu
          onWheel={onWheel}
          onMouseDown={() => dragStart}
          onMouseUp={() => dragStop}
          onMouseMove={handleDrag}
        >
          <div onMouseLeave={() => dragStop}>
            <div
              onDragStart={(e) => e.preventDefault()}
              className={
                styles.freelancer__items__item__content__center__bottom__tags
              }
            >
              {item.professionsSelected.length == 0
                ? ""
                : item.professionsSelected.map((user: any) => (
                    <div
                      onDragStart={(e) => e.preventDefault()}
                      className={
                        styles.freelancer__items__item__content__center__bottom__tags__tag
                      }
                    >
                      <p onDragStart={(e) => e.preventDefault()}>
                        {user?.professions?.name}
                      </p>
                    </div>
                  ))}
            </div>
          </div>
        </ScrollMenu>
      </div>
    </div>
  )
}

export default FreelancerItem
