import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import MainApp from "./components/MainApp"
import Invoice from "./components/Invoice"
import Medecine from "./components/Medecine"
import Purchase from "./components/Purchase"
import TopBarPharma from "./SideBar TopBar/TopBarPhama"
import SideBarPharma from "./SideBar TopBar/SideBarPharma"
import Layout from "./Layout/Layout"
import Acceuil from "./Produits/Acceuil"
import AcceuilCmd from "./Commandes/AcceuilCmd"
import AcceuilAppro from "./Approvisioner/AcceuilAppro"
import AcceuilVente from "./Vente/AcceuilVente"
import Stock from "./Stock/Stock"


function App() {

  return (
   
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout /> }>
        <Route path="/" element={<Navigate to="/accueil" replace />} />
         <Route path="/parametre" element={ <Acceuil /> } />
         <Route path="/commande" element={ <AcceuilCmd /> } />
         <Route path="/appro" element={ <AcceuilAppro /> } />
         <Route path="/accueil" element={ <AcceuilVente /> } />
         <Route path="/mouvement-stock" element={ <Stock /> } />
        </Route>
        {/* <Route path="/medecine" element={ <Medecine /> } />
          <Route path="/invoice" element={ <Invoice /> } />
          <Route path="/purchase" element={ <Purchase /> } /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
