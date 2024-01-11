import { UserAbstract } from "./authProtocols"

export class UserAuth {
  static async login(user: UserAbstract) {
    const res = await fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })

    return res.json()
  }

  static async register(user: UserAbstract) {
    const res = await fetch("/api/users/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })

    return await res.json()
  }
}
