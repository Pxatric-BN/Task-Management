import type { SxProps } from '@mui/material'

const useStyles = () => {
  const containerStyle: SxProps = {
    width: '100%',
    overflowX: 'auto',      // ✅ เลื่อนได้แนวนอนบนมือถือ
    borderRadius: 2,
    boxShadow: 'none',
    border: '1px solid #E5E7EB',
  }

  const tableStyle: SxProps = {
    minWidth: 780,          // ✅ กันคอลัมน์อัดกันจนพัง (ปรับได้)
  }

  const headRowStyle: SxProps = {
    '& th': {
      fontWeight: 700,
      whiteSpace: 'nowrap',
      backgroundColor: '#FFFFFF',
    },
  }

  const rowStyle: SxProps = {
    cursor: 'pointer',
    '& td': { verticalAlign: 'middle' },
  }

  const cellStyle: SxProps = {
    minWidth: 260,
    maxWidth: 420,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis', // ✅ title ยาวไม่ดันตารางพัง
  }

  const dateCellStyle: SxProps = {
    whiteSpace: 'nowrap',
  }

  const buttonEditStyle: SxProps = { whiteSpace: 'nowrap' }
  const buttonDeleteStyle: SxProps = { whiteSpace: 'nowrap' }

  return {
    containerStyle,
    tableStyle,
    headRowStyle,
    rowStyle,
    cellStyle,
    dateCellStyle,
    buttonEditStyle,
    buttonDeleteStyle,
  }
}

export default useStyles
