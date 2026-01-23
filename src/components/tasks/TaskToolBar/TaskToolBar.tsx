import {
  Box,
  TextField,
  Button,
  MenuItem,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import GridViewIcon from '@mui/icons-material/GridView'
import ViewListIcon from '@mui/icons-material/ViewList'
import type { TaskStatus } from '@/types/task'

interface Props {
  view: 'card' | 'table'
  onViewChange: (v: 'card' | 'table') => void
  search: string
  onSearchChange: (v: string) => void
  status: TaskStatus | 'all'
  onStatusChange: (v: TaskStatus | 'all') => void
}

export const TaskToolBar = ({
  view,
  onViewChange,
  search,
  onSearchChange,
  status,
  onStatusChange,
}: Props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 48,
      }}
    >
      {/* LEFT */}
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        <TextField
          size="small"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          sx={{ width: 240 }}
        />

        <TextField
          select
          size="small"
          value={status}
          onChange={(e) =>
            onStatusChange(e.target.value as TaskStatus | 'all')
          }
          sx={{ width: 140 }}
        >
          <MenuItem value="all">All Status</MenuItem>
          <MenuItem value="pending">Pending</MenuItem>
          <MenuItem value="in-progress">In Progress</MenuItem>
          <MenuItem value="completed">Completed</MenuItem>
        </TextField>
      </Box>

      {/* RIGHT */}
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <ToggleButtonGroup
          size="small"
          value={view}
          exclusive
          onChange={(_, v) => v && onViewChange(v)}
        >
          <ToggleButton value="card">
            <GridViewIcon />
          </ToggleButton>
          <ToggleButton value="table">
            <ViewListIcon />
          </ToggleButton>
        </ToggleButtonGroup>

        <Button variant="contained" startIcon={<AddIcon />}>
          Add Task
        </Button>
      </Box>
    </Box>
  )
}
