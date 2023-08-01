import React, { useState } from 'react'
import logo from "../../assets/images/Groupe 2.png"
import HomeIcon from '@mui/icons-material/Home'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import BoyIcon from '@mui/icons-material/Boy';
import PaymentIcon from '@mui/icons-material/Payment';
import { Link, useNavigate } from 'react-router-dom'
import { Box, Button } from '@mui/material'

import LogoutIcon from '@mui/icons-material/Logout';


const menu = [
    {
        id: 1,
        path: '/accueil',
        name: 'Accueil',
        // icon: <img src={medecin} width="15px" height="15px" alt="icon" />,
        icon: <HomeIcon sx={{color:"black",width:"25px", height:"25px"}} />,
      },
      {
        id: 2,
        path: '/commande',
        name: 'Commande',
        icon: (
          <BoyIcon sx={{color:"black",width:"25px", height:"25px"}} />
        ),
      },
      {
        id: 3,
        path: '/appro',
        name: 'Approvisionner',
        icon: (
          <PersonAddIcon sx={{color:"black",width:"25px", height:"25px"}} />
        ),
      },
     
      {
        id: 4,
        path: '/mouvement-stock',
        name: 'Stock',
        icon: (
          <MedicalServicesIcon sx={{color:"black",width:"25px", height:"25px"}} />
        ),
      },
      {
        id: 5,
        path: '/parametre',
        name: 'Parametre',
        icon: (
          <PaymentIcon sx={{color:"black",width:"25px", height:"25px"}}/>
        ),
      },
  ]
  

const SideBarData = () => {

    const [selected, setSelected] = useState(0)


     const filterMenu = menu.filter((item)=>item.id !== 2 && item.id !==3)
     console.log("filter", filterMenu)
    return (
      <Box>
       <Box sx={{paddingLeft:"20px",marginTop:"15px"}}>
          <img src={logo} style={{height:"4rem"}} alt="logo"/>
       </Box>
      
        <div className="menu">
       {menu.map((item,index)=>{
          return (
          <Link 
          to={item.path}
              className={selected === index ? "menuItem active" : "menuItem"}
             key={index}
              onClick={() => setSelected(index)}
          >
            <div className="icon">{item.icon}</div>
            <span className={selected === index ? "menulabel active":"menulabel"}>{item.name}</span>
          </Link>
          )
       })}
        
        
         
           <Button onClick={console.log("logout")}  color="error" sx={{position:"absolute",bottom:"15px",right:"5px",textTransform:"none",fontWeight:"bold"}}>
        Deconnexion <LogoutIcon sx={{marginLeft:"10px"}}/>
      </Button>
        </div>
      </Box>
    )
}

export default SideBarData