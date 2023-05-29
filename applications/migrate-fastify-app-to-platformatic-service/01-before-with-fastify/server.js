import { buildApp } from './app.js'

const port = process.env.PORT || 3042
const host = process.env.HOST || '127.0.0.1'

const options = {
  logger: {
    level: 'info'
  }
}

const app = await buildApp(options)

await app.listen({ port, host })
