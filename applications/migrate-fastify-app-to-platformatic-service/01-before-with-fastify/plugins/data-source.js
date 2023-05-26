import fastifyPlugin from 'fastify-plugin'

/** @param {import('fastify').FastifyInstance} app */
async function dataSource (app) {
  app.decorate('movies', [
    'Jaws',
    'Star Wars',
    'The Wizard of Oz'
  ])

  app.decorate('quotes', [
    'You\'re gonna need a bigger boat.',
    'May the Force be with you.',
    'Toto, I\'ve got a feeling we\'re not in Kansas anymore.'
  ])
}

export default fastifyPlugin(dataSource)
