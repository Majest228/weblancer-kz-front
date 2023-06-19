import React from "react"
import { GetStaticProps, NextPage } from "next"
import { UsersService } from "../../app/services/users.service"
import { cookies } from "js-cookie"
import { NextPageAuth } from "../../app/providers/private.route.interface"
import dynamic from "next/dynamic"
import apiAxios from "../../app/api/api"
import { Response } from "next/dist/compiled/@edge-runtime/primitives/fetch"

const Profile = dynamic(
  () => import("../../app/components/screens/profile/Profile"),
  {
    ssr: false,
  }
)

const ProfilePage: NextPageAuth = () => {
  return <Profile />
}

ProfilePage.isOnlyUser = true

export default ProfilePage
