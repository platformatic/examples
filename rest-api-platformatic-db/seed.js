'use strict'

const exampleData = [
  {
    user: {
      username: 'manuel.lo',
      displayName: 'Manuel'
    },
    tasks: [
      { description: 'Write grocery list', priority: 3 },
      { description: 'Fix kitchen tap', priority: 1 },
      { description: 'Buy plants', priority: 1 },
      { description: 'Go for a swim', priority: 2 },
      { description: 'Practice playing guitar', priority: 3 }
    ]
  },
  {
    user: {
      username: 'charlie37',
      displayName: 'Charlie B'
    },
    tasks: [
      { description: 'Buy dog snacks', priority: 2 },
      { description: 'Submit article for review', priority: 2 },
      { description: 'Return faulty headphones', priority: 2 },
      { description: 'Walk the dog', priority: 1 },
      { description: 'Go for a run', priority: 3 },
      { description: 'Plan summer vacation', priority: 2 },
      { description: 'Order new headphones', priority: 3 }
    ]
  }
]

module.exports = async function ({ entities }) {
  for (const { user, tasks } of exampleData) {
    const newUser = await entities.user.save({ input: user })

    console.log('Created user:', newUser)

    const userTasks = tasks.map(task => ({ ...task, userId: newUser.id }))

    const newTasks = await entities.task.insert({ inputs: userTasks })

    console.log('Created tasks:', newTasks)
  }
}
