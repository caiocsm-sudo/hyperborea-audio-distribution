import User from "@/models/user"

export async function POST(req: Request) {
  const userToLog = await req.json()

  let resMessage: string

  const userExists = await User.findOne({ email: userToLog.email })

  if (userExists) resMessage = "User found"
  else resMessage = "User not found"

  return new Response(
    JSON.stringify({
      resMessage: resMessage,
      user: userExists ? userExists : "",
    })
  )
}
