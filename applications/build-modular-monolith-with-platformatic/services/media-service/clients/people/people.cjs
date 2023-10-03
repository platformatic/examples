'use strict'

const pltClient = require('@platformatic/client')
const { join } = require('path')

async function generatePeopleClientPlugin (app, opts) {
  app.register(pltClient, {
    type: 'openapi',
    name: 'people',
    path: join(__dirname, 'people.openapi.json'),
    url: opts.url,
    serviceId: opts.serviceId,
    throwOnError: opts.throwOnError,
    fullResponse: false,
    fullRequest: undefined,
    validateResponse: false
  })
}

generatePeopleClientPlugin[Symbol.for('plugin-meta')] = {
  name: 'people OpenAPI Client'
}
generatePeopleClientPlugin[Symbol.for('skip-override')] = true

module.exports = generatePeopleClientPlugin
module.exports.default = generatePeopleClientPlugin
