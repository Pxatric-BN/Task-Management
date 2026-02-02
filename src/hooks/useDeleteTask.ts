import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteTask } from '@/services/task.service'

const useDeleteTask = () => {
  const queryClient = useQueryClient()

  return useMutation<void, unknown, string>({
    mutationFn: (id) => deleteTask(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
  })
}

export default useDeleteTask
