import { useQuery } from '@tanstack/react-query'
import { getTasks } from '@/services/task.service'
import type { GetTasksParams } from '@/services/task.service'

export const useGetTasks = (params: GetTasksParams) => {
  return useQuery({
    queryKey: ['tasks', params],
    queryFn: () => getTasks(params),
    placeholderData: (previousData) => previousData,
  })
}
