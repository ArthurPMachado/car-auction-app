import { left } from '@/core/either'
import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import { TokenMissingError } from '../errors/token-missing-error'
import { env } from '@/core/env'
import { InvalidTokenError } from '../errors/invalid-token-error'
import { IPayload } from './interfaces/IPayload'

export async function verifyJwt(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    return left(new TokenMissingError())
  }

  const [, token] = authHeader.split(' ')

  try {
    const { sub: userId } = verify(token, env.JWT_PUBLIC_KEY) as IPayload

    request.user = {
      id: userId,
    }

    next()
  } catch {
    return left(new InvalidTokenError())
  }
}
