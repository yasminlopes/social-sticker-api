import { messagesHelper } from 'App/Helpers/messages/messages.helper';

export class LoginService {
  constructor() {}

  public async login({ auth, request, response }) {
    const username = request.input("username");
    const password = request.input("password");

    try {
      const data = await auth.use("api").attempt(username, password);
      return {
        message: messagesHelper.LOGIN_SUCCESS,
        data
      };
    } catch {
      return response.unauthorized({ error: messagesHelper.INVALID_CREDENTIALS });
    }
  }
}
