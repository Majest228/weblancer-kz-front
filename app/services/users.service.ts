import apiAxios from "../api/api"
// @ts-ignore
import cookies from "js-cookie"
import axios from "../api/api"
export const UsersService = {
  async getAll() {
    return apiAxios.get("users/all")
  },

  async getProfileById(id: number) {
    return apiAxios.get(`users/profile/${id}`)
  },

  async getAllFreelancers() {
    return apiAxios.get("users/freelancers")
  },

  async getMe() {
    return axios.get("users/profile")
  },
}
