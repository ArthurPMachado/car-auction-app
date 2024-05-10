import express, { Request, Response } from 'express'
import { ZodError } from 'zod'
import { env } from './core/env'

export const app = express()

app.use(express.json())

app.use((error: Error, request: Request, response: Response) => {
  if (error instanceof ZodError) {
    return response
      .status(400)
      .json({ message: 'Validation error.', issues: error.format() })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  }

  return response.status(500).json({ message: 'Internal server error' })
})
