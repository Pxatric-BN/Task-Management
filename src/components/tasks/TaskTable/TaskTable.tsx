import type { Task } from '@/types/task'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Button,
  Stack,
} from '@mui/material'

import useStyles  from './TaskTable.style'
import { STATUS_COLOR_MAP, PRIORITY_COLOR_MAP } from '@/constants'
import { formatDate } from '@/utils/date'

export const TaskTable = ({ tasks }: { tasks: Task[] }) => {
  const styles = useStyles()
  return (
    <TableContainer component={Paper} sx={styles.containerStyle}>
      <Table>
        <TableHead>
        <TableRow sx={styles.headRowStyle}>
            <TableCell>Task</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Priority</TableCell>
            <TableCell>Due Date</TableCell>
            <TableCell>Actions</TableCell>
        </TableRow>
        </TableHead>


        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id} hover>
              <TableCell sx={styles.cellStyle}>
                {task.title}
              </TableCell>

              <TableCell>
                <Chip
                  size="small"
                  label={task.status}
                  color={STATUS_COLOR_MAP[task.status]}
                />
              </TableCell>

              <TableCell>
                <Chip
                  size="small"
                  label={task.priority}
                  color={PRIORITY_COLOR_MAP[task.priority]}
                />
              </TableCell>

              <TableCell>
                {formatDate(task.createdAt)}
              </TableCell>

              <TableCell>
                <Stack direction="row" spacing={1}>
                  <Button
                    size="small"
                    variant="outlined"
                    color="inherit"
                    sx={styles.actionButtonStyle}
                  >
                    Edit
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    color="error"
                    sx={styles.actionButtonStyle}
                  >
                    Delete
                  </Button>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
