import type { SxProps } from '@mui/material';

const useStyles = () => {
  const layoutStyle: SxProps = {
    display: 'grid',
    gridTemplateColumns: '240px 1fr',
    gridTemplateRows: '64px 1fr',
    height: '100vh',
  };

  const navStyle: SxProps = {
    gridColumn: '1 / 2',
    gridRow: '1 / 3',
    borderRight: '1px solid #E5E7EB',
  };

  const headerStyle: SxProps = {
    gridColumn: '2 / 3',
    gridRow: '1 / 2',
    borderBottom: '1px solid #E5E7EB',
    display: 'flex',
    alignItems: 'center',
    bgcolor: '#fff',
  };

  const contentStyle: SxProps = {
    gridColumn: '2 / 3',
    gridRow: '2 / 3',
    overflow: 'auto',
  };

  return { layoutStyle, navStyle, headerStyle, contentStyle };
};

export default useStyles;
