import React from "react"

const OfflineStatus = ({ fill = "#D1D1D1", r = 10 }: any) => {
  return (
    <svg height={r} width={r}>
      <circle cx={r / 2} cy={r / 2} r={r / 2} fill={fill} />
    </svg>
  )
}

export default OfflineStatus
