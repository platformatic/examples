/** @param {import('fastify').FastifyInstance} app */
export default async function quotesRoutes (app) {
  app.get('/', async (request, reply) => {
    return app.quotes
  })
}
