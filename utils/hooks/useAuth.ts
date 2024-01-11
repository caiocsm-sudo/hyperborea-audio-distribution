import { UserAbstract } from "../authProtocols"
import { UserAuth } from "../UserClass"

interface AuthReturn {
  register: (credentials: UserAbstract) => Promise<any>
  login: (credentials: UserAbstract) => Promise<any>
}

const useAuth = (): AuthReturn => {
  const register = async (credentials: UserAbstract): Promise<any> => {
    const registerResponse = await UserAuth.register(credentials)

    console.log(registerResponse)

    return registerResponse
  }
  const login = async (credentials: UserAbstract): Promise<any> => {
    const loginResponse = await UserAuth.login(credentials)

    return loginResponse
  }

  return { register, login }
}

export default useAuth
