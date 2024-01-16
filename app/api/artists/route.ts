import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

const apiDataTest = {
  name: "Ckaeiront",
  real_name: "Antonio Joseph Souza",
  age: 19,
};

export async function GET(_req: NextApiRequest, res: NextResponse) {
  console.log(apiDataTest);

  return NextResponse.json(apiDataTest);
}

export async function POST(req: NextApiRequest, res: NextApiRequest) {
  if (req.body) {
    console.log(req.body);
  } else {
    console.log(`this is req.body => ${req.body}`);
  }
}
