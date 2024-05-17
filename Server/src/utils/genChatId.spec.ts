import { genId } from "./genId"

describe("Generate chat id", () => {
  it("Chat ID must be length 15", () => {
    expect(genId(15).length).toBe(15)
  });

  it("Message ID must be length 10", () => {
    expect(genId(10).length).toBe(10)
  })
});