import type { ChipProps } from '@mui/material'
import type { TaskStatus, TaskPriority } from '@/types/task'

export const STATUS_COLOR_MAP: Record<TaskStatus, ChipProps['color']> = {
  pending: 'success',
  'in-progress': 'success',
  completed: 'primary',
}

export const PRIORITY_COLOR_MAP: Record<TaskPriority, ChipProps['color']> = {
  low: 'default',
  medium: 'warning',
  high: 'error',
}
