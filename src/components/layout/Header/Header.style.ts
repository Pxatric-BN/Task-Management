import type { SxProps } from '@mui/material'

type Params = { isMobile?: boolean }

const useStyles = ({ isMobile }: Params = {}) => {
  const headerStyle: SxProps = {
    gridColumn: isMobile ? '1' : '2',
    gridRow: '1',
    height: 64,
    px: isMobile ? 1.5 : 3,
    display: 'flex',
    alignItems: 'center',
    gap: 1.5,
    borderBottom: '1px solid #E5E7EB',
    backgroundColor: '#FFFFFF',
    position: 'sticky',
    top: 0,
    zIndex: 10,
  }

  return { headerStyle }
}

export default useStyles
