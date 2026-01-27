import { useMutation } from '@tanstack/react-query'
import { createTask } from '@/services/task.service'
import type { Task } from '@/types/task'
import type { TaskPayload } from '@/services/task.service'

const useCreateTask = () => {
  return useMutation<Task, unknown, TaskPayload>({
    mutationFn: createTask,
  })
}

export default useCreateTask
