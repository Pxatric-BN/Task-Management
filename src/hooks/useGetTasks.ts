import { useQuery, type UseQueryOptions } from '@tanstack/react-query'
import { getTasks } from '@/services/task.service'
import type { Task } from '@/types/task'

export const useGetTasks = (
  options?: UseQueryOptions<Task[], Error>
) => {
  return useQuery<Task[], Error>({
    queryKey: ['tasks'],
    queryFn: getTasks,
    ...options,
  })
}
