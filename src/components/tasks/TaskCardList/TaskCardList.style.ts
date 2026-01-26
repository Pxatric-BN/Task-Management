import type { SxProps, Theme } from '@mui/material'

const useStyles = () => {
  const gridStyle: SxProps<Theme> = {
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      md: 'repeat(2, 1fr)',
      xl: 'repeat(3, 1fr)',
    },
    gap: 3,
  }

  const cardStyle: SxProps<Theme> = {
    p: 2,
    borderRadius: 2,
    border: '1px solid',
    borderColor: 'grey.200',
    bgcolor: 'background.paper',
    boxShadow: 1,
    transition: 'all 0.2s ease',
    '&:hover': {
      boxShadow: 3,
    },
  }

  const headerStyle: SxProps<Theme> = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    mb: 2,
  }

  const titleStyle: SxProps<Theme> = {
    fontWeight: 600,
  }

  const badgeRowStyle: SxProps<Theme> = {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    mt: 1,
  }
  const dividerStyle: SxProps<Theme> = {
    my: 1,
  }
  const buttonStyle: SxProps<Theme> = {
    fontWeight: 600,
  }
  const footerStyle: SxProps<Theme> = {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: 1,
    mt: 2,
  }

  const dateStyle: SxProps<Theme> = {
    marginLeft: 'auto',
  }

  const descriptionStyle: SxProps<Theme> = {
    mt: 1,
  }

  return {
    gridStyle,
    cardStyle,
    headerStyle,
    badgeRowStyle,
    footerStyle,
    titleStyle,
    dividerStyle,
    buttonStyle,
    dateStyle,
    descriptionStyle,
  }
}

export default useStyles
