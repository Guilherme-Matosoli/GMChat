import { UserRepositoryTests } from "../repositories/in-memory/UserRepositoryTests";
import { SearchUserService } from "./SearchUserService";
import { RegisterUserService } from "./RegisterUserService";


describe("Search user", () => {
  let repository;
  let searchUserService;
  let registerUserService;

  beforeAll(() => {
    repository = UserRepositoryTests;
    searchUserService = new SearchUserService(repository);
    registerUserService = new RegisterUserService(repository);
  });

  it("SHould be able to find a user", async () => {
    const data = { 
      name: "Testing",
      username: "testing",
      email: "testing@outlook.com",
      password: "testing123"
    };

    await registerUserService.register(data);
    console.log(repository.users)

    const userSearch = await searchUserService.search("testing");
    console.log(userSearch)

    expect(userSearch).toHaveProperty("username")
  });
});