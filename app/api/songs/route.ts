import Song from "@/models/song";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const songs = await Song.find();

  return NextResponse.json({ status: "success", songs });
}

export async function POST(req: NextRequest) {
  const bodyData = await req.body;

  return NextResponse.json({ status: "success", bodyData });
}
