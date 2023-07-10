'use strict'

const movies = [
  {
    title: 'Maximum Overdrive',
    directorId: 1, // Stephen King
    producerId: 4, // Martha Schumacher
    releasedYear: 1986
  },
  {
    title: 'The Shining',
    directorId: 5, // Mick Garris
    producerId: 1, // Stephen King
    releasedYear: 1980
  },
  {
    title: 'Kajillionaire',
    directorId: 2, // Miranda July
    producerId: 6, // Dede Gardner
    releasedYear: 2020
  }
]

module.exports = async function ({ entities, logger }) {
  for (const movie of movies) {
    const newmovie = await entities.movie.save({ input: movie })

    logger.info({ newmovie }, 'Created movie')
  }
}
