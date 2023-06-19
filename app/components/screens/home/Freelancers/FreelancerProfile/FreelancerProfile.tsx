import React from "react"
import Image from "next/image"
import styles from "./FreelancerProfile.module.scss"
import ProfileAvatar from "../../../../../assets/ProfileAvatar.jpg"
import Star from "../../../../ui/svg/star/star"
import Link from "next/link"
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu"
import useDrag from "../../../../../utils/usedrag.util"

const FreelancerProfile = ({ item }: any) => {
  type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>
  const stars = ["star", "star", "star", "star", "star"]
  const { dragStart, dragStop, dragMove, dragging } = useDrag()
  const handleDrag =
    ({ scrollContainer }: scrollVisibilityApiType) =>
    (ev: React.MouseEvent) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff
        }
      })
  const getAbout =
    item.about.length > 155 ? item.about.slice(0, 105) + "..." : item.about
  function onWheel(
    apiObj: scrollVisibilityApiType,
    ev: React.WheelEvent
  ): void {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15
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
    <div className={styles.freelancer}>
      <div className={styles.freelancer__content}>
        <div className={styles.freelancer__content__smoke}></div>
        <div className={styles.freelancer__content__top}>
          <div className={styles.freelancer__content__top__avatar}>
            <Image
              src={`http://localhost:8080/api/${item.avatarPath}`}
              alt={""}
              width={80}
              height={80}
            />
          </div>
          <div className={styles.freelancer__content__top__info}>
            <div className={styles.freelancer__content__top__info__name}>
              <Link href={`/users/${item.id}`}>
                {item.name} {item.surname}
              </Link>
            </div>
            <div className={styles.freelancer__content__top__info__ratings}>
              <div
                className={
                  styles.freelancer__content__top__info__ratings__stars
                }
              >
                {stars.map((star, i) => (
                  <Star
                    key={i}
                    fill={item.rating >= i + 1 ? "#4db82d" : "#878787"}
                    w={13}
                    h={13}
                  />
                ))}
              </div>
              <div
                className={
                  styles.freelancer__content__top__info__ratings__count
                }
              >
                <p>
                  {item.rating_to == 0 || undefined || null
                    ? 0
                    : item.rating_to.length}{" "}
                  отзывов
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.freelancer__content__middle}>
          <div className={styles.freelancer__content__middle__description}>
            <p dangerouslySetInnerHTML={{ __html: getAbout }}></p>
          </div>
        </div>
        <div className={styles.freelancer__content__bottom}>
          <div onMouseLeave={dragStop}>
            <ScrollMenu
              onMouseDown={() => dragStart}
              onMouseUp={() => dragStop}
              onMouseMove={handleDrag}
              onWheel={onWheel}
            >
              <div
                className={styles.freelancer__content__bottom__tags}
                onDragStart={(e) => e.preventDefault()}
              >
                {item.professionsSelected.length == 0
                  ? ""
                  : item.professionsSelected.map((user: any) => (
                      <div
                        className={
                          styles.freelancer__content__bottom__tags__tag
                        }
                        onDragStart={(e) => e.preventDefault()}
                      >
                        <p onDragStart={(e) => e.preventDefault()}>
                          {user?.professions?.name}
                        </p>
                      </div>
                    ))}
              </div>
            </ScrollMenu>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FreelancerProfile
