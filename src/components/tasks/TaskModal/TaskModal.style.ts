import type { SxProps } from '@mui/material'

const useStyles = () => {
  const boxStyle: SxProps = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    width: { xs: 'calc(100vw - 24px)', sm: 560, md: 720 },
    maxWidth: '960px',

    maxHeight: { xs: 'calc(100vh - 24px)', sm: 'calc(100vh - 64px)' },
    overflow: 'hidden', // ✅ สำคัญ: ให้ scroll ไปอยู่ใน content แทน

    bgcolor: '#fff',
    borderRadius: { xs: 2, sm: 3 },
    boxShadow: 24,

    p: { xs: 2, sm: 3 },
    outline: 'none',
  }

  const stackStyle: SxProps = {
    height: '100%',
    minHeight: 0,
    overflow: 'auto', // ✅ เนื้อหาเยอะให้เลื่อนใน modal
  }

  const headerWrapperStyle: SxProps = {
    mx: { xs: -2, sm: -3 },
    mt: { xs: -2, sm: -3 },
  }

  const headerContentStyle: SxProps = {
    px: { xs: 2, sm: 3 },
    pt: { xs: 2, sm: 2.5 },
    pb: { xs: 1.5, sm: 2 },
  }

  return {
    boxStyle,
    stackStyle,
    headerWrapperStyle,
    headerContentStyle,
  }
}

export default useStyles
