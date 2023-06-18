/// <reference path="./clients/people/people.d.ts" />

'use strict'

/** @param {import('fastify').FastifyInstance} app */
module.exports = async function peopleDataPlugin (app) {
  function buildOnComposerResponseCallback (peopleProps) {
    return async function addPeopleToResponse (request, reply, body) {
      let entities = await body.json()

      const multipleEntities = Array.isArray(entities)
      if (!multipleEntities) {
        entities = [entities]
      }

      const peopleIds = []
      for (const entity of entities) {
        for (const { idProp } of peopleProps) {
          peopleIds.push(entity[idProp])
        }
      }

      const people = await app.people.getPeople({ "where.id.in": peopleIds.join(',') })

      const getPersonNameById = (id) => {
        const person = people.find(person => person.id === id)
        return (person) ? person.name : null
      }

      for (let entity of entities) {
        for (const { idProp, nameProp } of peopleProps) {
          entity[nameProp] = getPersonNameById(entity[idProp])
        }
      }

      reply.send(multipleEntities ? entities : entities[0])
    }
  }

  function booksOnRouteHook (routeOptions) {
    const responseSchema = routeOptions.schema.response[200]
    const entitySchema = (responseSchema.items) ? responseSchema.items : responseSchema
    entitySchema.properties.authorName = { type: 'string' }
    entitySchema.required.push('authorName')

    routeOptions.config.onComposerResponse = buildOnComposerResponseCallback([
      { idProp: 'authorId', nameProp: 'authorName' }
    ])
  }

  app.platformatic.addComposerOnRouteHook('/books/', ['GET'], booksOnRouteHook)
  app.platformatic.addComposerOnRouteHook('/books/{id}', ['GET'], booksOnRouteHook)

  function moviesOnRouteHook (routeOptions) {
    const responseSchema = routeOptions.schema.response[200]
    const entitySchema = (responseSchema.items) ? responseSchema.items : responseSchema
    entitySchema.properties.directorName = { type: 'string' }
    entitySchema.properties.producerName = { type: 'string' }
    entitySchema.required.push('directorName', 'producerName')

    routeOptions.config.onComposerResponse = buildOnComposerResponseCallback([
      { idProp: 'directorId', nameProp: 'directorName' },
      { idProp: 'producerId', nameProp: 'producerName' }
    ])
  }

  app.platformatic.addComposerOnRouteHook('/movies/', ['GET'], moviesOnRouteHook)
  app.platformatic.addComposerOnRouteHook('/movies/{id}', ['GET'], moviesOnRouteHook)
}
