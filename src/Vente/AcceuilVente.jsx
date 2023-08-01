import { Box, Button, Grid, List, Modal, styled } from '@mui/material'
import React, { useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import PrintIcon from '@mui/icons-material/Print';
import CachedIcon from '@mui/icons-material/Cached';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import TopBar from './Components/TopBar'
import Vente from './Components/Vente'
import Listes from './Components/Listes';


const Container = styled('div')(({ theme }) => ({
  padding: '20px',

  [theme.breakpoints.up('md')]: {
    marginLeft: '250px',
  },
}))
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { lg: 1200, md: 880, sm: 550, xs: 400 },
  height: { md: 680, sm: 680, xs: 680 },
  borderRadius: 3,
  outline: 'none',
  bgcolor: 'background.paper',
  py: 1
};
const AcceuilVente = () => {
  const [open, setOpen] = useState(false);
  const [opendis, setOpendis] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpendis = () => setOpendis(true);
  const handleClosedis = () => setOpendis(false);
  return (
    <Container>
      <TopBar/>
      <Grid container spacing={2} sx={{marginTop:"10px"}}>
      <Grid item xs={12} sm={4} md={4}>
          <Button
          onClick={handleOpen}
            size="small"
            variant="contained"
            sx={{
              textTransform: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
              width: '100%',
              background: '#179cbc',
              '&:hover': {
                background: '#179cbc',
              },
            }}
          >
           Ventes
          </Button>
        </Grid>
      <Grid item xs={12} sm={4} md={4}>
          {/*<p className='titrePat'>PATIENT EXISTANT</p>*/}
          <Button
          onClick={handleOpendis}
            size="small"
            sx={{
              textTransform: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
              width: '100%',
              background: 'transparent',
              border: '2px solid #179cbc',
              color: '#179cbc',
            }}
          >
          
            Distribution aux Services
          </Button>
        </Grid>
       

        {/* modal pour la vente  */}
        <Grid item xs={12} md={12}>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2, py: 1, borderBottom: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <h2 style={{ marginLeft: 15 }}>Faire une Vente</h2>
              </Box>
              <ClearIcon sx={{ mr: 1.5, cursor: 'pointer' }} fontSize="small" onClick={handleClose} />
            </Box>
            
            < Vente/>
           
          </Box>
        </Modal>
      </Grid>

        {/* modal pour la distribution */}
        <Grid item xs={12} md={12}>
        <Modal
          open={opendis}
          onClose={handleClosedis}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2, py: 1, borderBottom: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <h2 style={{ marginLeft: 15 }}>Faire une Vente</h2>
              </Box>
              <ClearIcon sx={{ mr: 1.5, cursor: 'pointer' }} fontSize="small" onClick={handleClosedis} />
            </Box>
            
            < Vente/>
           
          </Box>
        </Modal>
      </Grid>
      </Grid>
      {/* liste des produit vendu a date */}
      <Listes/>
    </Container>
    
  )
}

export default AcceuilVente