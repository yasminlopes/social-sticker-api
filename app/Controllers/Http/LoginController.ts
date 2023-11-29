import { LoginService } from 'App/Services/LoginService'
import { inject } from '@adonisjs/fold';

@inject()
export default class LoginController {
  constructor(
    public readonly loginService: LoginService
  ) {}

  public async store({ auth, request, response }) {
    return await this.loginService.login({ auth, request, response })
  }

}


