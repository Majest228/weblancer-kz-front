import React, { forwardRef } from "react"
import styles from "./Field.module.scss"
import { IField } from "./field.interface"

const Field = forwardRef<HTMLInputElement, IField>(
  ({ error, label, type = "text", htmlFor, ...rest }, ref) => {
    return (
      <div className={styles.input}>
        <div className={styles.input__content}>
          <input ref={ref} type={type} {...rest} />
          <label htmlFor={htmlFor}>{label}</label>
        </div>
        {error && <div className={styles.error}>{error.message}</div>}
      </div>
    )
  }
)

export default Field
