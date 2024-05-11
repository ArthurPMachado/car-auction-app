import { Request, Response } from 'express'
import { registerBidBodySchema } from '../schemas/register-bid-body-schema'
import { makeRegisterBidUseCase } from '../factories/make-register-bid-use-case'
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error'
import { BidAlreadyFinishedError } from '@/domain/application/use-cases/errors/bid-already-finished-error'

export async function registerBidController(
  request: Request,
  response: Response,
) {
  const { licensePlate } = request.params
  const bidObject = registerBidBodySchema.parse(request.body)

  const registerUseCase = makeRegisterBidUseCase()

  const result = await registerUseCase.execute({
    licensePlate,
    bid: bidObject,
  })

  if (result.isLeft()) {
    const error = result.value

    switch (error.constructor) {
      case ResourceNotFoundError:
        return response.status(404).send({
          message: error.message,
        })
      case BidAlreadyFinishedError:
        return response.status(409).send({
          message: error.message,
        })
      default:
        return response.status(400).send({
          message: error.message,
        })
    }
  }

  return response.status(201).send()
}
