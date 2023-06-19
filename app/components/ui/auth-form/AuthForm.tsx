import React, { FC, useEffect, useRef, useState, forwardRef } from "react"
import { useAppDispatch, useOnClickOutside } from "../../../hooks/hooks"
import { SubmitHandler, useForm } from "react-hook-form"
import { IAuthForm } from "./auth-form.interface"
import styles from "./AuthForm.module.scss"
import Field from "../field/Field"
import { validEmail } from "./auth.valid"
import { ToastContainer } from "react-toastify"
import cookies from "js-cookie"
import { NextPageAuth } from "../../../providers/private.route.interface"
import { useActions } from "../../../hooks/useActions"
import { useAuth } from "../../../hooks/useAuth"
import { useGetMeQuery } from "../../../store/users/users.api"
import { getMe } from "../../../store/users/users.actions"
import { useRouter } from "next/router"

const AuthForm: NextPageAuth = ({ str, role }: any) => {
  const { register: registerAction, login } = useActions()
  const { isLoading } = useAuth()
  const [type, setType] = useState<"login" | "register">(str)
  const [isShow, setIsShow] = useState(false)
  const [roleId, setRoleId] = useState<2 | 3>(role)
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<IAuthForm>({
    defaultValues: {
      email: "",
      password: "",
      roleId: 3,
    },
    mode: "onChange",
  })

  console.log(roleId)

  const escape = useRef<HTMLElement>(null)
  const outside = useRef<HTMLElement>(null)

  const handleEscape = (event: any) => {
    if (event.keyCode == 27) setIsShow(false)
  }

  useEffect(() => {
    setValue("roleId", roleId)
  }, [roleId])

  useOnClickOutside(outside, () => setIsShow(false))

  const roles = [
    {
      id: 2,
      name: "Исполнитель",
    },
    {
      id: 3,
      name: "Заказчик",
    },
  ]

  useEffect(() => {
    if (isShow) document.addEventListener("keydown", handleEscape, false)
    return () => {
      document.addEventListener("keydown", handleEscape, false)
    }
  }, [handleEscape, isShow])

  const onSubmit: SubmitHandler<IAuthForm> = async (values) => {
    if (type == "register") {
      registerAction(values)
      setIsShow(false)
    } else {
      login(values)
      setIsShow(false)
    }
  }
  return (
    <div className={styles.auth__wrapper}>
      {str == "login" ? (
        <button
          onClick={() => setIsShow(!isShow)}
          className={styles.auth__login}
        >
          Войти
        </button>
      ) : str == "register" && roleId == 2 ? (
        <button
          onClick={() => setIsShow(!isShow)}
          className={styles.auth__role__register}
        >
          Стать исполнителем
        </button>
      ) : (
        <button
          onClick={() => setIsShow(!isShow)}
          className={styles.auth__register}
        >
          Регистрация
        </button>
      )}

      {isShow && (
        <div className={styles.auth__modal} ref={escape}>
          <form
            className={styles.auth__form}
            ref={outside}
            onSubmit={handleSubmit(onSubmit)}
          >
            {type === "register" && roleId == 2 ? (
              <h3 className={styles.auth__form__title}>
                Регистрация заказчика
              </h3>
            ) : type === "register" && roleId == 3 ? (
              <h3 className={styles.auth__form__title}>
                Регистрация фрилансера
              </h3>
            ) : type == "login" ? (
              <h3 className={styles.auth__form__title}>Авторизация</h3>
            ) : (
              <h3 className={styles.auth__form__title}>Регистрация</h3>
            )}
            <div className={styles.auth__form__input__roles}>
              {type === "register" && roleId == 2
                ? ""
                : type === "register" && roleId == 3
                ? ""
                : type == "login"
                ? ""
                : roles.map((role) => (
                    <div className={styles.auth__form__input__roles__role}>
                      <input
                        type='radio'
                        id={role.id}
                        name='role'
                        value={role.id}
                        {...register("roleId", { required: "Укажите почту" })}
                      />
                      <label htmlFor={role.id}>
                        <div
                          className={
                            styles.auth__form__input__roles__role__item
                          }
                        >
                          <p>{role.name}</p>
                        </div>
                      </label>
                    </div>
                  ))}
            </div>
            <Field
              {...register("email", {
                required: "Email required",
                pattern: {
                  value: validEmail,
                  message: "Not validate e-mail",
                },
              })}
              placeholder='antonanton@gmail.com'
              error={errors.email}
              label='Электронная почта  *'
              autoComplete='off'
            />
            <Field
              {...register("password", {
                required: "Password required",
                minLength: {
                  value: 8,
                  message: "Пароль должен быть более 8-ми символов",
                },
              })}
              placeholder='Пароль'
              error={errors.password}
              label='Пароль  *'
              type='password'
            />

            {type == "login" ? (
              <button type='submit' className={styles.auth__button}>
                Войти
              </button>
            ) : (
              <button type='submit' className={styles.auth__button}>
                Зарегистрироваться
              </button>
            )}

            {type == "login" ? (
              <div className={styles.auth__footer}>
                <button className={styles.auth__swap}>
                  Зарегистрироваться
                </button>
              </div>
            ) : (
              <div className={styles.auth__footer}>
                <button className={styles.auth__swap}>Войти </button>
                <span>в существующий профиль</span>
              </div>
            )}
          </form>
        </div>
      )}
      <ToastContainer />
    </div>
  )
}

export default AuthForm
