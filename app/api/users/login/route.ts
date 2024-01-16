import User from "@/models/user"
import connectDb from "@/utils/db"
import { EncryptPassword } from "@/utils/hashPassword"
import genToken from "@/utils/api/genToken"

export async function POST(req: Request) {
  try {
    await connectDb()

    const userToLog = await req.json()
    const dbUser = await User.findOne({ email: userToLog.email }).select(
      "+password"
    )

    const correctPw = await EncryptPassword.comparePasswords(
      userToLog.password,
      dbUser!.password
    )

    if (!correctPw || !dbUser) throw new Error("Incorrect email or password.")

    const token = genToken(dbUser._id);

    return new Response(
      JSON.stringify({
        resMessage: "success",
        user: { id: dbUser._id, username: dbUser.username, token },
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
