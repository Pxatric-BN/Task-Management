import type { SxProps } from '@mui/material'

const useStyles = () => {
  const taskSectionStyle: SxProps = {
  gridColumn: '2',
  gridRow: '2',
  background: '#F9FAFB',
  padding: 0,   
};


const taskToolBarStyle: SxProps = {
    px: 3,
    py: 2,
    background: '#FFFFFF',
    borderBottom: '1px solid #E5E7EB',
  }
const taskContentStyle: SxProps = {
  p: 3,              
}
  return { 
    taskSectionStyle, 
    taskToolBarStyle,
    taskContentStyle }
}

export default useStyles
