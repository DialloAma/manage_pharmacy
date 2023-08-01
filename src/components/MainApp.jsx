import TopBarAdmin from './layouts/TopBarAdmin'
import SideBarAdmin from './layouts/SideBarAdmin'
import { Outlet } from 'react-router-dom'

import PropTypes from 'prop-types';  

const MainApp = ({ children }) => {
  return (
    <>
      <TopBarAdmin />
      <SideBarAdmin />
      
      { children }
      
      <Outlet />
    </>
  )
}

MainApp.propTypes = {  
  children: PropTypes.elementType.isRequired  
}  

export default MainApp
