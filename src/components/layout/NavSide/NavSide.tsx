'use client'

import React from 'react'
import { Drawer } from '@mui/material'
import { NavSideContent } from './NavSideContent'

type NavSideProps = {
  isMobile?: boolean
  navOpen?: boolean
  onCloseNav?: () => void
}

const drawerWidth = 280

export const NavSide = ({ isMobile, navOpen, onCloseNav }: NavSideProps) => {
  if (isMobile) {
    return (
      <Drawer
        open={!!navOpen}
        onClose={onCloseNav}
        variant="temporary"
        ModalProps={{ keepMounted: true }}
        PaperProps={{ sx: { width: drawerWidth } }}
      >
        <NavSideContent onClose={onCloseNav} />
      </Drawer>
    )
  }

  return (
    <Drawer
      open
      variant="permanent"
      PaperProps={{
        sx: {
          width: drawerWidth,
          borderRight: '1px solid #E5E7EB',
        },
      }}
    >
      <NavSideContent />
    </Drawer>
  )
}
