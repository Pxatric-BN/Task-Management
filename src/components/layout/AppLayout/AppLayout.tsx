'use client';

import { Box } from '@mui/material';
import useStyles from '@/components/layout/AppLayout/AppLayout.style';

type AppLayoutProps = {
  children: React.ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps) => {
  const styles = useStyles();

  return (
    <Box sx={styles.layoutStyle}>
      {children}
    </Box>
  );
};
