export interface UserProtocol {
  username: string
  email: string
  password: string
}

export type Status = "Success" | "Warning" | "Error"

export interface ToastOptProtocol {
  visible: boolean
  status: Status
  message: string
}

export interface UserLogin {
  email: string
  password: string
}

export const emptyUser: UserProtocol = {
  username: "",
  email: "",
  password: "",
}

export const emptyToast: ToastOptProtocol = {
  visible: false,
  status: "Success",
  message: "",
}

