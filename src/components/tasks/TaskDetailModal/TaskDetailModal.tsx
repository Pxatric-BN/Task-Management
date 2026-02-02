'use client'

import { Divider } from '@mui/material'
import type { Task } from '@/types/task'

import TaskModal from '@/components/tasks/TaskModal/TaskModal'
import { TaskDetailHeader } from './TaskDetailHeader'
import { TaskDetailMeta } from './TaskDetailMeta'
import { TaskDetailDescription } from './TaskDetailDescription'
import { TaskDetailActivity } from './TaskDetailActivity'

interface Props {
  open: boolean
  task: Task | null
  onClose: () => void
  onEdit?: (task: Task) => void
  onDelete?: (task: Task) => void
}

export const TaskDetailModal = ({
  open,
  task,
  onClose,
  onEdit,
  onDelete,
}: Props) => {
  if (!task) return null

  return (
    <TaskModal.Root
      open={open}
      onClose={onClose}
      sx={{
        width: { xs: 'calc(100vw - 24px)', sm: '100%' },
        maxWidth: { xs: '100%', sm: 900 },
      }}
    >
      <TaskModal.Body sx={{ px: { xs: 2, sm: 3 } }}>
        <TaskDetailHeader
          title={task.title}
          onEdit={() => onEdit?.(task)}
          onDelete={() => onDelete?.(task)}
        />

        <Divider sx={{ my: 2, mx: { xs: -2, sm: -3 } }} />

        <TaskDetailMeta task={task} />

        <Divider sx={{ my: 3, mx: { xs: -2, sm: -3 } }} />

        <TaskDetailDescription description={task.description} />

        <Divider sx={{ my: 3, mx: { xs: -2, sm: -3 } }} />

        <TaskDetailActivity createdAt={task.createdAt} />
      </TaskModal.Body>
    </TaskModal.Root>
  )
}
