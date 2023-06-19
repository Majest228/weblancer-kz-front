import apiAxios from "../api/api"

export const CategorysService = {
  async getAll() {
    return apiAxios.get("categories/all")
  },
}
