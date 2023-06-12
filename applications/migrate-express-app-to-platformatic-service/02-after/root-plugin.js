import { usersRoutes } from './routes/users.js'

/** @param {import('fastify').FastifyInstance} app */
export default async function (app) {
  await app.register(import('@fastify/express'))

  app.use('/users', usersRoutes)
}
