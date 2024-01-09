import { NextApiRequest, NextApiResponse } from "next"
import { NextResponse } from "next/server"

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  return NextResponse.json({ message: "success", result: "vai te foder" })
}

export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.query)
}
