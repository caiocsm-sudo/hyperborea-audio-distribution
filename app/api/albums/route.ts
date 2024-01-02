import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log(req.body);

    
  } catch (error) {
    return NextResponse.json({
      status: "failed",
      detail: error
    });
  }
}
