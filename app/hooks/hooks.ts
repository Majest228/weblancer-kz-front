import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { AppDipsatch, RootState } from "../store/store"
import { useEffect, useRef, useState } from "react"
import { bindActionCreators } from "redux"

export const useAppDispatch = () => useDispatch<AppDipsatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useOnClickOutside = (ref: any, handler: any) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    }
    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)
    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [ref, handler])
}
