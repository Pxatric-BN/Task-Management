import z from 'zod'

export const useTaskFormSchema = () => {
  return z.object({
    title: z.string().min(1, 'Title is required'),
    description: z.string().optional(),
    status: z.enum(['pending', 'in_progress', 'done']),
    priority: z.enum(['low', 'medium', 'high']),
    dueDate: z.string().optional(),
  })
}
