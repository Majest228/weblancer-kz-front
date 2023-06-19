import React from "react"

const ArrowIco = ({ fill = "none", stroke = "none", w = 10, h = 10 }: any) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox='0 0 12 10'
      fill={fill}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M10.3327 3.33334L5.99935 8.00001L1.66602 3.33334'
        stroke={stroke}
        strokeLinecap='square'
      />
    </svg>
  )
}

export default ArrowIco
