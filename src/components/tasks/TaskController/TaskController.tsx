'use client'

import { useMemo, useState } from 'react'
import type { Task, TaskStatus, TaskPriority } from '@/types/task'
import { useGetTasks } from '@/hooks/'

interface TaskControllerValue {
  tasks: Task[]
  view: 'card' | 'table'
  search: string
  status: TaskStatus | 'all'
  priority: TaskPriority | 'all'

  setView: (v: 'card' | 'table') => void
  setSearch: (v: string) => void
  setStatus: (v: TaskStatus | 'all') => void
  setPriority: (v: TaskPriority | 'all') => void
}

interface Props {
  children: (value: TaskControllerValue) => React.ReactNode
}

export const TaskController = ({ children }: Props) => {
  const { data: tasks = [], isLoading, error } = useGetTasks()

  const [view, setView] = useState<'card' | 'table'>('card')
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState<TaskStatus | 'all'>('all')
  const [priority, setPriority] = useState<TaskPriority | 'all'>('all')

  const filteredTasks = useMemo(() => {
  return tasks.filter((task) => {
    const matchSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase())

    const matchStatus =
      status === 'all' || task.status === status
    
    const matchPriority =
      priority === 'all' || task.priority === priority

    return matchSearch && matchStatus && matchPriority
  })
}, [tasks, search, status, priority])


  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return children({
    tasks: filteredTasks,
    view,
    search,
    status,
    priority,
    setView,
    setSearch,
    setStatus,
    setPriority,
  })
}