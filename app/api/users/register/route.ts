import User from "@/models/user"
import connectDb from "@/utils/db"
import genToken from "@/utils/api/genToken"
import { EncryptPassword } from "@/utils/hashPassword"

export async function GET() {
  const users = await User.find()

  return new Response(JSON.stringify(users))
}

export async function POST(req: Request) {
  try {
    await connectDb()

    console.log(req.headers)

    const userData = await req.json()
    const hashedPassword = await EncryptPassword.hashPassword(userData.password)

    const endUser = await User.create({
      username: userData.username,
      email: userData.email,
      password: hashedPassword,
    })

    const token = genToken(endUser._id)

    return new Response(
      JSON.stringify({
        status: "success",
        user: { username: endUser.username, token },
      })
    )
  } catch (error: any) {
    let errorMessage: string = ""

    if (error.keyValue.email) {
      errorMessage = "Error: email already exists"
    }

    return new Response(JSON.stringify({ errorMessage, error }))
  }
}

export async function PATCH(req: Request) {
  const newUser = await req.json()

  console.log(newUser)
}
