import { TaskStatus, TaskPriority } from '@/types/task';

export interface TaskFormFields {
  title: string
  description?: string
  status: TaskStatus
  priority: TaskPriority
  dueDate?: Date
}
