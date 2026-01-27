'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'


import { useTaskFormSchema } from '@/hooks/useTaskFormSchema'
import { TaskFormFields } from '@/interfaces'

export const useTaskForm = () => {
  const schema = useTaskFormSchema()

  return useForm<TaskFormFields>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: '',
      description: '',
      status: 'pending',
      priority: 'medium',
      dueDate: undefined,
    },
  })
}
