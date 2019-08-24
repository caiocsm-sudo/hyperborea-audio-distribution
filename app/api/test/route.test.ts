import type { NextApiRequest, NextApiResponse } from "next";

// import { createMocks } from "node-mocks-http";
import supertest from "supertest";
import handler from "./route";
import connectDb from "@/utils/db";

describe("api routing test", () => {
  beforeAll(async () => {
    await connectDb();
  });
  
  it("should console.log the request", async () => {
    const spyLog = jest.spyOn(console, "log");

    console.log("test passed");

    expect(spyLog).toHaveBeenCalledTimes(1);
  });
});
