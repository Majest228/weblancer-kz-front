import React, { useEffect, useState, useRef } from "react"
import styles from "./PersonalData.module.scss"
import Layout from "../../../../layout/Layout"
import Link from "next/link"
import {
  useGetMeQuery,
  useUpdateBodyMutation,
} from "../../../../../store/users/users.api"
import ProfileInfo from "../../ProfileInfo/ProfileInfo"
import EditorComponent from "../../../../ui/editor/Editor"
import apiAxios from "../../../../../api/api"
import cookies from "js-cookie"
import { Meta } from "../../../../../utils/meta/Meta"
import ArrowIco from "../../../../ui/svg/arrow/arrow"
import { useOnClickOutside } from "../../../../../hooks/hooks"

const MyComponent = () => {
  const { data: user, isLoading: isLoadingUser } = useGetMeQuery("")
  const result = useGetMeQuery("")
  const [title, setTitle] = useState(isLoadingUser ? "" : user?.title)
  const [about, setAbout] = useState(isLoadingUser ? "" : user?.about)
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    setTitle(isLoadingUser ? "" : user?.title)
    setAbout(isLoadingUser ? "" : user?.about)
  }, [user])

  const [updateBody] = useUpdateBodyMutation()

  const onChangeDate = async () => {
    updateBody({ title, about })
  }

  const titleMeta = "Персональные данные"
  const description = "Личная страничка "
  const outside = useRef(null)
  useOnClickOutside(outside, () => setIsShow(false))
  return (
    <Meta Meta title={titleMeta} description={description}>
      <Layout>
        <div className={styles.PersonalData}>
          <div className={styles.PersonalData__content}>
            <div className={styles.PersonalData__content__title}>
              <h3>Информация о себе</h3>
            </div>
          </div>
          <div className={styles.PersonalData__line}></div>
          <div className={styles.PersonalData__content}>
            <div className={styles.PersonalData__content__block}>
              <div
                className={`${styles.PersonalData__content__block__left} ${
                  isShow ? styles.showed : ""
                }`}
                ref={outside}
              >
                <ul>
                  <li>
                    <Link href={""}>Настройка</Link>
                  </li>
                  <li>
                    <Link href={""}>Информация о себе</Link>
                  </li>
                  <li>
                    <Link href={""}>Контактные данные</Link>
                  </li>
                  <li>
                    <Link href={""}>Безопасность аккаунта</Link>
                  </li>
                  <li>
                    <Link href={""}>Смена пароля</Link>
                  </li>
                </ul>
                <div
                  className={`${
                    styles.PersonalData__content__block__left__hide
                  } ${isShow ? styles.showed : ""}`}
                  onClick={() => setIsShow(!isShow)}
                >
                  <ArrowIco fill={"#026bcb"} w={30} h={30} />
                </div>
              </div>
              <div className={styles.PersonalData__content__block__right}>
                <div
                  className={styles.PersonalData__content__block__right__user}
                >
                  <ProfileInfo str='update' />
                </div>
                <div className={styles.PersonalData__line}></div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    onChangeDate()
                  }}
                >
                  <div
                    className={
                      styles.PersonalData__content__block__right__input
                    }
                  >
                    <input
                      type={"text"}
                      placeholder={"Заголовок вашей страницы"}
                      onChange={(e) => setTitle(e.target.value)}
                      value={title}
                    />
                  </div>
                  <div
                    className={
                      styles.PersonalData__content__block__right__editor
                    }
                  >
                    <EditorComponent
                      height={300}
                      setAbout={setAbout}
                      about={about}
                    />
                  </div>
                  <div className={styles.PersonalData__line}></div>
                  <div
                    className={
                      styles.PersonalData__content__block__right__submit
                    }
                  >
                    <button type='submit'>Сохранить изменения</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Meta>
  )
}

export default MyComponent
