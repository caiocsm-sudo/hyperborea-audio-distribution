import User from "@/models/user"
import jwt from "jsonwebtoken"
import connectDb from "@/utils/db"

import { EncryptPassword } from "@/utils/hashPassword"

export async function GET() {
  const users = await User.find()

  return new Response(JSON.stringify(users))
}

export async function POST(req: Request) {
  try {
    await connectDb()

    const userData = await req.json()

    console.log(userData)

    const hashedPassword = await EncryptPassword.hashPassword(userData.password)

    const endUser = await User.create({
      username: userData.username,
      email: userData.email,
      password: hashedPassword,
    })

    const token = jwt.sign(
      { id: endUser._id },
      process.env.JWT_SECRET as string,
      { expiresIn: "10m" }
    )

    console.log(endUser, token)

    return new Response(
      JSON.stringify({
        status: "success",
        user: { username: endUser.username, email: endUser.email },
        token,
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
