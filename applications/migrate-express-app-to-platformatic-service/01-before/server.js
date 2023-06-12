import buildApp from './app.js'

const express = buildApp()

express.listen(3042, () => {
  console.log('Example app listening at http://localhost:3042')
})
