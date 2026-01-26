const useStyles = () => ({
  root: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    bgcolor: '#fff',
    borderRight: '1px solid #E5E7EB',
    gridColumn: '1',
    gridRow: '1 / span 2',
   
  },

  logo: {
    height: 64,
    display: 'flex',
    alignItems: 'center',
    px: 3,
  },

  menu: {
    px: 2,
    py: 2,
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
  },

  item: {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    px: 2,
    py: 1.2,
    borderRadius: '0 14px 14px 0',
    color: 'text.secondary',
    cursor: 'pointer',
    transition: '0.2s',

    '&:hover': {
      bgcolor: 'action.hover',
    },
  },

  activeItem: {
    bgcolor: '#1976d2',
    color: '#fff',

    '&:hover': {
      bgcolor: '#1565c0',
    },
  },

  icon: {
    display: 'flex',
    alignItems: 'center',
  },

  user: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    px: 2,
    py: 2,
  },
})

export default useStyles
