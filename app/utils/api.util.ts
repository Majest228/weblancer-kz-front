import cookies from "js-cookie"

export const getContentType = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${cookies.get("accessToken")}`,
})
