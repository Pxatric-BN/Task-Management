'use client'

import type { ReactNode } from 'react'

import { Close as CloseIcon } from '@mui/icons-material'
import { Stack, Modal, Box, IconButton, type BoxProps, type SxProps, Divider } from '@mui/material'

import useStyles from './TaskModal.style'

/* ================= Root ================= */

interface TaskModalRootProps {
  children: ReactNode
  open: boolean
  onClose: () => void
  gap?: number
  sx?: SxProps
  showCloseIcon?: boolean
}

function TaskModalRoot({
  children,
  open,
  onClose,
  gap = 3,
  sx,
  showCloseIcon = true,
}: TaskModalRootProps) {
  const styles = useStyles()

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ ...styles.boxStyle, ...sx }}>
        {showCloseIcon && (
          <IconButton
            sx={styles.closeIconStyle}
            onClick={onClose}
            size="small"
          >
            <CloseIcon />
          </IconButton>
        )}

        <Stack gap={gap}>{children}</Stack>
      </Box>
    </Modal>
  )
}

interface TaskModalHeaderProps {
  children: ReactNode
}

function TaskModalHeader({ children }: TaskModalHeaderProps) {
  const styles = useStyles()
  return (
    <Box sx={styles.headerWrapperStyle}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={styles.headerContentStyle}
      >
        {children}
      </Stack>

      <Divider sx={{mx:-3}} />
    </Box>
    
  )
}

type TaskModalBodyProps = BoxProps & {
  children: ReactNode
}

function TaskModalBody({ children, ...props }: TaskModalBodyProps) {
  return (
    <Box {...props}>
      {children}
    </Box>
  )
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
    <Box>
    <Divider sx={{mx:-3}} />
    <Stack
      direction="row"
      gap={2}
      marginTop={2}
      justifyContent={justifyContent}
    >
      {children}
    </Stack>
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
