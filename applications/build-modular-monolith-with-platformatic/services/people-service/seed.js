'use strict'

const people = [
  'Stephen King',
  'Miranda July',
  'Lewis Carroll',
  'Martha Schumacher',
  'Mick Garris',
  'Dede Gardner'
]

module.exports = async function ({ entities, logger }) {
  for (const name of people) {
    const newPerson = await entities.person.save({ input: { name } })

    logger.info({ newPerson }, 'Created person')
  }
}
