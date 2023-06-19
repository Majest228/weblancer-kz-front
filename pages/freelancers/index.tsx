import React from "react"
import { NextPageAuth } from "../../app/providers/private.route.interface"
import FreelancersPage from "../../app/components/screens/freelancers/FreelancersPage"
import { GetServerSideProps, GetStaticProps } from "next"
import { UsersService } from "../../app/services/users.service"
import { CategorysService } from "../../app/services/categorys.service"

const Freelancers: NextPageAuth = ({ freelancers, categorys }) => {
  return <FreelancersPage freelancers={freelancers} categorys={categorys} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { data: freelancers } = await UsersService.getAllFreelancers()
    const { data: categorys } = await CategorysService.getAll()
    return {
      props: {
        freelancers,
        categorys,
      },
    }
  } catch (e) {
    return {
      props: {
        error: e,
        freelancers: [],
        categorys: [],
      },
    }
  }
}

Freelancers.isOnlyUser = false

export default Freelancers
