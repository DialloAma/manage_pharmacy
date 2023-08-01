import { useEffect, useState } from 'react';

import DataTable from 'datatables.net-dt';
import TABLE_FR from './elements/TableFr';

import { Box, Button, Grid, List, Modal } from '@mui/material'

import ClearIcon from '@mui/icons-material/Clear';
import PrintIcon from '@mui/icons-material/Print';
import CachedIcon from '@mui/icons-material/Cached';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddIcon from '@mui/icons-material/Add';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { lg: 900, md: 880, sm: 550, xs: 400 },
  height: { md: 550, sm: 550, xs: 550 },
  borderRadius: 3,
  outline: 'none',
  bgcolor: 'background.paper',
  py: 1
};
const Medecine = () => {

 

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    new DataTable('#myTable', {
      responsive: true,
      retrieve: true,
      language: TABLE_FR
    });
  }, []);

  return (
    <Grid container spacing={2} sx={{ marginTop: '5rem', marginLeft: '15rem', width: '84%' }}>
      <Grid item xs={12} md={12}>
        {/* <Header title={title} subtitle={subtitle} /> */}
        <Box className='actions'>
          <Box>
            <Button variant="contained" size='large' onClick={handleOpen} startIcon={<AddIcon />}>
              Add Medecine
            </Button>
          </Box>
          <Box>
            <Button variant='contained' style={{ backgroundColor: '#ccc', padding: '.5rem 0' }}><PrintIcon color='light' /></Button>
            <Button variant='contained' style={{ backgroundColor: 'green', padding: '.5rem 0', margin: '0 1rem' }}><CachedIcon color='light' /></Button>
            <Button variant='contained' style={{ backgroundColor: 'green', padding: '.5rem 0' }}><CachedIcon color='light' /></Button>
          </Box>
        </Box>
      </Grid>
    
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
                <h2 style={{ marginLeft: 15 }}>Add Medecine</h2>
              </Box>
              <ClearIcon sx={{ mr: 1.5, cursor: 'pointer' }} fontSize="small" onClick={handleClose} />
            </Box>
            
            <List sx={{ px: 2, height: '500px', overflowY: 'auto' }}>
              <div className="container-fluid mt-5">
                <div className="row">
                  <div className="col-md-5 mx-auto">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="form-group mb-3">
                          <label htmlFor="">Medecine Name :</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group mb-3">
                          <label htmlFor="">Packing :</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-12 mb-3">
                        <div className="form-group">
                          <label htmlFor="">Generic Name :</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-12 mb-3">
                        <div className="form-group">
                          <label htmlFor="">Supplier :</label>
                          <select className="form-select" aria-label="Default select example">
                            <option selected>Supplier</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12 d-flex aling-items-end mb-4">
                        <AddIcon color='success' />
                        <span className='text-success fw-bold'>Add New Supplier</span>
                      </div>
                      <div className="col-md-12 border-bottom border-3 border-primary"></div>
                      <div className="col-md-12 text-center">
                        <button className="btn btn-success mt-4 px-5">Add</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </Box>
        </Modal>
      </Grid>
    </Grid>
  )
}

export default Medecine
