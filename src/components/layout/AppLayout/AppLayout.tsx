'use client'

import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Box, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import useStyles from '@/components/layout/AppLayout/AppLayout.style'

type AppLayoutProps = {
  children: React.ReactNode
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const [navOpen, setNavOpen] = React.useState(false)
  const onOpenNav = () => setNavOpen(true)
  const onCloseNav = () => setNavOpen(false)

  const styles = useStyles({ isMobile })

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={styles.layoutStyle}>
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return child

          return React.cloneElement(child as any, {
            isMobile,
            navOpen,
            onOpenNav,
            onCloseNav,
          })
        })}
      </Box>
    </LocalizationProvider>
  )
}
