import type { SxProps } from '@mui/material';

const useStyles = () => {
  
  const headerStyle: SxProps = {
  gridColumn: '2',
  gridRow: '1',
  height: 64,
  display: 'flex',
  alignItems: 'center',
  px: 3,
  borderBottom: '1px solid #E5E7EB',
};

  return { headerStyle};
};

export default useStyles;
