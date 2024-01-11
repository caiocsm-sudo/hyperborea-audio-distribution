import User from "@/models/user"
import { EncryptPassword } from "@/utils/hashPassword"

export async function POST(req: Request) {
  try {
    const userToLog = await req.json()

    let resMessage: string

    const userExists = await User.findOne({ email: userToLog.email })

    if (!userExists) throw new Error("User doesn't exist")

    EncryptPassword.comparePasswords(userToLog.password, userExists.password)

    if (userExists) resMessage = "User found"
    else resMessage = "User not found"

    return new Response(
      JSON.stringify({
        resMessage: resMessage,
        user: userExists ? userExists : "",
      })
    )
  } catch (error) {
    return new Response(
      JSON.stringify({
        resMessage: error,
      })
    )
  }
}
