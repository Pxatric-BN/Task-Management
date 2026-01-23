import { Box, Typography } from '@mui/material';
import useStyles from '@/components/layout/Header/Header.style';

export const Header = () => {
  const styles = useStyles();

  return (
    <Box sx={styles.headerStyle} >
      <Typography variant="h5">Task Management</Typography>
    </Box>
  );
};
