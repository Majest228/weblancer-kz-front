import React from "react"

const Verify = ({
  fill = "#E3FFDB",
  stroke = "#4DB82D",
  w = 22,
  h = 22,
}: any) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox='0 0 22 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        x='0.5'
        y='0.5'
        width='21'
        height='21'
        rx='10.5'
        fill={fill}
        stroke={stroke}
      />
      <path d='M6.28613 10.8151L9.54987 14.1429L15.7147 7.85715' fill={fill} />
      <path
        d='M6.28613 10.8151L9.54987 14.1429L15.7147 7.85715'
        stroke={stroke}
        stroke-linecap='square'
      />
    </svg>
  )
}

export default Verify
