'use client'

import type { ReactNode } from 'react'

import { Close as CloseIcon } from '@mui/icons-material'
import {
  Stack,
  Modal,
  Box,
  IconButton,
  Divider,
  type BoxProps,
  type SxProps,
} from '@mui/material'

import useStyles from './TaskModal.style'
interface TaskModalRootProps {
  children: ReactNode
  open: boolean
  onClose: () => void
  gap?: number
  sx?: SxProps
}

function TaskModalRoot({
  children,
  open,
  onClose,
  gap = 3,
  sx,
}: TaskModalRootProps) {
  const styles = useStyles()

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ ...styles.boxStyle, ...sx }}>
        <Stack gap={gap} sx={styles.stackStyle}>
          {children}
        </Stack>
      </Box>
    </Modal>
  )
}


interface TaskModalHeaderProps {
  children: ReactNode
  onClose?: () => void
}

function TaskModalHeader({ children, onClose }: TaskModalHeaderProps) {
   const styles = useStyles()
  return (
    <Box
      sx={styles.headerWrapperStyle}
    >
      <Box sx={styles.headerContentStyle}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          {children}

          {onClose && (
            <IconButton size="small" onClick={onClose}>
              <CloseIcon />
            </IconButton>
          )}
        </Stack>
      </Box>

      <Divider />
    </Box>
  )
}

/* ================= Body ================= */

type TaskModalBodyProps = BoxProps & {
  children: ReactNode
}

function TaskModalBody({ children, ...props }: TaskModalBodyProps) {
  return <Box {...props}>{children}</Box>
}

interface TaskModalActionsProps {
  children: ReactNode
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between'
}

function TaskModalActions({
  children,
  justifyContent = 'flex-end',
}: TaskModalActionsProps) {
  return (
    <Box sx={{ mx: { xs: -2, sm: -3 }, mb: { xs: -2, sm: -3 } }}>
      <Divider />

      <Box sx={{ px: { xs: 2, sm: 3 }, py: 2 }}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          gap={1.5}
          justifyContent={justifyContent}
        >
          {children}
        </Stack>
      </Box>
    </Box>
  )
}


const TaskModal = {
  Root: TaskModalRoot,
  Header: TaskModalHeader,
  Body: TaskModalBody,
  Actions: TaskModalActions,
}

export default TaskModal
