import React, { FC, ReactNode } from "react"
import styles from "./Layout.module.scss"
import { ILayout } from "./layout.interface"

import Footer from "./footer/Footer"
import { NextPageAuth } from "../../providers/private.route.interface"

import dynamic from "next/dynamic"

const Header = dynamic(() => import("./header/Header"), {
  ssr: false,
})

const Layout = ({ children }: ILayout): JSX.Element => {
  return (
    <div className={styles.layout}>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
