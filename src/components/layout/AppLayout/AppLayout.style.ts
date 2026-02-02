import type { SxProps } from '@mui/material'

type Params = {
  isMobile?: boolean
}

const useStyles = ({ isMobile }: Params = {}) => {
  const layoutStyle: SxProps = {
    minHeight: '100vh',
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '280px 1fr',
    gridTemplateRows: '64px 1fr',
    backgroundColor: '#F9FAFB',
  }

  return { layoutStyle }
}

export default useStyles
