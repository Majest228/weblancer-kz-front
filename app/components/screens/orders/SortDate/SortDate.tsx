import React from "react"
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu"
import useDrag from "../../../../utils/usedrag.util"
import styles from "./SortDate.module.scss"

const SortDate = () => {
  type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>
  const { dragStart, dragStop, dragMove, dragging } = useDrag()
  const handleDrag =
    ({ scrollContainer }: scrollVisibilityApiType) =>
    (ev: React.MouseEvent) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff
        }
      })
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
    <div className={styles.date}>
      <div className={styles.date__content}>
        <ScrollMenu
          onMouseDown={() => dragStart}
          onMouseUp={() => dragStop}
          onMouseMove={handleDrag}
          onWheel={onWheel}
        >
          <ul
            onDragStart={(e) => e.preventDefault()}
            className='date__content__ul'
            onMouseLeave={dragStop}
            onTouchEnd={dragStop}
          >
            <li className='date__content__ul__li'>
              <p onDragStart={(e) => e.preventDefault()} className={styles.top}>
                Новые
              </p>
            </li>
            <li className='date__content__ul__li'>
              <p onDragStart={(e) => e.preventDefault()}>Релевантные</p>
            </li>
            <li className='date__content__ul__li'>
              <p onDragStart={(e) => e.preventDefault()} className={styles.top}>
                За всё время
              </p>
            </li>
            <li className='date__content__ul__li'>
              <p onDragStart={(e) => e.preventDefault()}>За сутки</p>
            </li>
            <li className='date__content__ul__li'>
              <p onDragStart={(e) => e.preventDefault()}>За три дня</p>
            </li>
            <li className='date__content__ul__li'>
              <p onDragStart={(e) => e.preventDefault()}>За неделю</p>
            </li>
          </ul>
        </ScrollMenu>
      </div>
    </div>
  )
}

export default SortDate
