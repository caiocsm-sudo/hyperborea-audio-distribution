import { UserAbstract } from "../authProtocols"
import { UserAuth } from "../UserClass"
import Cookies from "js-cookie"

interface AuthReturn {
  register: (credentials: UserAbstract) => Promise<any>
  login: (credentials: UserAbstract) => Promise<any>
}

const useAuth = (): AuthReturn => {
  const register = async (credentials: UserAbstract): Promise<any> => {
    const registerResponse = await UserAuth.register(credentials)

    Cookies.set("user", registerResponse.user)

    return registerResponse
  }
  const login = async (credentials: UserAbstract): Promise<any> => {
    const loginResponse = await UserAuth.login(credentials)

    return loginResponse
  }

  return { register, login }
}

export default useAuth
