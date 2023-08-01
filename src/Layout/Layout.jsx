import { styled } from '@mui/material'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import SideBarPharma from '../SideBar TopBar/SideBarPharma'
import TopBarPharma from '../SideBar TopBar/TopBarPhama'

const ContainerLayout = styled('div')(({ theme }) => ({
  display: 'flex',
}))

const Topbarlargeur = styled('main')(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    marginTop: '66px',
  },
  [theme.breakpoints.up('sm')]: {
    marginTop: '64px',
  },
}))
const Layout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false)

  const ActiveMobile = () => {
    setIsMobile(!isMobile)
  }
  return (
    <>
      <ContainerLayout>
        <SideBarPharma isMobile={isMobile} ActiveMobile={ActiveMobile} />
        <TopBarPharma ActiveMobile={ActiveMobile} />
        <Topbarlargeur>{children}</Topbarlargeur>
      </ContainerLayout>
      <Outlet />
    </>
  )
}

export default Layout
