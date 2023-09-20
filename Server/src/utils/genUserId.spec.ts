import { genUserId } from "./genUserId"

describe("Generate user ID", () => {
  it("ID must be length 8", () => {
    const ID = genUserId();

    expect(String(ID).length).toBe(8)
  })
})