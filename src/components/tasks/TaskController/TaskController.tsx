'use client'

import { useState } from 'react'
import type { Task, TaskStatus, TaskPriority } from '@/types/task'
import { useGetTasks, useDebounce } from '@/hooks/'

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
  const [view, setView] = useState<'card' | 'table'>('card')
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState<TaskStatus | 'all'>('all')
  const [priority, setPriority] = useState<TaskPriority | 'all'>('all')

  const debouncedSearch = useDebounce(search, 500)

  const { data: tasks = [], isLoading, error } = useGetTasks({
    search: debouncedSearch || undefined,
    status: status === 'all' ? undefined : status,
    priority: priority === 'all' ? undefined : priority,
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return children({
    tasks,
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

