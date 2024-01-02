import connectToDb from "@/utils/db";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(res: NextResponse) {
  try {
    const { db } = await connectToDb();

    const result = await db
      .collection("test")
      .insertOne({ title: "test 1", date: Date.now() });

    console.log(result);

    return NextResponse.json({ message: "success", result: result });
  } catch (error) {
    NextResponse.json({ message: "error", error });
  }
}

export async function DELETE(req: NextApiRequest, res: NextResponse) {
  try {
    const id: string = req.body.id;

    console.log(id);

    const documentId = "659477839a1cfb4dec9aa7c1";

    console.log(documentId);

    return NextResponse.json({ id });
  } catch (error) {
    return NextResponse.json({ id: "fail", error });
  }
}
