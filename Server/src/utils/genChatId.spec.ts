import { genChatId } from "./genId"

describe("Generate chat id", () => {
  it("ID must be length 15", () => {
    expect(genChatId().length).toBe(15)
  })
});