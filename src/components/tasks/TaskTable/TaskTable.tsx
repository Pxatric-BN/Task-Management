'use client'

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

import useStyles from './TaskTable.style'
import { STATUS_COLOR_MAP, PRIORITY_COLOR_MAP } from '@/constants'
import { formatDate } from '@/utils/date'

interface Props {
  tasks: Task[]
  onSelect: (task: Task) => void
  onEdit: (task: Task) => void
  onDelete: (task: Task) => void
}

export const TaskTable = ({ tasks, onSelect, onEdit, onDelete }: Props) => {
  const styles = useStyles()

  return (
    <TableContainer component={Paper} sx={styles.containerStyle}>
      <Table stickyHeader sx={styles.tableStyle}>
        <TableHead>
          <TableRow sx={styles.headRowStyle}>
            <TableCell>Task</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Priority</TableCell>
            <TableCell>Due Date</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id} hover sx={styles.rowStyle} onClick={() => onSelect(task)}>
              <TableCell sx={styles.cellStyle}>{task.title}</TableCell>

              <TableCell>
                <Chip size="small" label={task.status} color={STATUS_COLOR_MAP[task.status]} />
              </TableCell>

              <TableCell>
                <Chip size="small" label={task.priority} color={PRIORITY_COLOR_MAP[task.priority]} />
              </TableCell>

              <TableCell sx={styles.dateCellStyle}>{formatDate(task.createdAt)}</TableCell>

              <TableCell align="right">
                <Stack direction="row" spacing={1} justifyContent="flex-end">
                  <Button
                    size="small"
                    variant="outlined"
                    color="inherit"
                    sx={styles.buttonEditStyle}
                    onClick={(e) => {
                      e.stopPropagation()
                      onEdit(task)
                    }}
                  >
                    Edit
                  </Button>

                  <Button
                    size="small"
                    variant="outlined"
                    color="error"
                    sx={styles.buttonDeleteStyle}
                    onClick={(e) => {
                      e.stopPropagation()
                      onDelete(task)
                    }}
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
