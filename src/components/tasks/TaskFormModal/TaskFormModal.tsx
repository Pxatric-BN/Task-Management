'use client'

import { useEffect } from 'react'
import { useForm, FormProvider, Controller } from 'react-hook-form'
import { DatePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import {
  Box,
  Button,
  FormGroup,
  TextField,
  Typography,
} from '@mui/material'
import useStyles from './TaskFormModal.style'
import { zodResolver } from '@hookform/resolvers/zod'

import TaskModal from '@/components/tasks/TaskModal/TaskModal'
import type { Task, TaskStatus, TaskPriority } from '@/types/task'
import {useCreateTask, useUpdateTask, useTaskFormSchema} from '@/hooks'
type TaskFormFields = {
  title: string
  description?: string
  status: TaskStatus
  priority: TaskPriority
  dueDate?: string
}

interface Props {
  open: boolean
  task?: Task | null
  onClose: () => void
  onSubmit?: (data: TaskFormFields) => void
}

export const TaskFormModal = ({
  open,
  task,
  onClose,
}: Props) => {
  const isEditMode = !!task

  const schema = useTaskFormSchema()  

  const formHook = useForm<TaskFormFields>({
  resolver: zodResolver(schema),
  defaultValues: {
    title: '',
    description: '',
    status: 'pending',
    priority: 'medium',
    dueDate: '',
  },
})

  const createTaskMutation = useCreateTask(onClose)
  const updateTaskMutation = useUpdateTask(onClose)
  const handleFormSubmit = (data: TaskFormFields) => {
  if (task) {
    updateTaskMutation.mutate({
      id: task.id,
      data,
    })
  } else {
    createTaskMutation.mutate(data)
  }
}

  const { control, handleSubmit, reset } = formHook
  const styles = useStyles()
  useEffect(() => {
    if (!open) return

    if (task) {
      reset({
        title: task.title,
        description: task.description || '',
        status: task.status,
        priority: task.priority,
        dueDate: task.dueDate
          ? new Date(task.dueDate).toISOString().split('T')[0]
          : undefined,
      })
    } else {
      reset({
        title: '',
        description: '',
        status: 'pending',
        priority: 'medium',
        dueDate: undefined,
      })
    }
  }, [open, task, reset])

  return (
    <TaskModal.Root open={open} onClose={onClose} sx={{
    width: 700,
    maxWidth: '70vw',
  }}>
      
      <TaskModal.Header onClose={onClose}>
        <Typography variant="h6">
          {isEditMode ? 'Edit Task' : 'Create Task'}
        </Typography>
      </TaskModal.Header>

    
      <TaskModal.Body>
        <FormProvider {...formHook}>
          <FormGroup sx={styles.formGroupStyle}>
            <Box>
              <Typography sx={styles.textStyle}>
                Task Title
              </Typography>
              <Controller
                name="title"
                control={control}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    fullWidth
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    sx={styles.helperTextStyle}
                    placeholder='Enter task title...'
                  />
                )}
              />
            </Box>

            <Box>
              <Typography sx={styles.textStyle}>
                Description{' '}
                <Typography component="span" color="text.secondary">
                  (optional)
                </Typography>
              </Typography>
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <TextField {...field} fullWidth multiline rows={4} 
                  placeholder='Enter description...'
                  />
                )}
              />
            </Box>
            <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2}>
              {/* Status */}
              <Box>
                <Typography sx={styles.textStyle}>Status</Typography>
                <Controller
                  name="status"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      select
                      fullWidth
                      slotProps={{
                        select: { native: true },
                      }}
                    >
                      <option value="pending">To Do</option>
                      <option value="in_progress">In Progress</option>
                      <option value="completed">Completed</option>
                    </TextField>
                  )}
                />
              </Box>

              {/* Priority */}
              <Box>
                <Typography sx={styles.textStyle}>Priority</Typography>
                <Controller
                  name="priority"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      select
                      fullWidth
                      slotProps={{
                        select: { native: true },
                      }}
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </TextField>
                  )}
                />
              </Box>

              <Box>
                <Typography sx={styles.textStyle}>Due Date</Typography>
                <Controller
                  name="dueDate"
                  control={control}
                  render={({ field }) => (
                  <DatePicker
                    format="DD/MM/YYYY"
                    value={field.value ? dayjs(field.value) : null}
                    onChange={(date) =>
                      field.onChange(date ? date.format('YYYY-MM-DD') : undefined)
                    }
                    slotProps={{
                      textField: {
                        fullWidth: true,
                      },
                    }}
                  />
                  )}
                />

              </Box>

              <Box />
            </Box>

          </FormGroup>
        </FormProvider>
      </TaskModal.Body>

      <TaskModal.Actions>
        <Button 
        variant="outlined" 
        onClick={onClose}
        sx={styles.cancleButtonStyle}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={handleSubmit(handleFormSubmit)}
        >
          {task ? 'Save' : 'Create'}
        </Button>   
      </TaskModal.Actions>
    </TaskModal.Root>
  )
}
