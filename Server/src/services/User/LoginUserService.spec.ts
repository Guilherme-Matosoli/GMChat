import { UserRepositoryTests } from "../../repositories/in-memory/UserRepositoryTests"
import { LoginUserService } from "./LoginUserService"
import { RegisterUserService } from "./RegisterUserService";

let loginService;
const data = { 
  name: "Testing",
  username: "testing",
  email: "testing@outlook.com",
  password: "testing123"
};

beforeAll(async () => {
  loginService = new LoginUserService(UserRepositoryTests); 
  await new RegisterUserService(UserRepositoryTests).register(data);
});

describe("Login user service", () => {
  it("Should be able to login", async () => {
    const user = await loginService.login({ email: data.email, password: data.password });

    expect(user).toHaveProperty("token")
  })
})