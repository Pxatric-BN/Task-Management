'use client'

import { useState } from 'react'
import type { Task } from '@/types/task'
import { TaskDetailModal } from '@/components/tasks'

interface TaskModalControllerValue {
  open: boolean
  task: Task | null
  openDetail: (task: Task) => void
  close: () => void
}

interface Props {
  children: (value: TaskModalControllerValue) => React.ReactNode
}

export const TaskModalController = ({ children }: Props) => {
  const [open, setOpen] = useState(false)
  const [task, setTask] = useState<Task | null>(null)

  const openDetail = (task: Task) => {
    setTask(task)
    setOpen(true)
  }

  const close = () => {
    setOpen(false)
    setTask(null)
  }

  return (
    <>
      {children({
        open,
        task,
        openDetail,
        close,
      })}

      <TaskDetailModal open={open} task={task} onClose={close} />
    </>
  )
}
