'use client'

import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import { Box } from '@mui/material';
import useStyles from '@/components/layout/AppLayout/AppLayout.style';

type AppLayoutProps = {
  children: React.ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps) => {
  const styles = useStyles();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={styles.layoutStyle}>
        {children}
      </Box>
    </LocalizationProvider>
  );
};
