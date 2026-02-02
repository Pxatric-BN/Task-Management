import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateTask } from '@/services/task.service'
import type { Task } from '@/types/task'
import type { TaskPayload } from '@/services/task.service'

type UpdateTaskParams = {
  id: string
  data: TaskPayload
}

const useUpdateTask = (onSuccess?: () => void) => {
  const queryClient = useQueryClient()

  return useMutation<Task, unknown, UpdateTaskParams>({
    mutationFn: ({ id, data }) => updateTask(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
      onSuccess?.()
    },
  })
}

export default useUpdateTask
