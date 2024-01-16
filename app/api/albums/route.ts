import { NextResponse } from "next/server";

export function POST(req: Request) {
  try {
    console.log(req.body);
    console.log(req.headers)
    
  } catch (error) {
    return NextResponse.json({
      status: "failed",
      detail: error
    });
  }
}
