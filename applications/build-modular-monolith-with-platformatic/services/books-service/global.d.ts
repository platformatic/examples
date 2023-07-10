/// <reference types="@platformatic/db" />
import { EntityTypes, Book } from './types'

declare module 'fastify' {
  interface FastifyInstance {
    getSchema<T extends 'Book'>(schemaId: T): {
      '$id': string,
      title: string,
      description: string,
      type: string,
      properties: {
        [x in keyof EntityTypes[T]]: { type: string, nullable?: boolean }
      },
      required: string[]
    };
  }
}

declare module '@platformatic/sql-mapper' {
  interface Entities {
    book: Entity<Book>,
  }
}
