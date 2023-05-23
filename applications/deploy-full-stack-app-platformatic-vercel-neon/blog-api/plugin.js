/// <reference path="./global.d.ts" />
'use strict'

/** @param {import('fastify').FastifyInstance} app */
module.exports = async function (app) {
  app.get('/posts/count', async function (request, reply) {
    await request.setupDBAuthorizationUser()

    if (!request.user || !request.user['X-PLATFORMATIC-USER-ID']) {
      return reply.status(401).send()
    }

    return {
      count: await app.platformatic.entities.post.count({
        where: {
          authorUserId: {
            eq: request.user['X-PLATFORMATIC-USER-ID']
          }
        }
      })
    }
  })
}
