import { Entity } from '@platformatic/sql-mapper';
import graphqlPlugin from '@platformatic/sql-graphql'
import { EntityTypes, Task,User } from './types'

declare module 'fastify' {
  interface FastifyInstance {
    getSchema<T extends 'Task' | 'User'>(schemaId: T): {
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
    task: Entity<Task>,
    user: Entity<User>,
  }
}
