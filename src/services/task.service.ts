import type { Task } from '@/types/task'
import { isAxiosError } from 'axios'
import { publicAxios } from '@/lib' 

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