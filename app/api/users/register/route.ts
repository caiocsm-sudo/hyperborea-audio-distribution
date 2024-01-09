import { EncryptPassword } from "@/utils/UserClass"
import User from "@/models/user"
import connectDb from "@/utils/db"

export async function GET() {
  await connectDb()

  const users = await User.find()

  return new Response(JSON.stringify(users))
}

export async function POST(req: Request) {
  const userData = await req.json()

  console.log(userData)

  const hashedPassword = await EncryptPassword.hashPassword(userData.password)

  await connectDb()

  const endUser = await User.create({
    username: userData.username,
    email: userData.email,
    password: hashedPassword,
  })

  console.log(endUser)

  return new Response(JSON.stringify({ status: "success", endUser }))
}
