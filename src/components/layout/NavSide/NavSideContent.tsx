'use client'

import React from 'react'
import { Box, Divider, Typography, Avatar, IconButton } from '@mui/material'
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
  onClick?: () => void
}

const NavItem = ({ icon, label, active, onClick }: NavItemProps) => {
  const styles = useStyles()
  return (
    <Box
      onClick={onClick}
      sx={{ ...styles.item, ...(active && styles.activeItem), cursor: 'pointer' }}
    >
      <Box sx={styles.icon}>{icon}</Box>
      <Typography>{label}</Typography>
    </Box>
  )
}

type NavSideContentProps = {
  onClose?: () => void
}

export const NavSideContent = ({ onClose }: NavSideContentProps) => {
  const styles = useStyles()

  return (
    <Box sx={styles.root}>
      <Box sx={styles.logo}>
        <Typography variant="h6" fontWeight={700}>
          MUI
        </Typography>
      </Box>

      <Box sx={styles.menu}>
        <NavItem icon={<DashboardIcon />} label="Dashboard" onClick={onClose} />
        <NavItem icon={<AssignmentIcon />} label="Tasks" active onClick={onClose} />
        <NavItem icon={<FolderIcon />} label="Projects" onClick={onClose} />
        <NavItem icon={<CalendarMonthIcon />} label="Calendar" onClick={onClose} />
        <NavItem icon={<SettingsIcon />} label="Settings" onClick={onClose} />
      </Box>

      <Box flexGrow={1} />

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
