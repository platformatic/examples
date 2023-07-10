'use strict'

const books = [
  {
    title: 'Fairy Tale',
    authorId: 1, // Stephen King
    publishedYear: '2022'
  },
  {
    title: 'No One Belongs Here More Than You',
    authorId: 2, // Miranda July
    publishedYear: 2007
  },
  {
    title: 'Alice\'s Adventures in Wonderland',
    authorId: 3, // Lewis Carroll
    publishedYear: 1865
  }
]

module.exports = async function ({ entities, logger }) {
  for (const book of books) {
    const newBook = await entities.book.save({ input: book })

    logger.info({ newBook }, 'Created book')
  }
}
