import { type SxProps } from '@mui/material'

const useStyles = () => {
 

  const formGroupStyle: SxProps = {
    gap: 2,
  }
  const textStyle: SxProps = {
    fontWeight: 600,
    mb: 0.5,
  }
  const helperTextStyle: SxProps = {
    '& .MuiFormHelperText-root': {
        ml: 0,
    },
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
    formGroupStyle,
    cancleButtonStyle,
    textStyle,
    helperTextStyle,

   
  }
}

export default useStyles