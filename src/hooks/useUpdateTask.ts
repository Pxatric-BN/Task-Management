import { useMutation } from '@tanstack/react-query'
import { updateTask } from '@/services/task.service'
import type { Task } from '@/types/task'
import type { TaskPayload } from '@/services/task.service'

type UpdateTaskParams = {
  id: string
  data: TaskPayload
}

const useUpdateTask = () => {
  return useMutation<Task, unknown, UpdateTaskParams>({
    mutationFn: ({ id, data }) => updateTask(id, data),
  })
}

export default useUpdateTask
