import React, { useEffect, useState } from 'react'
import {
    AppBar,
    Avatar,
    Badge,
    Box,
    FormControlLabel,
    IconButton,
    styled,
    Switch,
    Toolbar,
  } from '@mui/material'
  import MenuIcon from '@mui/icons-material/Menu'
  import AddCircleIcon from '@mui/icons-material/AddCircle'
  import NotificationsIcon from '@mui/icons-material/Notifications'
  import SearchIcon from '@mui/icons-material/Search'
  import InputBase from '@mui/material/InputBase'
 // import { useNavigate } from 'react-router-dom'
  import profilP from '../assets/images/profile.png'
  //import { useSelector } from 'react-redux'
  
  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
   justifyContent:"space-between"
  }))
  const Icons = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '2px',
    alignItems: 'center',
    background: 'white',
    [theme.breakpoints.up('sm')]: {
      padding: '5px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '5px',
      margin: '5px',
    },
    borderRadius: '20px',
  }))
  
  const Rechercher = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    background: 'rgba(23,156,188,0.10)',
    width: '20rem',
    borderRadius:"20px"
  }))

const TopBarPharma = ({ ActiveMobile }) => {
//   const {doctor,role} = useSelector(
//     (state) => state.login,
//   )
   // const navigate= useNavigate()
    const [actif,setActif]=useState(false)
    // useEffect(()=>{
    //     if(doctor){
    //       setActif(true)
    //     }
    // },[doctor])
    return (
    
       <AppBar sx={{ background: 'white' }} elevation={0}>
        <StyledToolbar>
          {/*<Box sx={{ marginLeft: { md: '80px', xs: '0px' } }}>
            <img src={logo} style={{ height: '3rem' }} />
    </Box>*/}
     <IconButton
      onClick={ActiveMobile}
      >
        <MenuIcon></MenuIcon>
      </IconButton>
  
          <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
            <IconButton>
              <NotificationsIcon />
            </IconButton>
            <Box
              sx={{
                border: '2px solid #F5F5F5',
                padding: '5px',
                marginLeft: '40px',
                marginRight: '40px',
              }}
            >
             <FormControlLabel
                control={
                  <Switch
                    size="small"
                    checked={actif}
                    onChange={(e) => setActif(e.target.checked)}
                    sx={{ marginRight: '10px' }}
                  />
                }
                label={<p className="status">Actif</p>}
                labelPlacement="start"
              />
            </Box>
  
            <IconButton>
              <Avatar
                src={profilP}
                style={{ width: '60px', height: '60px' }}
                alt={'Utilisateur'}
              />
            </IconButton>
            <Box sx={{ marginRight: '90px',lineHeight:"10px" }}>
         
                <h4 className="nom"> Dr Sow Bademba</h4>
              <p className="fonction">Front end developper</p>
               
          
            </Box> 
  
           
          </Box>
        </StyledToolbar>
      </AppBar>
    
    
      
    )
}

export default TopBarPharma