import type { SxProps } from '@mui/material'

const useStyles = () => {
  const gridStyle: SxProps = {
    display: 'grid',
    gap: 2,
    gridTemplateColumns: {
      xs: '1fr',
      sm: 'repeat(2, minmax(0, 1fr))',
      md: 'repeat(3, minmax(0, 1fr))',
      lg: 'repeat(4, minmax(0, 1fr))',
    },
    alignItems: 'stretch',
  }

  const cardStyle: SxProps = {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0,
    borderRadius: 2,
    border: '1px solid #E5E7EB',
    backgroundColor: '#FFFFFF',
    p: 2,
    cursor: 'pointer',
    transition: 'transform 120ms ease, box-shadow 120ms ease',
    '&:hover': {
      transform: 'translateY(-1px)',
      boxShadow: 2,
    },
  }

  const headerStyle: SxProps = {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 1,
  }

  const titleStyle: SxProps = {
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 1.3,
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    wordBreak: 'break-word',
  }

  const dividerStyle: SxProps = { my: 1.25 }

  const badgeRowStyle: SxProps = {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    flexWrap: 'wrap', // ✅ มือถือให้ตัดบรรทัดได้
  }

  const dateStyle: SxProps = {
    marginLeft: { xs: 0, sm: 'auto' }, // ✅ มือถือไม่ต้องดันขวา
    whiteSpace: 'nowrap',
  }

  const descriptionStyle: SxProps = {
    mt: 1,
    color: 'text.secondary',
    display: '-webkit-box',
    WebkitLineClamp: { xs: 2, sm: 3 },
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    wordBreak: 'break-word',
  }

  const footerStyle: SxProps = {
    mt: 'auto',
    pt: 1.5,
    display: 'flex',
    gap: 1,
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
  }

  const buttonEditStyle: SxProps = {
    minWidth: { xs: 'calc(50% - 4px)', sm: 'auto' }, // ✅ มือถือปุ่มครึ่งจอ
    flex: { xs: 1, sm: 'unset' },
  }

  const buttonDeleteStyle: SxProps = {
    minWidth: { xs: 'calc(50% - 4px)', sm: 'auto' },
    flex: { xs: 1, sm: 'unset' },
  }

  return {
    gridStyle,
    cardStyle,
    headerStyle,
    titleStyle,
    dividerStyle,
    badgeRowStyle,
    dateStyle,
    descriptionStyle,
    footerStyle,
    buttonEditStyle,
    buttonDeleteStyle,
  }
}

export default useStyles
