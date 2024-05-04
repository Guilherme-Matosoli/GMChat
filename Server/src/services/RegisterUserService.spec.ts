import { UserRepositoryTests } from "../repositories/in-memory/UserRepositoryTests";
import { RegisterUserService } from "./RegisterUserService";

describe("Register user", () => {
  let repository;
  let registerService;

  beforeAll(() => {
    repository = UserRepositoryTests;
    registerService = new RegisterUserService(repository);
  });

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

    expect(register).toEqual("Email already exists");
  })
  
  it("shouldn't be able to register a new user because the username already exists in DB", async () => {
    const data = { 
      name: "Testing",
      username: "abec",
      email: "testinasasssssddddddsg@a.com",
      password: "testing123"
    };

    const data2 = { 
      name: "Testing",
      username: "abec",
      email: "tasestasdasiang@s.com",
      password: "testing123"
    };

    await registerService.register(data);
    const register = await registerService.register(data2);

    expect(register).toEqual("Username already exists");
  }, 10000)
});