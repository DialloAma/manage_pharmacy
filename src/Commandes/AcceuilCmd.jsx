import { styled } from '@mui/material'
import React, { useState } from 'react'

import { Box, Button, Grid, List, Modal } from '@mui/material'

import ClearIcon from '@mui/icons-material/Clear';
import PrintIcon from '@mui/icons-material/Print';
import CachedIcon from '@mui/icons-material/Cached';
// import DeleteIcon from '@mui/icons-material/Delete';
// import VisibilityIcon from '@mui/icons-material/Visibility';
import AddIcon from '@mui/icons-material/Add';
import AjoutCmd from './Components/AjoutCmd';
import ListeCmd from './Components/ListeCmd';


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
    width: { lg: 900, md: 880, sm: 550, xs: 400 },
    height: { md: 400, sm: 400, xs: 400 },
    borderRadius: 3,
    outline: 'none',
    bgcolor: 'background.paper',
    py: 1
  };
const AcceuilCmd = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Container>
    <Grid container spacing={2} >
    <Grid item xs={12} md={12}>
      {/* <Header title={title} subtitle={subtitle} /> */}
      <Box sx={{marginLeft:"15px"}}>
        <Box>
          <Button variant="contained" size='large' onClick={handleOpen} startIcon={<AddIcon />}>
            Lançer Commande
          </Button>
        </Box>
        <Box sx={{marginTop:"10px"}}>
          <Button variant='contained' style={{ backgroundColor: '#ccc', padding: "5px" }}><PrintIcon color='light' /></Button>
          <Button variant='contained' style={{ backgroundColor: 'green', padding: "5px", margin: '0 1rem' }}><CachedIcon color='light' /></Button>
          <Button variant='contained' style={{ backgroundColor: 'green',  padding: "5px" }}><CachedIcon color='light' /></Button>
        </Box>
      </Box>
    </Grid>
    <ListeCmd/>
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
              <h2 style={{ marginLeft: 15 }}>LANCER UNE COMMANDE</h2>
            </Box>
            <ClearIcon sx={{ mr: 1.5, cursor: 'pointer' }} fontSize="small" onClick={handleClose} />
          </Box>
          <AjoutCmd/>
          
        </Box>
      </Modal>
    </Grid>
  </Grid>
  
  </Container>
  )
}

export default AcceuilCmd
