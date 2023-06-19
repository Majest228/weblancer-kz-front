import { useRouter } from "next/router"
import React, { useState, useEffect } from "react"
import styles from "../MyRequest/MyRequest.module.scss"
import cookies from 'js-cookie'
import { useGetFullResponseByOrderIdQuery } from "../../../../../../store/orders/orders.api"
import { useGetMeQuery } from "../../../../../../store/users/users.api"
import Image from "next/image"

const MyRequest = () => {
    const router = useRouter()
    const id = router.query.id
    const { data: response, isLoading: isLoadingResponse } = useGetFullResponseByOrderIdQuery(id)

    const { data: user, isLoading: isLoadingUser } = useGetMeQuery("")

    const checkReqUser = isLoadingUser ? {} : user

    const checkReqRes = isLoadingResponse ? [] : response
    const useCheckUser = checkReqRes.find(item => item == null || undefined ? {} : item.owner == null || undefined ? 0 : item.owner.id == checkReqUser.id)

    return (
        <div className={styles.myRequest}>
            <h3>Мой отклик</h3>
            <div className={styles.myRequest__container}>
                <div className={styles.myRequest__content}>
                    <div className={styles.myRequest__content__header}>
                        <div className={styles.myRequest__content__header__left}>
                            <Image
                                className={styles.myRequest__content__header__left__image}
                                src={`http://localhost:8080/api/${useCheckUser?.owner.avatarPath}`}
                                alt='avatar'
                                width={110}
                                height={110}
                            />

                        </div>
                        <div className={styles.myRequest__content__header__right}>
                            <div className={styles.myRequest__content__header__right__desc}>
                                <div className={styles.myRequest__content__header__right__desc__content}>
                                    <h3 className={styles.myRequest__content__header__right__desc__title}>
                                        {useCheckUser?.owner.name + " " + useCheckUser?.owner.surname}
                                    </h3>
                                    <p className={styles.myRequest__content__header__right__desc__created}>{useCheckUser?.owner.createdAt}</p>
                                </div>
                                <div className={styles.myRequest__content__header__right__desc__profession}>
                                    {useCheckUser?.owner.professionsSelected.map(selected => (<p className={styles.myRequest__content__header__right__desc__profession__name}>{selected.professions.name + "," + " "}</p>))}
                                </div>
                                <div className={styles.myRequest__content__header__right__body}>
                                    <p>{useCheckUser?.comments}</p>
                                    <div className={styles.myRequest__content__header__right__body__buttons}>
                                        <button className={styles.myRequest__content__header__right__body__buttons__update}>Редактировать</button>
                                        <button className={styles.myRequest__content__header__right__body__buttons__delete}>Удалить</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default MyRequest
