import { useState } from 'react'
import type { Task } from '@/types/task'

export const TaskModalController = () => {
  const [type, setType] = useState<
    'detail' | 'form' | 'delete' | null
  >(null)
  const [task, setTask] = useState<Task | null>(null)

  return {
    type,
    task,

    openDetail: (task: Task) => {
      setTask(task)
      setType('detail')
    },

    openEdit: (task: Task) => {
      setTask(task)
      setType('form')
    },

    openCreate: () => {
      setTask(null)
      setType('form')
    },

    openDelete: (task: Task) => {
      setTask(task)
      setType('delete')
    },

    close: () => {
      setTask(null)
      setType(null)
    },
  }
}
