import React from "react"
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next"
import { UsersService } from "../../app/services/users.service"
import { NextPageAuth } from "../../app/providers/private.route.interface"

import dynamic from "next/dynamic"

const User = dynamic(
  () => import("../../app/components/screens/users/UserPage"),
  {
    ssr: false,
  }
)

const UserPage: NextPageAuth = ({ user }: any) => {
  return <User user={user} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { data: users } = await UsersService.getAll()

    const paths = users.map((user: any) => ({
      params: {
        id: String(user.id),
      },
    }))

    return { paths, fallback: "blocking" }
  } catch (e) {
    return {
      paths: [],
      fallback: false,
    }
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { data: user } = await UsersService.getProfileById(Number(params?.id))
    return {
      props: {
        user,
      },
      revalidate: 60,
    }
  } catch (e) {
    return {
      props: {
        user: {},
        error: e,
      },
    }
  }
}
UserPage.isOnlyUser = false
export default UserPage
