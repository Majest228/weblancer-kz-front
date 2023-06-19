import React, { useEffect, useRef, useState } from "react"
import styles from "./ProfileModal.module.scss"
import {
  useGetMeQuery,
  useUpdatePhotoMutation,
  useUpdateProfileMutation,
} from "../../../store/users/users.api"
import Image from "next/image"
import useravatr from "../../../assets/user.jpg"
import style from "../../screens/profile/Profile.module.scss"
import {
  useAppDispatch,
  useAppSelector,
  useOnClickOutside,
} from "../../../hooks/hooks"
import Link from "next/link"
import Pencil from "../svg/pencil/pencil"
import apiAxios from "../../../api/api"
import cookies from "js-cookie"
import {
  useGetAllQuery,
  useGetCountryQuery,
} from "../../../store/countries/countries.api"
import { SubmitHandler, useForm } from "react-hook-form"
import { IAuthForm } from "../auth-form/auth-form.interface"
import ImageEdit from "../svg/imageEdit/imageEdit"

const ProfileModule = () => {
  const [isShow, setIsShow] = useState(false)

  const { data: user, isLoading: isLoadingUser } = useGetMeQuery("")
  const { data: countries, isLoading: isLoadingCountries } =
    useGetCountryQuery("")
  const { data: cities, isLoading: isLoadingCity } = useGetAllQuery("")
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IAuthForm>({
    mode: "onChange",
  })

  useEffect(() => {
    setCity(isLoadingUser ? "" : user.city)
  }, [user])

  const [updateProfile] = useUpdateProfileMutation()
  const [updatePhoto] = useUpdatePhotoMutation()

  const onSubmit: SubmitHandler<IAuthForm> = async (values) => {
    updateProfile({ ...values, countriesId: country, cityId: city ? city : 2 })
      .unwrap()
      .then(() => console.log("test"))
    setIsShow(!isShow)
    imageUrl != "" ? saveImage() : ""
  }

  const result = useGetMeQuery("")

  const [country, setCountry] = useState(1)
  const [city, setCity] = useState(
    isLoadingUser ? 2 : user == null ? 2 : user.city == null ? 2 : user.city.id
  )
  const inputRef = useRef(null)
  const [imageUrl, setImageUrl] = useState("")
  const outside = useRef<HTMLElement>(null)
  const [imgPrew, setPrewImg] = useState("")

  useOnClickOutside(outside, () => {
    setIsShow(false)
    setPrewImg("")
  })
  const handleEscape = (event: any) => {
    if (event.keyCode == 27) {
      setIsShow(false)
      setPrewImg("")
    }
  }
  useEffect(() => {
    if (isShow) document.addEventListener("keydown", handleEscape, false)
    return () => {
      document.addEventListener("keydown", handleEscape, false)
    }
  }, [handleEscape, isShow])
  console.log(city)

  const saveImage = async () => {
    updatePhoto({ avatarPath: imageUrl }).unwrap().then()
  }

  const handleChangeFile = async (e: any) => {
    try {
      const formData = new FormData()
      const file = e.target.files[0]
      setPrewImg(URL.createObjectURL(file))
      formData.append("image", file)
      await apiAxios
        .post("files", formData)
        .then((res) => setImageUrl(`files/${res.data.data.filename}`))
    } catch (e) {}
  }

  console.log(
    isLoadingCity
      ? ""
      : cities.map((city) => city.children.map((c) => console.log()))
  )
  return (
    <div>
      <div
        onClick={() => {
          setIsShow(!isShow)
        }}
      >
        <Pencil w={20} h={20} />
      </div>

      {isShow && (
        <div className={styles.ProfileModule}>
          <div className={styles.ProfileModule__modal}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={styles.ProfileModule__modal__form}
              ref={outside}
            >
              <h3>Редактировать профиль</h3>
              <div className={styles.ProfileModule__modal__form__line}></div>
              <div className={styles.ProfileModule__modal__form__top}>
                <div className={styles.ProfileModule__modal__form__top__image}>
                  {isLoadingUser ? (
                    <Image
                      src={useravatr}
                      width={225}
                      height={225}
                      alt='user'
                    />
                  ) : user ? (
                    <Image
                      src={
                        imgPrew
                          ? imgPrew
                          : `http://localhost:8080/api/${user.avatarPath}`
                      }
                      width={225}
                      height={225}
                      alt='user'
                    />
                  ) : (
                    "Foto"
                  )}
                </div>
                <div
                  className={styles.ProfileModule__modal__form__top__edit}
                  onClick={() => inputRef.current.click()}
                >
                  <ImageEdit />
                  <input
                    ref={inputRef}
                    type='file'
                    hidden
                    onChange={handleChangeFile}
                  />
                </div>
                <div className={styles.ProfileModule__modal__form__top__inputs}>
                  <div
                    className={
                      styles.ProfileModule__modal__form__top__inputs__input
                    }
                  >
                    <input
                      type='text'
                      placeholder='Имя'
                      {...register("name", {
                        required: true,
                        maxLength: 80,
                        value: isLoadingUser ? "" : user.name,
                      })}
                    />
                  </div>
                  <div
                    className={
                      styles.ProfileModule__modal__form__top__inputs__input
                    }
                  >
                    <input
                      type='text'
                      placeholder='Фамилия'
                      {...register("surname", {
                        required: true,
                        maxLength: 80,
                        value: isLoadingUser ? "" : user.surname,
                      })}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.ProfileModule__modal__form__line}></div>
              <div className={styles.ProfileModule__modal__form__middle}>
                <div
                  className={styles.ProfileModule__modal__form__middle__block}
                >
                  <div
                    className={
                      styles.ProfileModule__modal__form__middle__block__title
                    }
                  >
                    <p>Страна</p>
                  </div>
                  <div
                    className={
                      styles.ProfileModule__modal__form__middle__block__select
                    }
                  >
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    >
                      {isLoadingCountries
                        ? ""
                        : countries.map((country) => (
                            <option value={country.id}>{country.name}</option>
                          ))}
                    </select>
                    {/*<Select*/}
                    {/*  className='select'*/}
                    {/*  onChange={(e) => setCountry(e.newId)}*/}
                    {/*  options={countryOptions}*/}
                    {/*  value={getSelect()}*/}
                    {/*  defaultValue={getSelect()}*/}
                    {/*/>*/}
                  </div>
                </div>
                <div
                  className={styles.ProfileModule__modal__form__middle__block}
                >
                  <div
                    className={
                      styles.ProfileModule__modal__form__middle__block__title
                    }
                  >
                    <p>Город</p>
                  </div>
                  <div
                    className={
                      styles.ProfileModule__modal__form__middle__block__select
                    }
                  >
                    {/*<select*/}
                    {/*  value={city.id}*/}
                    {/*  onChange={(e) => setCity(e.target.value)}*/}
                    {/*>*/}
                    {/*  {isLoadingCity*/}
                    {/*    ? ""*/}
                    {/*    : cities.map((city) =>*/}
                    {/*        city.children.map((c) => (*/}
                    {/*          <option*/}
                    {/*            value={c.id}*/}
                    {/*            selected={user.city.id == c.id ? true : false}*/}
                    {/*          >*/}
                    {/*            {c.name}*/}
                    {/*          </option>*/}
                    {/*        ))*/}
                    {/*      )}*/}
                    {/*</select>*/}
                    <select
                      value={city == null ? 2 : city.id}
                      onChange={(e) => setCity(e.target.value)}
                    >
                      {isLoadingCity
                        ? ""
                        : cities.map((city) =>
                            city.children.map((c) => (
                              <option
                                value={c.id}
                                selected={
                                  isLoadingUser
                                    ? 2
                                    : user == null
                                    ? 2
                                    : user.city == null
                                    ? 2
                                    : user.city.id
                                }
                              >
                                {c.name}
                              </option>
                            ))
                          )}
                    </select>
                  </div>
                </div>
              </div>
              <div className={styles.ProfileModule__modal__form__line}></div>
              <div className={styles.ProfileModule__modal__form__bottom}>
                <div
                  className={styles.ProfileModule__modal__form__bottom__submit}
                >
                  <button type={"submit"}>Сохранить изменения</button>
                </div>
              </div>
            </form>
            <div className={styles.ProfileModule__modal__padding}></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProfileModule
