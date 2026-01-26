'use client'

import { useState } from 'react'
import type { Task } from '@/types/task'

type ModalType = 'detail' | 'edit' | 'delete' | null

export const TaskModalController = () => {
  const [open, setOpen] = useState(false)
  const [type, setType] = useState<ModalType>(null)
  const [task, setTask] = useState<Task | null>(null)

  const openDetail = (task: Task) => {
    setTask(task)
    setType('detail')
    setOpen(true)
  }

  const openEdit = (task: Task) => {
    setTask(task)
    setType('edit')
    setOpen(true)
  }

  const openDelete = (task: Task) => {
    setTask(task)
    setType('delete')
    setOpen(true)
  }

  const close = () => {
    setOpen(false)
    setType(null)
    setTask(null)
  }

  return {
    open,
    type,
    task,
    openDetail,
    openEdit,
    openDelete,
    close,
  }
}
