/// <reference path="./global.d.ts" />
'use strict'

/** @param {import('fastify').FastifyInstance} app */
module.exports = async function (app) {
  app.get('/high-priority-tasks', async function (request, reply) {
    const tasks = await app.platformatic.entities.task.find({
      where: {
        priority: {
          eq: 1
        }
      }
    })

    return tasks
  })
}
