import { Drawer, styled } from '@mui/material'

import SideBarData from '../SideBarData'

const WrappeDrawer = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    width: '250px',
  },
}))

const SideBarAdmin = ({ isMobile, ActiveMobile }) => {
  return (
    <div>
      <WrappeDrawer>
        <Drawer
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { width: '250px', background: 'white' },
          }}
          open
          variant="permanent"
          anchor="left"
        >
          <SideBarData/>
        </Drawer>

        <Drawer
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { width: '250px', background: 'white' },
          }}
          open={isMobile}
          variant="temporary"
          anchor="left"
          onClick={ActiveMobile}
        >
          <SideBarData/>
        </Drawer>
      </WrappeDrawer>
    </div>
  )
}

export default SideBarAdmin