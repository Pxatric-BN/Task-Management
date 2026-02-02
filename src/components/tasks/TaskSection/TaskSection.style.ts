import type { SxProps } from '@mui/material'

type Params = { isMobile?: boolean }

const useStyles = ({ isMobile }: Params = {}) => {
  const taskSectionStyle: SxProps = {
    gridColumn: isMobile ? '1' : '2',
    gridRow: '2',
    minWidth: 0,
    minHeight: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    p: isMobile ? 2 : 3,
    backgroundColor: '#F9FAFB',
  }

  const taskToolBarStyle: SxProps = {
    position: 'sticky',
    top: 0,
    zIndex: 1,
    backgroundColor: '#F9FAFB',
    pt: 1,
  }

  const taskContentStyle: SxProps = {
    flex: 1,
    minHeight: 0,
    overflow: 'auto',
  }

  return { taskSectionStyle, taskToolBarStyle, taskContentStyle }
}

export default useStyles
