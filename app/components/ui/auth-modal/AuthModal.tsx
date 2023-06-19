import { useOutside } from "../../../hooks/hooks"
import React, { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { IAuthForm } from "../auth-form/auth-form.interface"
import styles from "../auth-form/AuthForm.module.scss"
import Field from "../field/Field"
import { validEmail } from "../auth-form/auth.valid"

const AuthModal = ({ str }: any) => {
  const { ref, setIsShow, isShow } = useOutside(false)

  const [type, setType] = useState<"login" | "register">(str)

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IAuthForm>({
    mode: "onChange",
  })
  const onSubmit: SubmitHandler<IAuthForm> = (data) => {}
  return (
    <div>
      <form className={styles.auth__form} onSubmit={handleSubmit(onSubmit)}>
        {type === "register" ? (
          <h3 className={styles.auth__form__title}>Регистрация</h3>
        ) : (
          <h3 className={styles.auth__form__title}>Авторизация</h3>
        )}
        <Field
          {...register("email", {
            required: "Email required",
            pattern: {
              value: validEmail,
              message: "Not validate e-mail",
            },
          })}
          placeholder='Email'
          error={errors.email}
        />
      </form>
    </div>
  )
}

export default AuthModal
