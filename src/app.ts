import express, { Request, Response } from 'express'
import cors from 'cors'
import { router } from './infra/http/routes'

export const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

app.get('/health', (request: Request, response: Response) => {
  response.send('App is running!')
})
