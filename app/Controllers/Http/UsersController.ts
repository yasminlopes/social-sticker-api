import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import { messagesHelper } from 'App/Helpers/messages/messages.helper'

export default class UsersController {

  public async index({}: HttpContextContract) {
    const users = await User.all()
    return {
      users
    }
  }

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    const body = request.only(['name', 'last_name', 'email', 'username', 'password'])
  
    const emailExists = await User.findBy('email', body.email)

    if (emailExists) {
      return response.status(403).send({ error:  messagesHelper.EMAIL_EXISTS })
    }
  
    const usernameExists = await User.findBy('username', body.username)

    if (usernameExists) {
      return response.status(403).send({ error:  messagesHelper.USERNAME_EXISTS })
    }
  
    const user = await User.create(body)
  
    return { user }
  }

  public async show({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.id)

    return { user }
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
