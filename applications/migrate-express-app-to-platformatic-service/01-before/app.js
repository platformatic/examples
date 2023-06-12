import express from 'express'

import { usersRoutes } from './routes/users.js'

export default function buildApp() {
  const app = express()

  app.use('/users', usersRoutes)

  return app
}
