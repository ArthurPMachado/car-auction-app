import express, { Request, Response } from 'express'
import { ZodError } from 'zod'
import cors from 'cors'
import { env } from './core/env'
import { router } from './infra/http/routes'

export const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

app.get('/health', (request: Request, response: Response) => {
  response.send('App is running!')
})

app.use((error: Error, _: Request, response: Response) => {
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
