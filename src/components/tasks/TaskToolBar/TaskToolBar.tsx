'use client'

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
import type { TaskStatus, TaskPriority } from '@/types/task'

interface Props {
  view: 'card' | 'table'
  onViewChange: (v: 'card' | 'table') => void
  search: string
  onSearchChange: (v: string) => void
  status: TaskStatus | 'all'
  onStatusChange: (v: TaskStatus | 'all') => void
  priority: TaskPriority | 'all'
  onPriorityChange: (v: TaskPriority | 'all') => void
  onCreate: () => void
}

export const TaskToolBar = ({
  view,
  onViewChange,
  search,
  onSearchChange,
  status,
  onStatusChange,
  priority,
  onPriorityChange,
  onCreate,
}: Props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'stretch', md: 'center' },
        justifyContent: 'space-between',
        gap: { xs: 1.25, md: 0 },
      }}
    >
      {/* LEFT */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1,
          alignItems: 'center',
        }}
      >
        <TextField
          size="small"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          sx={{ width: { xs: '100%', md: 240 } }}
        />

        <TextField
          select
          size="small"
          value={status}
          onChange={(e) => onStatusChange(e.target.value as TaskStatus | 'all')}
          sx={{ width: { xs: 'calc(50% - 4px)', md: 140 } }}
        >
          <MenuItem value="all">All Status</MenuItem>
          <MenuItem value="pending">Pending</MenuItem>
          <MenuItem value="in_progress">In Progress</MenuItem>
          <MenuItem value="done">Completed</MenuItem>
        </TextField>

        <TextField
          select
          size="small"
          value={priority}
          onChange={(e) => onPriorityChange(e.target.value as TaskPriority | 'all')}
          sx={{ width: { xs: 'calc(50% - 4px)', md: 140 } }}
        >
          <MenuItem value="all">All Priority</MenuItem>
          <MenuItem value="low">Low</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="high">High</MenuItem>
        </TextField>
      </Box>

      
      {/* RIGHT */}
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        flexWrap: 'wrap',              
        justifyContent: { xs: 'flex-start', md: 'flex-end' },
        minWidth: 0,
      }}
    >
      <ToggleButtonGroup
        size="small"
        value={view}
        exclusive
        onChange={(_, v) => v && onViewChange(v)}
        sx={{
          flexShrink: 0,                  
        }}
      >
        <ToggleButton value="card" aria-label="card view">
          <GridViewIcon />
        </ToggleButton>
        <ToggleButton value="table" aria-label="table view">
          <ViewListIcon />
        </ToggleButton>
      </ToggleButtonGroup>

      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={onCreate}
        sx={{
          width: { xs: '100%', md: 'auto' }, 
          flexGrow: { xs: 1, md: 0 },
          whiteSpace: 'nowrap',
        }}
      >
        Add Task
      </Button>
    </Box>
    </Box>
  )
}
