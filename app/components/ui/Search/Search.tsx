import React from "react"
import styles from "./Search.module.scss"
import Filters from "../svg/filters/filters"
import SearchSvg from "../svg/SearchSvg/SearchSvg"
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks"
import {
  updateSearch,
  changeShowFilter,
} from "../../../store/filters/filters.slice"

const Search = ({ placeholder }: any) => {
  const dispatch = useAppDispatch()
  return (
    <div className={styles.search}>
      <div className={styles.search__input}>
        <input
          type={"text"}
          placeholder={placeholder}
          onChange={(e) => dispatch(updateSearch(e.target.value))}
        />
        <div className={styles.search__input__ico}>
          <SearchSvg />
        </div>
      </div>
      <div
        className={styles.search__filters}
        onClick={() => dispatch(changeShowFilter())}
      >
        <Filters />
      </div>
    </div>
  )
}

export default Search
