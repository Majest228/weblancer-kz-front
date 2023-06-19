export const replaceNumber = (num: number) => {
  if (num >= 1000000)
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "М"
  if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, "") + "К"
  return num
}
