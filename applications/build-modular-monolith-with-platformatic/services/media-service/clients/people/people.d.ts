import { FastifyPluginAsync } from 'fastify'

interface GetPeopleRequest {
  'limit'?: number;
  'offset'?: number;
  'totalCount'?: boolean;
  'fields'?: Array<string>;
  'where.createdAt.eq'?: string;
  'where.createdAt.neq'?: string;
  'where.createdAt.gt'?: string;
  'where.createdAt.gte'?: string;
  'where.createdAt.lt'?: string;
  'where.createdAt.lte'?: string;
  'where.createdAt.like'?: string;
  'where.createdAt.in'?: string;
  'where.createdAt.nin'?: string;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.name.eq'?: string;
  'where.name.neq'?: string;
  'where.name.gt'?: string;
  'where.name.gte'?: string;
  'where.name.lt'?: string;
  'where.name.lte'?: string;
  'where.name.like'?: string;
  'where.name.in'?: string;
  'where.name.nin'?: string;
  'where.updatedAt.eq'?: string;
  'where.updatedAt.neq'?: string;
  'where.updatedAt.gt'?: string;
  'where.updatedAt.gte'?: string;
  'where.updatedAt.lt'?: string;
  'where.updatedAt.lte'?: string;
  'where.updatedAt.like'?: string;
  'where.updatedAt.in'?: string;
  'where.updatedAt.nin'?: string;
  'where.or'?: Array<string>;
  'orderby.createdAt'?: string;
  'orderby.id'?: string;
  'orderby.name'?: string;
  'orderby.updatedAt'?: string;
}

interface GetPeopleResponseOK {
  'id'?: number;
  'name': string;
  'createdAt'?: string;
  'updatedAt'?: string;
}

interface CreatePersonRequest {
  'id'?: number;
  'name': string;
  'createdAt'?: string;
  'updatedAt'?: string;
}

interface CreatePersonResponseOK {
  'id'?: number;
  'name': string;
  'createdAt'?: string;
  'updatedAt'?: string;
}

interface UpdatePeopleRequest {
  'fields'?: Array<string>;
  'where.createdAt.eq'?: string;
  'where.createdAt.neq'?: string;
  'where.createdAt.gt'?: string;
  'where.createdAt.gte'?: string;
  'where.createdAt.lt'?: string;
  'where.createdAt.lte'?: string;
  'where.createdAt.like'?: string;
  'where.createdAt.in'?: string;
  'where.createdAt.nin'?: string;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.name.eq'?: string;
  'where.name.neq'?: string;
  'where.name.gt'?: string;
  'where.name.gte'?: string;
  'where.name.lt'?: string;
  'where.name.lte'?: string;
  'where.name.like'?: string;
  'where.name.in'?: string;
  'where.name.nin'?: string;
  'where.updatedAt.eq'?: string;
  'where.updatedAt.neq'?: string;
  'where.updatedAt.gt'?: string;
  'where.updatedAt.gte'?: string;
  'where.updatedAt.lt'?: string;
  'where.updatedAt.lte'?: string;
  'where.updatedAt.like'?: string;
  'where.updatedAt.in'?: string;
  'where.updatedAt.nin'?: string;
  'where.or'?: Array<string>;
  'id'?: number;
  'name': string;
  'createdAt'?: string;
  'updatedAt'?: string;
}

interface UpdatePeopleResponseOK {
  'id'?: number;
  'name': string;
  'createdAt'?: string;
  'updatedAt'?: string;
}

interface GetPersonByIdRequest {
  'fields'?: Array<string>;
  'id': number;
}

interface GetPersonByIdResponseOK {
  'id'?: number;
  'name': string;
  'createdAt'?: string;
  'updatedAt'?: string;
}

interface UpdatePersonRequest {
  'fields'?: Array<string>;
  'id': number;
  'name': string;
  'createdAt'?: string;
  'updatedAt'?: string;
}

interface UpdatePersonResponseOK {
  'id'?: number;
  'name': string;
  'createdAt'?: string;
  'updatedAt'?: string;
}

interface DeletePeopleRequest {
  'fields'?: Array<string>;
  'id': number;
}

interface DeletePeopleResponseOK {
  'id'?: number;
  'name': string;
  'createdAt'?: string;
  'updatedAt'?: string;
}

interface People {
  getPeople(req: GetPeopleRequest): Promise<Array<GetPeopleResponseOK>>;
  createPerson(req: CreatePersonRequest): Promise<CreatePersonResponseOK>;
  updatePeople(req: UpdatePeopleRequest): Promise<Array<UpdatePeopleResponseOK>>;
  getPersonById(req: GetPersonByIdRequest): Promise<GetPersonByIdResponseOK>;
  updatePerson(req: UpdatePersonRequest): Promise<UpdatePersonResponseOK>;
  deletePeople(req: DeletePeopleRequest): Promise<DeletePeopleResponseOK>;
}

type PeoplePlugin = FastifyPluginAsync<NonNullable<people.PeopleOptions>>

declare module 'fastify' {
  interface ConfigurePeople {
    async getHeaders(req: FastifyRequest, reply: FastifyReply): Promise<Record<string,string>>;
  }
  interface FastifyInstance {
    'people': People;
    configurePeople(opts: ConfigurePeople): unknown
  }

  interface FastifyRequest {
    'people': People;
  }
}

declare namespace people {
  export interface PeopleOptions {
    url: string
  }
  export const people: PeoplePlugin;
  export { people as default };
}

declare function people(...params: Parameters<PeoplePlugin>): ReturnType<PeoplePlugin>;
export = people;
