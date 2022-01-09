import { uuid } from './utils'

export default {
  name: 'workshop',
  columns: [
    {
      name: 'To Do',
      tasks: [
        {
          description: '',
          name: 'First task',
          id: uuid(),
          userAssigned: null
        },
        {
          description: '',
          name: 'Second task',
          id: uuid(),
          userAssigned: null
        },
        {
          description: 'This is a description',
          name: 'Third task',
          id: uuid(),
          userAssigned: null
        }
      ]
    },
    {
      name: 'In progress',
      tasks: [
        {
          description: '',
          name: 'First task',
          id: uuid(),
          userAssigned: null
        }
      ]
    },
    {
      name: 'Done',
      tasks: [
        {
          description: '',
          name: 'First task',
          id: uuid(),
          userAssigned: null
        }
      ]
    }
  ]
}
