import { useState } from 'react'
import {
    AppBar,
    Avatar,
    // Badge,
    Box,
    FormControlLabel,
    IconButton,
    styled,
    Switch,
    Toolbar,
  } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
// import AddCircleIcon from '@mui/icons-material/AddCircle'
import NotificationsIcon from '@mui/icons-material/Notifications'
// import SearchIcon from '@mui/icons-material/Search'
// import InputBase from '@mui/material/InputBase'
// import { useNavigate } from 'react-router-dom'

import profile from '../../assets/images/profile.png';
  
const StyledToolbar = styled(Toolbar)(() => ({
  display: 'flex',
  justifyContent:"space-between"
}))

// const Icons = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   gap: '2px',
//   alignItems: 'center',
//   background: 'white',
//   [theme.breakpoints.up('sm')]: {
//     padding: '5px',
//   },
//   [theme.breakpoints.down('sm')]: {
//     padding: '5px',
//     margin: '5px',
//   },
//   borderRadius: '20px',
// }))
  
// const Rechercher = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   background: 'rgba(23,156,188,0.10)',
//   width: '20rem',
//   borderRadius:"20px"
// }))

const TopBarAdmin = () => {

  const [actif, setActif] = useState(false)

  return (
    <>
      <AppBar sx={{ background: 'white', marginBottom: '5rem' }} elevation={1}>
        <StyledToolbar>
          <IconButton>
            <MenuIcon></MenuIcon>
          </IconButton>
    
          <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
            <IconButton>
              <NotificationsIcon color='primary' />
            </IconButton>
            <Box sx={{
                border: '2px solid #cfcfcf',
                // padding: '5px',
                margin: '0 30px'
            }}>
              <FormControlLabel control={ 
                <Switch
                  size="small"
                  checked={actif}
                  onChange={(e) => setActif(e.target.checked)}
                  sx={{ marginRight: '20px' }}
                />
              }
                label={<p style={{ color: '#000'}}>Actif</p>}
                labelPlacement="start"
              />
            </Box>

            <IconButton>
              <Avatar
                src={profile}
                style={{ width: '50px', height: '50px' }}
                alt={'Utilisateur'}
              />
            </IconButton>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
              <h4 style={{ color: '#000' }}> Dr Ousmane Diaby </h4>
              <p style={{ color: '#000' }}>Médecin</p>
            </Box> 
          </Box>
        </StyledToolbar>
      </AppBar>
    </>  
  )
}

export default TopBarAdmin