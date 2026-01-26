import type { SxProps, Theme } from '@mui/material'

const useStyles = () => {
  const containerStyle: SxProps<Theme> = {
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'grey.200',
    bgcolor: 'background.paper',
    boxShadow: 1,
  }

  const tableStyle: SxProps<Theme> = {
    minWidth: 650,
  }

  const headRowStyle: SxProps<Theme> = {
    backgroundColor: 'grey.50',
    '& th': {
      fontWeight: 600,
      color: 'text.secondary',
    },
  }


  const rowStyle: SxProps<Theme> = {
    '&:hover': {
      backgroundColor: 'action.hover',
    },
  }

  const cellStyle: SxProps<Theme> = {
    py: 2,
  }

  const actionStyle: SxProps<Theme> = {
    display: 'flex',
    gap: 1,
  }

  const actionButtonStyle: SxProps<Theme> = {
    textTransform: 'none',
    fontWeight: 600,
  }

  return {
    containerStyle,
    tableStyle,
    headRowStyle,
    rowStyle,
    cellStyle,
    actionStyle,
    actionButtonStyle,
  }
}

export default useStyles
