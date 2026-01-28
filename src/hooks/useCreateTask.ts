import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createTask } from '@/services/task.service'
import type { Task } from '@/types/task'
import type { TaskPayload } from '@/services/task.service'

const useCreateTask = (onSuccessCallback?: () => void) => {
  const queryClient = useQueryClient()

  return useMutation<Task, unknown, TaskPayload>({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
      onSuccessCallback?.()
    },
  })
}

export default useCreateTask
