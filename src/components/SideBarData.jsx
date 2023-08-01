
// import logo from "../../images/Groupe 2.png"
import HomeIcon from '@mui/icons-material/Home'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import BoyIcon from '@mui/icons-material/Boy';
import PaymentIcon from '@mui/icons-material/Payment';
import { Link, useNavigate } from 'react-router-dom'
import { Box, Button } from '@mui/material'
// import { useDispatch, useSelector } from 'react-redux'
import LogoutIcon from '@mui/icons-material/Logout';
// import { logout } from '../../../Redux/features/LoginSlice'
import { useState } from "react";

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
    path: '/ventes',
    name: 'Ventes',
    icon: (
      <BoyIcon sx={{color:"black",width:"25px", height:"25px"}} />
    ),
  },
  {
    id: 3,
    path: '/purchase',
    name: 'Purchase',
    icon: (
      <PersonAddIcon sx={{color:"black",width:"25px", height:"25px"}} />
    ),
  },
  {
    id: 4,
    path: '/invoice',
    name: 'Invoices',
    icon: (
      <PersonAddIcon sx={{color:"black",width:"25px", height:"25px"}} />
    ),
  },
  {
    id: 5,
    path: '/medecine',
    name: 'Medecine',
    icon: (
      <MedicalServicesIcon sx={{color:"black",width:"25px", height:"25px"}} />
    ),
  },
  {
    id: 6,
    path: '/parameters',
    name: 'Paramètres',
    icon: (
      <PaymentIcon sx={{color:"black",width:"25px", height:"25px"}}/>
    ),
  },
]
  

const SideBarData = () => {
  
  const [selected, setSelected] = useState(0)
  const navigate = useNavigate();
  
  const handlelogout=(e)=>{
    e.preventDefault()
  }

  return (
    <Box>
      <Box sx={{paddingLeft:"20px",marginTop:"15px"}}>
        <img src="" style={{height:"4rem"}} alt="logo"/>
      </Box>

      <div className="menu">
        {menu.map((item, index) => {
          return (
            <Link
              to={item.path}
              className="menuItem"
              key={index}
              onClick={() => setSelected(index)}
            >
              <div className="icon">{item.icon}</div>
              <span>{item.name}</span>
            </Link>
          )
        })}
        <Button onClick={handlelogout}  color="error" 
          sx={{ position: "absolute", bottom: "15px", right: "5px", textTransform: "none",fontWeight: "bold" }}
        >
          Deconnexion <LogoutIcon sx={{marginLeft:"10px"}}/>
        </Button>
      </div>
    </Box>
  )
}

export default SideBarData