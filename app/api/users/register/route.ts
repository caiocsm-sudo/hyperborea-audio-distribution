import { EncryptPassword } from "@/utils/UserClass"
import User from "@/models/user"
// import connectDb from "@/utils/db"

export async function GET() {
  const users = await User.find()

  return new Response(JSON.stringify(users))
}

export async function POST(req: Request) {
  try {
    const userData = await req.json()

    console.log(userData)

    const hashedPassword = await EncryptPassword.hashPassword(userData.password)

    const endUser = await User.create({
      username: userData.username,
      email: userData.email,
      password: hashedPassword,
    })

    // to implement -> json web token

    console.log(endUser)

    return new Response(JSON.stringify({ status: "success", endUser }))
  } catch (error: any) {
    let errorMessage: string = ""

    if (error.keyValue.email) {
      errorMessage = "Error: email already exists"
    }

    return new Response(JSON.stringify({ errorMessage, error }));
  }
}

export async function PATCH(req: Request) {
  const newUser = await req.json()

  console.log(newUser)
}
