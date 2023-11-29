export class LoginService {
  constructor() {}

  public async login({ auth, request, response }) {
    const username = request.input("username");
    const password = request.input("password");

    try {
      const token = await auth.use("api").attempt(username, password);
      return token;
    } catch {
      return response.unauthorized({ error: "Invalid credentials" });
    }
  }
}
