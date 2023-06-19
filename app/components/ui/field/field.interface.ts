import { FieldError } from "react-hook-form"
import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react"

export interface IFieldProps {
  error?: FieldError
  label?: string
  htmlFor?: string
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps

export interface IField extends TypeInputPropsField {}
