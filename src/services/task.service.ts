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

export type GetTasksParams = {
  search?: string
  status?: TaskStatus
  priority?: TaskPriority
}


export const getTasks = async (params?: GetTasksParams) => {
  const res = await publicAxios.get('/tasks', { params })
  console.log('API DATA 👉', res.data, typeof res.data)
  return res.data
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
