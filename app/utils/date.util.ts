import dayjs from "dayjs"
// With a custom alias for the locale object

export const dateRegister = (date) => {
  let currentDate = new Date()
  let res = 0
  return (res =
    (currentDate.getDate() - date[2]) / 30 +
    (currentDate.getMonth() + 1) -
    date[1] +
    12 * (currentDate.getFullYear() - date[0])).toFixed()
}
