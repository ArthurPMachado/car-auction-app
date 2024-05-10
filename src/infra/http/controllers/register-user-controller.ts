import { Request, Response } from 'express'
import { registerUserBodySchema } from '../schemas/register-user-body-schema'
import { makeRegisterUserUseCase } from '../factories/make-register-user-use-case'
import { UserAlreadyExistsError } from '@/domain/application/use-cases/errors/user-already-exists-error'

export async function registerUserController(
  request: Request,
  response: Response,
) {
  const { name, email, password } = registerUserBodySchema.parse(request.body)

  try {
    const registerUseCase = makeRegisterUserUseCase()

    await registerUseCase.execute({
      name,
      email,
      password,
    })
  } catch (error) {
    if (error instanceof UserAlreadyExistsError) {
      return response.status(409).send({
        message: error.message,
      })
    }

    throw error
  }

  return response.status(201).send()
}
