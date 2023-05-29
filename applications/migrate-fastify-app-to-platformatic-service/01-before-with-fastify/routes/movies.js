/** @param {import('fastify').FastifyInstance} app */
export default async function movieRoutes (app) {
  app.get('/', async (request, reply) => {
    return app.movies
  })
}
