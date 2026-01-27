import type { Task, TaskStatus, TaskPriority } from '@/types/task'
import { isAxiosError } from 'axios'
import { publicAxios } from '@/lib'

export type TaskPayload = {
  title: string
  description?: string
  status: TaskStatus
  priority: TaskPriority
  dueDate?: string
}


export const getTasks = async (): Promise<Task[]> => {
  try {
    const { data } = await publicAxios.get<Task[]>('/tasks')
    return data
  } catch (error) {
    if (isAxiosError(error)) {
      throw error.response?.data ?? error
    }
    throw error
  }
}

export const createTask = async (
  payload: TaskPayload,
): Promise<Task> => {
  try {
    const { data } = await publicAxios.post<Task>('/tasks', payload)
    return data
  } catch (error) {
    if (isAxiosError(error)) {
      throw error.response?.data ?? error
    }
    throw error
  }
}

export const updateTask = async (
  id: string,
  payload: TaskPayload,
): Promise<Task> => {
  try {
    const { data } = await publicAxios.put<Task>(
      `/tasks/${id}`,
      payload,
    )
    return data
  } catch (error) {
    if (isAxiosError(error)) {
      throw error.response?.data ?? error
    }
    throw error
  }
}

export const deleteTask = async (id: string): Promise<void> => {
  try {
    await publicAxios.delete(`/tasks/${id}`)
  } catch (error) {
    if (isAxiosError(error)) {
      throw error.response?.data ?? error
    }
    throw error
  }
}
