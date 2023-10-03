import { type FastifyReply, type FastifyPluginAsync } from 'fastify'

declare namespace people {
  export interface People {
    getPeople(req?: GetPeopleRequest): Promise<Array<GetPeopleResponseOK>>;
    createPerson(req?: CreatePersonRequest): Promise<CreatePersonResponseOK>;
    updatePeople(req?: UpdatePeopleRequest): Promise<Array<UpdatePeopleResponseOK>>;
    getPersonById(req?: GetPersonByIdRequest): Promise<GetPersonByIdResponseOK>;
    updatePerson(req?: UpdatePersonRequest): Promise<UpdatePersonResponseOK>;
    deletePeople(req?: DeletePeopleRequest): Promise<DeletePeopleResponseOK>;
    getExample(req?: GetExampleRequest): Promise<GetExampleResponseOK>;
  }
  export interface PeopleOptions {
    url: string
  }
  export const people: PeoplePlugin;
  export { people as default };
  export interface FullResponse<T> {
    'statusCode': number;
    'headers': object;
    'body': T;
  }

  export interface GetPeopleRequest {
    'limit'?: number;
    'offset'?: number;
    'totalCount'?: boolean;
    'fields'?: Array<'createdAt' | 'id' | 'name' | 'updatedAt'>;
    'where.createdAt.eq'?: string;
    'where.createdAt.neq'?: string;
    'where.createdAt.gt'?: string;
    'where.createdAt.gte'?: string;
    'where.createdAt.lt'?: string;
    'where.createdAt.lte'?: string;
    'where.createdAt.like'?: string;
    'where.createdAt.in'?: string;
    'where.createdAt.nin'?: string;
    'where.createdAt.contains'?: string;
    'where.createdAt.contained'?: string;
    'where.createdAt.overlaps'?: string;
    'where.id.eq'?: number;
    'where.id.neq'?: number;
    'where.id.gt'?: number;
    'where.id.gte'?: number;
    'where.id.lt'?: number;
    'where.id.lte'?: number;
    'where.id.like'?: number;
    'where.id.in'?: string;
    'where.id.nin'?: string;
    'where.id.contains'?: string;
    'where.id.contained'?: string;
    'where.id.overlaps'?: string;
    'where.name.eq'?: string;
    'where.name.neq'?: string;
    'where.name.gt'?: string;
    'where.name.gte'?: string;
    'where.name.lt'?: string;
    'where.name.lte'?: string;
    'where.name.like'?: string;
    'where.name.in'?: string;
    'where.name.nin'?: string;
    'where.name.contains'?: string;
    'where.name.contained'?: string;
    'where.name.overlaps'?: string;
    'where.updatedAt.eq'?: string;
    'where.updatedAt.neq'?: string;
    'where.updatedAt.gt'?: string;
    'where.updatedAt.gte'?: string;
    'where.updatedAt.lt'?: string;
    'where.updatedAt.lte'?: string;
    'where.updatedAt.like'?: string;
    'where.updatedAt.in'?: string;
    'where.updatedAt.nin'?: string;
    'where.updatedAt.contains'?: string;
    'where.updatedAt.contained'?: string;
    'where.updatedAt.overlaps'?: string;
    'where.or'?: Array<string>;
    'orderby.createdAt'?: 'asc' | 'desc';
    'orderby.id'?: 'asc' | 'desc';
    'orderby.name'?: 'asc' | 'desc';
    'orderby.updatedAt'?: 'asc' | 'desc';
  }

  export interface GetPeopleResponseOK {
    'id': number;
    'name': string;
    'createdAt': string;
    'updatedAt': string;
  }

  export interface CreatePersonRequest {
    'id'?: number;
    'name': string;
    'createdAt'?: string;
    'updatedAt'?: string;
  }

  export interface CreatePersonResponseOK {
    'id': number;
    'name': string;
    'createdAt': string;
    'updatedAt': string;
  }

