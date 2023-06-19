import React from "react"
import styles from "../FreelancersPage.module.scss"
import FreelancerItem from "./FreelancerItem/FreelancerItem"
import { useGetAllFrellancersQuery } from "../../../../store/users/users.api"
import { useAppSelector } from "../../../../hooks/hooks"
import { IOrders } from "../../../../store/orders/orders.interface"

const Freelancers = ({ freelancers }) => {
  const filters = useAppSelector((state) => state.filters)

  function contains(where: string[], what: string[]) {
    for (var i = 0; i < what.length; i++) {
      if (where.indexOf(what[i]) == -1) return false
    }
    return true
  }

  function Filter(freelancers: any = [], filters: any = {}) {
    const keys = Object.keys(filters).filter((key) =>
      filters.hasOwnProperty(key)
    )
    return freelancers.filter((elem: any) => {
      const commonKeys = keys.filter((key) => elem.hasOwnProperty(key))
      return commonKeys.reduce((flag: boolean, key: string): any => {
        if (key == "title") {
          return flag
        }
        if (key == "name") {
          let search = elem[key] + elem.surname + elem.login

          if (search.toUpperCase().includes(filters.name[0].toUpperCase()))
            return flag
          else return false
        }
        if (key == "price") {
          if (elem[key] >= filters[key][0] && elem[key] <= filters[key][1])
            return flag
          else return false
        }
        if (key == "professionsSelected") {
          if (filters[key].length == 0) return flag
          const profSel = elem[key].reduce((acc, item) => {
            acc.push(item.professions.name)
            return acc
          }, [])
          if (contains(profSel, filters[key])) return flag
          else return false
        }
      }, true)
    })
  }

  const filterData = Filter(freelancers, filters)
  console.log(freelancers)
  return (
    <div className={styles.freelancer__items}>
      {filterData?.map((item) => (
        <FreelancerItem item={item} />
      ))}
    </div>
  )
}

export default Freelancers
