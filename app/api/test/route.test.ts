import type { NextApiRequest, NextApiResponse } from "next";

import { createMocks } from "node-mocks-http";
import request from "supertest";
import handler from "./route";
import connectDb from "@/utils/db";

describe("api routing test", () => {
  beforeAll(async () => {
    connectDb(process.env.MONG0DB_URI as string);
  });
  
  it("should console.log", async () => {
    const { req, res }: { req: NextApiRequest, res: NextApiResponse } = createMocks({
      method: "GET",
      headers: { "content-type": "application/json" }
    });
    const spyLog = jest.spyOn(console, "log");
 
    await request(handler).get("/").send(req);

    expect(spyLog).toHaveBeenCalledTimes(1);
  });
});
