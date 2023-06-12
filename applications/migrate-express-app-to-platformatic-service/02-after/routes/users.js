import express from 'express'

const router = express.Router()

router.use(express.json())

router.post('/', function createUser(request, response, next) {
  const newUser = request.body

  if (!newUser) {
    return next(new Error('Error creating user'))
  }

  response.status(201).json(newUser)
})

router.get('/:user_id', function getUser(request, response, next) {
  const user = {
    id: Number(request.params.user_id),
    first_name: 'Bobo',
    last_name: 'Oso'
  }

  response.json(user)
})

export const usersRoutes = router
