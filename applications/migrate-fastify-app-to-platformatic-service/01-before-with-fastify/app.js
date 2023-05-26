import fastify from 'fastify'

export async function buildApp (options = {}) {
  const app = fastify(options)

  app.register(import('./plugins/data-source.js'))

  app.register(import('./routes/movies.js'), { prefix: '/movies' })
  app.register(import('./routes/quotes.js'), { prefix: '/quotes' })

  return app
}
