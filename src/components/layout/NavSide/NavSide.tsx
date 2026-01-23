'use client'

import {
  Box,
  Divider,
  Typography,
  Avatar,
  IconButton,
} from '@mui/material'
import {
  ExpandMore as ExpandMoreIcon,
  Dashboard as DashboardIcon,
  Assignment as AssignmentIcon,
  Folder as FolderIcon,
  CalendarMonth as CalendarMonthIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material'


import useStyles from './NavSide.style'

type NavItemProps = {
  icon: React.ReactNode
  label: string
  active?: boolean
}

const NavItem = ({ icon, label, active }: NavItemProps) => {
  const styles = useStyles()

  return (
    <Box sx={{ ...styles.item, ...(active && styles.activeItem) }}>
      <Box sx={styles.icon}>{icon}</Box>
      <Typography>{label}</Typography>
    </Box>
  )
}

export const NavSide = () => {
  const styles = useStyles()

  return (
    <Box sx={styles.root}>
      {/* Logo */}
      <Box sx={styles.logo}>
        <Typography variant="h6" fontWeight={700}>
          MUI
        </Typography>
      </Box>

      {/* Menu */}
      <Box sx={styles.menu}>
        <NavItem icon={<DashboardIcon />} label="Dashboard" />
        <NavItem icon={<AssignmentIcon />} label="Tasks" active />
        <NavItem icon={<FolderIcon />} label="Projects" />
        <NavItem icon={<CalendarMonthIcon />} label="Calendar" />
        <NavItem icon={<SettingsIcon />} label="Settings" />
      </Box>

      <Box flexGrow={1} />

      {/* User */}
      <Divider />
      <Box sx={styles.user}>
        <Avatar src="/avatar.jpg" />
        <Typography sx={{ flex: 1 }}>John Doe</Typography>
        <IconButton size="small">
          <ExpandMoreIcon />
        </IconButton>
      </Box>
    </Box>
  )
}
