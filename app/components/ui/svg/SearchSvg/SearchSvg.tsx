import React from "react"

const SearchSvg = ({ fill = "none", w = 24, h = 24 }: any) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox='0 0 24 25'
      fill={fill}
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='12' cy='12' r='11' stroke='#4DB82D' stroke-width='2' />
      <path d='M4.5 20L1 23.5' stroke='#4DB82D' stroke-width='2' />
    </svg>
  )
}

export default SearchSvg
