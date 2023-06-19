import React from "react"

const Quest = ({ fill = "#026BCB", w = 16, h = 16 }: any) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M8 9.5V8H8.5C9.32843 8 10 7.32843 10 6.5V6.4C10 5.6268 9.3732 5 8.6 5H8C7.17157 5 6.5 5.67157 6.5 6.5M7.5 11H8.5M8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15Z'
        stroke={fill}
      />
    </svg>
  )
}

export default Quest
