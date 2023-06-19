import { useRouter } from "next/router"
import React, { useState, useEffect } from "react"
import styles from "../MyRequest/MyRequest.module.scss"
import cookies from 'js-cookie'
import { useGetFullResponseByOrderIdQuery } from "../../../../../../store/orders/orders.api"
import { useGetMeQuery } from "../../../../../../store/users/users.api"
import Image from "next/image"

const AllRequest = ({ item }) => {
    console.log("AllRequest", item)
    return (
        <div className={styles.myRequest}>
            <div className={styles.myRequest__container}>
                <div className={styles.myRequest__content}>
                    <div className={styles.myRequest__content__header}>
                        <div className={styles.myRequest__content__header__left}>
                            <Image
                                className={styles.myRequest__content__header__left__image}
                                src={`http://localhost:8080/api/${item?.owner.avatarPath}`}
                                alt='avatar'
                                width={110}
                                height={110}
                            />

                        </div>
                        <div className={styles.myRequest__content__header__right}>
                            <div className={styles.myRequest__content__header__right__desc}>
                                <div className={styles.myRequest__content__header__right__desc__content}>
                                    <h3 className={styles.myRequest__content__header__right__desc__title}>
                                        {item?.owner.name + " " + item?.owner.surname}
                                    </h3>
                                    <p className={styles.myRequest__content__header__right__desc__created}>{item?.owner.createdAt}</p>
                                </div>
                                <div className={styles.myRequest__content__header__right__desc__profession}>
                                    {item?.owner.professionsSelected.map(selected => (<p className={styles.myRequest__content__header__right__desc__profession__name}>{selected.professions.name + "," + " "}</p>))}
                                </div>
                                <div className={styles.myRequest__content__header__right__body}>
                                    <p>{item?.comments}</p>
                                    <div className={styles.myRequest__content__header__right__body__buttons}>
                                        <button className={styles.myRequest__content__header__right__body__buttons__update}>Принять</button>
                                        <button className={styles.myRequest__content__header__right__body__buttons__delete}>Отклонить</button>
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

export default AllRequest
