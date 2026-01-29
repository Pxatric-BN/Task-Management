'use client'

import { Box, Typography, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import useStyles from '@/components/layout/Header/Header.style'

type HeaderProps = {
  isMobile?: boolean
  onOpenNav?: () => void
}

export const Header = ({ isMobile, onOpenNav }: HeaderProps) => {
  const styles = useStyles({ isMobile })

  return (
    <Box sx={styles.headerStyle}>
      {isMobile && (
        <IconButton onClick={onOpenNav} size="small">
          <MenuIcon />
        </IconButton>
      )}
      <Typography variant="h5" fontWeight={700}>
        Task Management
      </Typography>
    </Box>
  )
}
