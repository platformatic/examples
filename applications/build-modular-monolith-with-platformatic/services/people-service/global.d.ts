/// <reference types="@platformatic/db" />
import { EntityTypes, Person } from './types'

declare module 'fastify' {
  interface FastifyInstance {
    getSchema<T extends 'Person'>(schemaId: T): {
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
    person: Entity<Person>,
  }
}
