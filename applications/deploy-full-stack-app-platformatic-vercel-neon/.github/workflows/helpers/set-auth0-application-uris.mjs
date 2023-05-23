import { parseArgs } from 'node:util'
import { ManagementClient } from 'auth0'

const options = {
  url: { type: 'string' },
  'auth0-domain': { type: 'string' },
  'auth0-gha-client-id': { type: 'string' },
  'auth0-gha-client-secret': { type: 'string' },
  'auth0-preview-apps-client-id': { type: 'string' }
}

const scriptArgs = parseArgs({ options })

for (let optionName of Object.keys(options)) {
  if (!(optionName in scriptArgs.values)) {
    throw new Error(`A '--${optionName} <value>' argument must be passed to this script`);
  }
}

const auth0 = new ManagementClient({
  domain: scriptArgs.values['auth0-domain'],
  clientId: scriptArgs.values['auth0-gha-client-id'],
  clientSecret: scriptArgs.values['auth0-gha-client-secret'],
})

const client = await auth0.clients.get({
  client_id: scriptArgs.values['auth0-preview-apps-client-id'],
  fields: 'callbacks,allowed_logout_urls,web_origins'
})

const newAllowedUrl = scriptArgs.values.url

if (client.callbacks.includes(newAllowedUrl)) {
  console.log(`[SKIPPING] Application URIs for Auth0 Blog previews app already contain: ${newAllowedUrl}`)
  process.exit(0)
}

const updatedFields = {
  callbacks: [...client.callbacks, newAllowedUrl],
  allowed_logout_urls: [...client.allowed_logout_urls, newAllowedUrl],
  web_origins: [...client.web_origins, newAllowedUrl]
}

await auth0.clients.update(
  { client_id: scriptArgs.values['auth0-preview-apps-client-id'] },
  updatedFields
)

console.log(`Added to Application URIs for Auth0 Blog previews app: ${newAllowedUrl}`)
