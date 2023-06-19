import React, { useState, useRef, useEffect } from "react"
import Image from "next/image"
import useravatr from "../../../../assets/user.jpg"
import Verify from "../../../ui/svg/verify/verify"
import OfflineStatus from "../../../ui/svg/offlineStatus/offlineStatus"
import HomeIco from "../../../ui/svg/home/home"
import Star from "../../../ui/svg/star/star"
import styles from "./ProfileInfo.module.scss"
import dayjs from "dayjs"
import { useGetFullDateRegister } from "../../../../hooks/useGetFullDateRegister"
import {
  useGetMeQuery,
  useUpdatePhotoMutation,
  useUpdateRoleMutation,
} from "../../../../store/users/users.api"
import Link from "next/link"
import ProfileModule from "../../../ui/profile-change-modal/ProfileModal"
import cookies from "js-cookie"
import apiAxios from "../../../../api/api"

const ProfileInfo = ({ str }: any) => {
  const result = useGetMeQuery("")
  const { data: user, isLoading: isLoadingUser } = useGetMeQuery("")

  let regDate = isLoadingUser
    ? ""
    : user
    ? dayjs(user?.createdAt).format("YYYY,MM,DD")
    : ""
  let newReg = regDate.split(",")

  let currentDate = new Date()
  const getFullDateRegister = useGetFullDateRegister(currentDate, newReg)
  let a = +new Date()
  let b = !isLoadingUser ? +new Date(user?.createdAt) : ""

  const [type, setType] = useState<"profile" | "update">(str)
  const stars = ["star", "star", "star", "star", "star"]
  const rating = isLoadingUser ? null : user?.rating
  const [roles, setRoles] = useState([0, 0])

  const [updateRole] = useUpdateRoleMutation()

  const role = isLoadingUser
    ? 0
    : !user
    ? 0
    : !user.roles
    ? 0
    : !user.roles.id
    ? 0
    : user.roles.id

  const newRole = role == 3 ? 2 : 3

  useEffect(() => {
    return () => {
      setRoles([newRole == 3 ? 2 : 3, newRole])
    }
  }, [newRole])
  console.log(roles)

  const onChangeDate = async () => {
    updateRole({ roleId: newRole })
      .unwrap()
      .then(() => setRoles([newRole, newRole == 3 ? 2 : 3]))
  }

  return (
    <div className={styles.profile__header}>
      <div className={styles.profile__header__content}>
        <div className={styles.profile__header__content__left}>
          <div className={styles.profile__header__content__left__photo}>
            {isLoadingUser ? (
              <Image src={useravatr} width={210} height={210} alt='user' />
            ) : user ? (
              <Image
                src={`http://localhost:8080/api/${user.avatarPath}`}
                width={210}
                height={210}
                alt='user'
              />
            ) : (
              "Foto"
            )}
            {/*<button onClick={() => inputRef.current.click()}>*/}
            {/*  Изменить фото*/}
            {/*</button>*/}
            {/*<button onClick={() => saveImage()}>Сохранить фото</button>*/}
            {/*<input*/}
            {/*  ref={inputRef}*/}
            {/*  type='file'*/}
            {/*  hidden*/}
            {/*  onChange={handleChangeFile}*/}
            {/*/>*/}
          </div>

          <div className={styles.profile__header__content__left__desc}>
            <div className={styles.profile__header__content__left__desc__name}>
              {isLoadingUser ? (
                ""
              ) : user ? (
                <h3>
                  {user.name} {user.surname}
                </h3>
              ) : (
                ""
              )}
              <div
                className={styles.profile__header__content__left__desc__verify}
              >
                {isLoadingUser ? "" : user ? user.isVery ? <Verify /> : "" : ""}
              </div>

              {str == "update" ? (
                <button
                  className={styles.profile__header__content__left__desc__edit}
                >
                  <ProfileModule />
                </button>
              ) : (
                ""
              )}
            </div>
            {isLoadingUser
              ? ""
              : user
              ? user.professionsSelected
                  .slice(0, 1)
                  .map((item) => (
                    <p
                      className={
                        styles.profile__header__content__left__desc__profession
                      }
                    >
                      {item.professions.name}
                    </p>
                  ))
              : ""}

            <div
              className={styles.profile__header__content__left__desc__container}
            >
              <div
                className={styles.profile__header__content__left__desc__status}
              >
                <OfflineStatus />
                <p>Был онлайн 14 часов назад</p>
              </div>
              <div
                className={styles.profile__header__content__left__desc__country}
              >
                {isLoadingUser ? (
                  ""
                ) : user ? (
                  !user.countries ? (
                    "флаг"
                  ) : (
                    <>
                      <Image
                        src={`http://localhost:8080/api/${user.countries.flag}`}
                        width={24}
                        height={14}
                        alt='flag'
                      />
                      <p>
                        {!isLoadingUser
                          ? user.countries
                            ? user.countries.name
                            : "???"
                          : "???"}{" "}
                        {!isLoadingUser
                          ? user.city
                            ? user.city.name
                            : "???"
                          : "???"}
                      </p>
                    </>
                  )
                ) : (
                  ""
                )}
              </div>
            </div>
            <div
              className={styles.profile__header__content__left__desc__rating}
            >
              <div
                className={
                  styles.profile__header__content__left__desc__rating__register
                }
              >
                <span
                  className={
                    styles.profile__header__content__left__desc__rating__register__img
                  }
                >
                  <HomeIco />
                </span>
                <p>{isLoadingUser ? 0 : getFullDateRegister}</p>
              </div>
              <div
                className={
                  styles.profile__header__content__left__desc__rating__stats
                }
              >
                <div
                  className={
                    styles.profile__header__content__left__desc__rating__stars
                  }
                >
                  {stars.map((star, i) => (
                    <div
                      className={
                        styles.profile__header__content__left__desc__rating__stars__star
                      }
                    >
                      <Star fill={rating >= i + 1 ? "#4db82d" : "#878787"} />
                    </div>
                  ))}
                </div>
                <p
                  className={
                    styles.profile__header__content__left__desc__rating__review
                  }
                >
                  {isLoadingUser ? "" : user ? user.rating_to.length : ""}{" "}
                  отзыва
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.profile__header__content__right}>
          {str == "profile" ? (
            <>
              <Link
                href='/profile/settings/personal_data'
                className={styles.profile__header__content__right__update}
              >
                Редактировать профиль
              </Link>
              {role == 1 || role == 0 ? (
                ""
              ) : (
                <button
                  className={styles.profile__header__content__right__change}
                  onClick={() => onChangeDate()}
                >
                  {newRole == 2 ? "Стать исполнителем" : "Стать заказчиком"}
                </button>
              )}
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo
