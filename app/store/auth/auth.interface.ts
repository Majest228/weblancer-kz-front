export interface AuthInterface {
  user: {
    id: number
    email: string
  } | null
  accessToken: string
}
