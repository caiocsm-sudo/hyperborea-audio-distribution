describe("porra", () => {
  it("should return", () => {
    const spyLog = jest.spyOn(console, "log");

    expect(spyLog).toHaveBeenCalled();
  });
});
