'use client'

import { Button, Typography } from '@mui/material'
import TaskModal from '@/components/tasks/TaskModal/TaskModal'
import type { Task } from '@/types/task'
import useStyles from './TaskDeleteModal.style'
interface Props {
  open: boolean
  task: Task | null
  loading?: boolean
  onClose: () => void
  onConfirm: () => void
}

export const TaskDeleteModal = ({
  open,
  task,
  loading,
  onClose,
  onConfirm,
}: Props) => {
  const styles = useStyles()
  if (!task) return null
  
  return (
   <TaskModal.Root
      open={open}
      onClose={onClose}
      sx={{
        width: { xs: 'calc(100vw - 56px)', sm: 560, md: 700 },
        maxWidth: '900px',
      }}
    >
     <TaskModal.Header onClose={onClose}>
        <Typography sx={styles.headerStyle}>Delete Task</Typography>
      </TaskModal.Header>

      <TaskModal.Body>
        <Typography>
          Are you sure you want to delete the task &apos;{task.title}&apos;?
        </Typography>
         <Typography>
          This action cannot be undone.
        </Typography>
      </TaskModal.Body>

      <TaskModal.Actions >
        <Button
          onClick={onClose}
          variant="outlined"
          sx={styles.cancleButtonStyle}
        >
          Cancel
        </Button>

        <Button
          color="error"
          variant="contained"
          onClick={onConfirm}
          disabled={loading}
        >
          Delete
        </Button>
      </TaskModal.Actions>
    </TaskModal.Root>
  )
}
