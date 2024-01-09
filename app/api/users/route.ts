export function GET() {
  return new Response("vou dar o cu com força de gás")
}

export async function POST(req: Request) {
  const resFromBody = await req.json()

  const res = { status: "success", message: resFromBody }

  const resJson = JSON.stringify(res)

  return new Response(resJson)
}
