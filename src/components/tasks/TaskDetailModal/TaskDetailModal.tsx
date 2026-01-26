'use client'

import { Dialog, DialogContent, Divider } from '@mui/material'
import type { Task } from '@/types/task'

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
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogContent sx={{ p: 3 }}>
        <TaskDetailHeader
          title={task.title}
          onEdit={() => onEdit?.(task)}
          onDelete={() => onDelete?.(task)}
        />

        <Divider sx={{ my: 2 ,mx: -3 }} />

        <TaskDetailMeta task={task} />

        <Divider sx={{ my: 3 , mx: -3}} />

        <TaskDetailDescription description={task.description} />

        <Divider sx={{ my: 3 , mx: -3}} />

        <TaskDetailActivity createdAt={task.createdAt} />
      </DialogContent>
    </Dialog>
  )
}
