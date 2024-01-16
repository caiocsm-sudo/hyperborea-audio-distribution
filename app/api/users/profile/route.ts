import User from "@/models/user"

export async function GET(req: Request) {
  try {
    if (!req.headers) throw new Error("Can't access profile")

    const userProfile = User.find({ email: req.body.email })

    return new Response(
      JSON.stringify({ status: "success", data: userProfile }),
    )
  } catch (error) {
    return new Response(JSON.stringify(error))
  }
}
