'use client'

import { Dialog, DialogTitle, DialogContent } from '@mui/material'
import type { Task } from '@/types/task'

interface Props {
  open: boolean
  task: Task | null
  onClose: () => void
}

export const TaskEditModal = ({ open, task, onClose }: Props) => {
  if (!task) return null

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>Edit Task</DialogTitle>

      <DialogContent>
        {/* form */}
      </DialogContent>
    </Dialog>
  )
}
