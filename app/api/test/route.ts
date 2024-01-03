import connectDb from "@/utils/db";
import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
// import { NextResponse } from "next/server";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDb(process.env.MONGODB_URI as string);

  if(req.method === "GET") {
    const TestModel = mongoose.model("Test", new mongoose.Schema({ name: String }));

    const test = new TestModel({ name: "jest mock fock function" });

    await test.save();

    console.log("mechanic hill");

    return res.json({ message: "success", result: test });
  }

  if (req.method === 'DELETE') {
    console.log(req.query.id);

    res.json({ id: req.query.id });
  }
}

