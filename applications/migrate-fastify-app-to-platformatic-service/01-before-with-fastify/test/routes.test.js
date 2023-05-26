import { test } from 'node:test'
import assert from 'node:assert/strict'

import { buildApp } from '../app.js'

test('Basic API', async (t) => {
  const app = await buildApp()

  t.after(async () => {
    await app.close()
  })

  await t.test('GET request to /movies route', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/movies'
    })

    assert.equal(response.statusCode, 200)
    assert.deepEqual(response.json(), [
      'Jaws',
      'Star Wars',
      'The Wizard of Oz'
    ])
  })

  await t.test('GET request to /quotes route', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/quotes'
    })

    assert.equal(response.statusCode, 200)
    assert.deepEqual(response.json(), [
      'You\'re gonna need a bigger boat.',
      'May the Force be with you.',
      'Toto, I\'ve got a feeling we\'re not in Kansas anymore.'
    ])
  })
})
