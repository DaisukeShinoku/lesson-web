export interface SignUpData {
  name: string
  email: string
  password: string
  password_confirmation: string
}

export interface SignInData {
  email: string
  password: string
}

export interface User {
  id: number
  uid: string
  provider: string
  email: string
  name: string
  nickname?: string
  image?: string
  allowPasswordChange: boolean
}
