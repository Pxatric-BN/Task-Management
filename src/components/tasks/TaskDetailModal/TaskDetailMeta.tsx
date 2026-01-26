import { Box, Chip, Typography, Divider } from '@mui/material'
import type { Task } from '@/types/task'
import { formatDate } from '@/utils'
import useStyles from './TaskDetailModal.style'

import { STATUS_COLOR_MAP, PRIORITY_COLOR_MAP } from '@/constants'

interface Props {
  task: Task
}

export const TaskDetailMeta = ({ task }: Props) => {
  const styles = useStyles()
  return (
    <Box sx={styles.metaStyle}>
      <Chip
        label={task.status}
        size="medium"
        color={STATUS_COLOR_MAP[task.status]}
      />
      <Chip
        label={task.priority}
        size="medium"
        color={PRIORITY_COLOR_MAP[task.priority]}
      />

     <Typography
      sx={styles.dateStyle}
    >
      Due Date
    </Typography>

    <Divider orientation="vertical" flexItem sx={styles.dividerStyle} />

    <Typography
      sx={styles.dateStyle}
    >
      {formatDate(task.createdAt)}
    </Typography>

    <Divider orientation="vertical" flexItem sx={styles.dividerStyle} />

    <Typography
       sx={styles.dateStyle}
    >
      Date Created {formatDate(task.createdAt)}
    </Typography>

    </Box>
  )
}
