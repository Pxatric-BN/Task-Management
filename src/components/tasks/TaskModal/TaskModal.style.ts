import { useTheme, type SxProps } from '@mui/material'

const useStyles = () => {
  const theme = useTheme()

  const boxStyle: SxProps = {
    position: 'absolute',
    padding: 3,
    width: 500,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 1,
    boxShadow: theme.shadows[3],
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }

  const closeIconStyle: SxProps = {
    position: 'absolute',
    right: 8,
    top: 20,
  }

  const headerWrapperStyle: SxProps = {
    backgroundColor: 'grey.100',
    mx: -3,        
    mt: -3,
  }

  const headerContentStyle: SxProps = {
    py: 2,
    px: 3,
  }

  return {
    boxStyle,
    closeIconStyle,
    headerWrapperStyle,
    headerContentStyle
  }
}

export default useStyles