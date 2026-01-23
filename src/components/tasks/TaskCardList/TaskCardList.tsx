'use client'

import { Box, Chip, Typography, Button, Divider } from '@mui/material'
import type { Task } from '@/types/task'
import useStyles from './TaskCardList.style'
import { STATUS_COLOR_MAP, PRIORITY_COLOR_MAP } from '@/constants'
import { formatDate } from '@/utils'

export const TaskCardList = ({ tasks }: { tasks: Task[] }) => {
  const styles = useStyles()

  return (
    <Box sx={styles.gridStyle}>
      {tasks.map((task) => (
        <Box key={task.id} sx={styles.cardStyle}>
          {/* HEADER */}
          <Box sx={styles.headerStyle}>
            <Typography sx={styles.titleStyle}>
              {task.title}
            </Typography>
          </Box>

          <Divider sx={styles.dividerStyle} />

          {/* BADGES */}
          <Box sx={styles.badgeRowStyle}>
            <Chip
              size="medium"
              label={task.status}
              color={STATUS_COLOR_MAP[task.status]}
            />
            <Chip
              size="medium"
              label={task.priority}
              color={PRIORITY_COLOR_MAP[task.priority]}
            />
             <Typography variant="body2" color="text.secondary"  sx={styles.dateStyle}>
              {formatDate(task.createdAt)}
            </Typography>
          </Box>

          {/* DESCRIPTION */}
          {task.description && (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={styles.descriptionStyle}
            >
              {task.description}
            </Typography>
          )}

          {/* FOOTER */}
          <Box sx={styles.footerStyle}>
            <Button size="small" variant="outlined" color="inherit" sx={styles.buttonStyle}>
              Edit
            </Button>
            <Button size="small" variant="outlined" color="error" sx={styles.buttonStyle}>
              Delete
            </Button>
          </Box>
        </Box>
      ))}
    </Box>
  )
}
