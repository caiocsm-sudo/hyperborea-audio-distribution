// not password because it will not be recieved back, only sent
export interface UserAbstract {
  username: string
  email: string
}

export interface UserProtocol extends UserAbstract {
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

export interface UserLogin extends UserAbstract {
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
