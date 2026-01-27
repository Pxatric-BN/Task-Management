import { type SxProps } from '@mui/material'

const useStyles = () => {
 

  const headerStyle: SxProps = {
    fontWeight: 600,
  }

  const cancleButtonStyle: SxProps = {
    color: 'text.primary',     
    borderColor: 'grey.400',  
    '&:hover': {
      borderColor: 'grey.600',
      backgroundColor: 'grey.100',
    },
  }

  return {
    headerStyle,
    cancleButtonStyle,
   
  }
}

export default useStyles