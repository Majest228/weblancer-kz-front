import React from "react"

const Close = ({ fill = "blue", w = 20, h = 20 }: any) => {
  return (
    <svg fill={fill} width={w} height={h} viewBox='0 0 5 9'>
      <path d='M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z'></path>
    </svg>
  )
}

export default Close
