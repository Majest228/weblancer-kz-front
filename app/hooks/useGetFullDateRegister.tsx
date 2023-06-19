import { dateRegister } from "../utils/date.util"
import React from "react"

export const useGetFullDateRegister = (currentDate: any, newReg: any) => {
  let newDate = +dateRegister(newReg)
  if (newDate < 12) {
    return <p>{newDate} месяцев на сервисе</p>
  } else if (newDate > 12) {
    return <p>{parseInt(String(newDate / 12))} год на сервисе</p>
  }
}
