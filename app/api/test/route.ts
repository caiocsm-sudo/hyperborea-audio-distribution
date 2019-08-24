import connectDb from "@/utils/db"
import mongoose from "mongoose"
import { NextApiRequest, NextApiResponse } from "next"
import { NextResponse } from "next/server"

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  await connectDb()
  const TestModel = mongoose.model(
    "Test",
    new mongoose.Schema({ name: String })
  )

  const test = new TestModel({ name: "jest mock fock function" })

  console.log(req.method)

  await test.save()

  return NextResponse.json({ message: "success", result: test })
}

export async function DELETE(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.query)
}
k