import { UserRepositoryTests } from "../repositories/in-memory/UserRespositoryTests";
import { RegisterUserService } from "./RegisterUserService";

describe("Register user", () => {
  let registerService;

  beforeAll(() => {
    registerService = new RegisterUserService(UserRepositoryTests);
  })

  it("should be able to register a new user", async () => {

    const data = { 
      name: "Testing",
      username: "testing",
      email: "testing@outlook.com",
      password: "testing123"
    };

    const resgistred = await registerService.register(data);

    expect(resgistred).toHaveProperty("id");

  });

  it("shouldn't be able to register a new user because this email already exists in DB", async () => {
    const data = { 
      name: "Testing",
      username: "testing",
      email: "testing@outlook.com",
      password: "testing123"
    };

    await registerService.register(data);
    const register = await registerService.register(data);

    expect(register).toEqual(new Error("User already exists"))

  })
});