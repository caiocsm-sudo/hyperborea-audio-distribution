import { DELETE } from "@/app/api/test/route";

describe("", () => {
  it("should console.log the request", () => {
    const spyLog = jest.spyOn(console, "log");

    expect(spyLog).toHaveBeenCalled()
  });
});
