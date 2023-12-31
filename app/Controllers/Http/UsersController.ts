import { UserService } from 'App/Services/UserService'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { inject } from '@adonisjs/fold';

@inject()
export default class UsersController {

  constructor(public readonly userService: UserService) {
  }

  public async index({ auth }: HttpContextContract) {
    await auth.use('api').authenticate();

    return await this.userService.index();
  }

  public async create({}: HttpContextContract) {}

  public async store(ctx: HttpContextContract) {
    return await this.userService.store(ctx)
  }

  public async show({ params }: HttpContextContract) {
    return await this.userService.show(params.id)
  }

  public async edit({}: HttpContextContract) {
  }

  public async update(ctx: HttpContextContract) {
    return await this.userService.update(ctx)
  }

  public async destroy({ params }: HttpContextContract) {
   return await this.userService.destroy(params.id)
  }
}