  export interface UpdatePeopleRequest {
    'fields'?: Array<'createdAt' | 'id' | 'name' | 'updatedAt'>;
    'where.createdAt.eq'?: string;
    'where.createdAt.neq'?: string;
    'where.createdAt.gt'?: string;
    'where.createdAt.gte'?: string;
    'where.createdAt.lt'?: string;
    'where.createdAt.lte'?: string;
    'where.createdAt.like'?: string;
    'where.createdAt.in'?: string;
    'where.createdAt.nin'?: string;
    'where.createdAt.contains'?: string;
    'where.createdAt.contained'?: string;
    'where.createdAt.overlaps'?: string;
    'where.id.eq'?: number;
    'where.id.neq'?: number;
    'where.id.gt'?: number;
    'where.id.gte'?: number;
    'where.id.lt'?: number;
    'where.id.lte'?: number;
    'where.id.like'?: number;
    'where.id.in'?: string;
    'where.id.nin'?: string;
    'where.id.contains'?: string;
    'where.id.contained'?: string;
    'where.id.overlaps'?: string;
    'where.name.eq'?: string;
    'where.name.neq'?: string;
    'where.name.gt'?: string;
    'where.name.gte'?: string;
    'where.name.lt'?: string;
    'where.name.lte'?: string;
    'where.name.like'?: string;
    'where.name.in'?: string;
    'where.name.nin'?: string;
    'where.name.contains'?: string;
    'where.name.contained'?: string;
    'where.name.overlaps'?: string;
    'where.updatedAt.eq'?: string;
    'where.updatedAt.neq'?: string;
    'where.updatedAt.gt'?: string;
    'where.updatedAt.gte'?: string;
    'where.updatedAt.lt'?: string;
    'where.updatedAt.lte'?: string;
    'where.updatedAt.like'?: string;
    'where.updatedAt.in'?: string;
    'where.updatedAt.nin'?: string;
    'where.updatedAt.contains'?: string;
    'where.updatedAt.contained'?: string;
    'where.updatedAt.overlaps'?: string;
    'where.or'?: Array<string>;
    'id'?: number;
    'name': string;
    'createdAt'?: string;
    'updatedAt'?: string;
  }

  export interface UpdatePeopleResponseOK {
    'id': number;
    'name': string;
    'createdAt': string;
    'updatedAt': string;
  }

  export interface GetPersonByIdRequest {
    'fields'?: Array<'createdAt' | 'id' | 'name' | 'updatedAt'>;
    'id': number;
  }

  export interface GetPersonByIdResponseOK {
    'id': number;
    'name': string;
    'createdAt': string;
    'updatedAt': string;
  }

  export interface UpdatePersonRequest {
    'fields'?: Array<'createdAt' | 'id' | 'name' | 'updatedAt'>;
    'id': number;
    'name': string;
    'createdAt'?: string;
    'updatedAt'?: string;
  }

  export interface UpdatePersonResponseOK {
    'id': number;
    'name': string;
    'createdAt': string;
    'updatedAt': string;
  }

  export interface DeletePeopleRequest {
    'fields'?: Array<'createdAt' | 'id' | 'name' | 'updatedAt'>;
    'id': number;
  }

  export interface DeletePeopleResponseOK {
    'id': number;
    'name': string;
    'createdAt': string;
    'updatedAt': string;
  }

  export interface GetExampleRequest {
  }

  export interface GetExampleResponseOK {
  }

}

type PeoplePlugin = FastifyPluginAsync<NonNullable<people.PeopleOptions>>

declare module 'fastify' {
  interface ConfigurePeople {
    getHeaders(req: FastifyRequest, reply: FastifyReply): Promise<Record<string,string>>;
  }
  interface FastifyInstance {
    'people': people.People;
    configurePeople(opts: ConfigurePeople): unknown
  }

  interface FastifyRequest {
    'people': people.People;
  }
}

declare function people(...params: Parameters<PeoplePlugin>): ReturnType<PeoplePlugin>;
export = people;
