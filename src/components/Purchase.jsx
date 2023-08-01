import { Box, Button, Grid, List, Modal } from '@mui/material';
import { useEffect, useState } from 'react'

import DataTable from 'datatables.net-dt';
import TABLE_FR from './elements/TableFr';

import ClearIcon from '@mui/icons-material/Clear';
import PrintIcon from '@mui/icons-material/Print';
import CachedIcon from '@mui/icons-material/Cached';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Purchase = () => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { lg: 1200, md: 880, sm: 550, xs: 400 },
    height: { md: 580, sm: 580, xs: 580 },
    borderRadius: 3,
    outline: 'none',
    bgcolor: 'background.paper',
    py: 1
  };

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
              Add Purchase
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
        <div className="mx-3">
          <div className="table-responsive">
            <table id="myTable" className='table table-bordered table-striped'>
              <thead className='table-secondary'>
                <tr>
                  <th width="1">N°</th>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                  <th style={{ textAlign: 'center' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Tiger Nixon</td>
                  <td>System Architect</td>
                  <td>Edinburgh</td>
                  <td>61</td>
                  <td>2011-04-25</td>
                  <td>$320,800</td>
                  <td style={{ textAlign: 'center' }}>
                    <Button variant='outlined' style={{ marginRight: '2px' }}><VisibilityIcon /></Button>
                    <Button variant='outlined'><DeleteIcon color='error' /></Button>
                  </td>
                </tr>
                <tr>
                <td>2</td>
                  <td>Garrett Winters</td>
                  <td>Accountant</td>
                  <td>Tokyo</td>
                  <td>63</td>
                  <td>2011-07-25</td>
                  <td>$170,750</td>
                  <td style={{ textAlign: 'center' }}>
                    <Button variant='outlined' style={{ marginRight: '2px' }}><VisibilityIcon /></Button>
                    <Button variant='outlined'><DeleteIcon color='error' /></Button>
                  </td>
                </tr>
                <tr>
                <td>3</td>
                  <td>Ashton Cox</td>
                  <td>Junior Technical Author</td>
                  <td>San Francisco</td>
                  <td>66</td>
                  <td>2009-01-12</td>
                  <td>$86,000</td>
                  <td style={{ textAlign: 'center' }}>
                    <Button variant='outlined' style={{ marginRight: '2px' }}><VisibilityIcon /></Button>
                    <Button variant='outlined'><DeleteIcon color='error' /></Button>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Serge Baldwin</td>
                  <td>Data Coordinator</td>
                  <td>Singapore</td>
                  <td>64</td>
                  <td>2012-04-09</td>
                  <td>$138,575</td>
                  <td style={{ textAlign: 'center' }}>
                    <Button variant='outlined' style={{ marginRight: '2px' }}><VisibilityIcon /></Button>
                    <Button variant='outlined'><DeleteIcon color='error' /></Button>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Zenaida Frank</td>
                  <td>Software Engineer</td>
                  <td>New York</td>
                  <td>63</td>
                  <td>2010-01-04</td>
                  <td>$125,250</td>
                  <td style={{ textAlign: 'center' }}>
                    <Button variant='outlined' style={{ marginRight: '2px' }}><VisibilityIcon /></Button>
                    <Button variant='outlined'><DeleteIcon color='error' /></Button>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Zorita Serrano</td>
                  <td>Software Engineer</td>
                  <td>San Francisco</td>
                  <td>56</td>
                  <td>2012-06-01</td>
                  <td>$115,000</td>
                  <td style={{ textAlign: 'center' }}>
                    <Button variant='outlined' style={{ marginRight: '2px' }}><VisibilityIcon /></Button>
                    <Button variant='outlined'><DeleteIcon color='error' /></Button>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Jennifer Acosta</td>
                  <td>Junior Javascript Developer</td>
                  <td>Edinburgh</td>
                  <td>43</td>
                  <td>2013-02-01</td>
                  <td>$75,650</td>
                  <td style={{ textAlign: 'center' }}>
                    <Button variant='outlined' style={{ marginRight: '2px' }}><VisibilityIcon /></Button>
                    <Button variant='outlined'><DeleteIcon color='error' /></Button>
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Cara Stevens</td>
                  <td>Sales Assistant</td>
                  <td>New York</td>
                  <td>46</td>
                  <td>2011-12-06</td>
                  <td>$145,600</td>
                  <td style={{ textAlign: 'center' }}>
                    <Button variant='outlined' style={{ marginRight: '2px' }}><VisibilityIcon /></Button>
                    <Button variant='outlined'><DeleteIcon color='error' /></Button>
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Hermione Butler</td>
                  <td>Regional Director</td>
                  <td>London</td>
                  <td>47</td>
                  <td>2011-03-21</td>
                  <td>$356,250</td>
                  <td style={{ textAlign: 'center' }}>
                    <Button variant='outlined' style={{ marginRight: '2px' }}><VisibilityIcon /></Button>
                    <Button variant='outlined'><DeleteIcon color='error' /></Button>
                  </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Lael Greer</td>
                  <td>Systems Administrator</td>
                  <td>London</td>
                  <td>21</td>
                  <td>2009-02-27</td>
                  <td>$103,500</td>
                  <td style={{ textAlign: 'center' }}>
                    <Button variant='outlined' style={{ marginRight: '2px' }}><VisibilityIcon /></Button>
                    <Button variant='outlined'><DeleteIcon color='error' /></Button>
                  </td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Jonas Alexander</td>
                  <td>Developer</td>
                  <td>San Francisco</td>
                  <td>30</td>
                  <td>2010-07-14</td>
                  <td>$86,500</td>
                  <td style={{ textAlign: 'center' }}>
                    <Button variant='outlined' style={{ marginRight: '2px' }}><VisibilityIcon /></Button>
                    <Button variant='outlined'><DeleteIcon color='error' /></Button>
                  </td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Shad Decker</td>
                  <td>Regional Director</td>
                  <td>Edinburgh</td>
                  <td>51</td>
                  <td>2008-11-13</td>
                  <td>$183,000</td>
                  <td style={{ textAlign: 'center' }}>
                    <Button variant='outlined' style={{ marginRight: '2px' }}><VisibilityIcon /></Button>
                    <Button variant='outlined'><DeleteIcon color='error' /></Button>
                  </td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Michael Bruce</td>
                  <td>Javascript Developer</td>
                  <td>Singapore</td>
                  <td>29</td>
                  <td>2011-06-27</td>
                  <td>$183,000</td>
                  <td style={{ textAlign: 'center' }}>
                    <Button variant='outlined' style={{ marginRight: '2px' }}><VisibilityIcon /></Button>
                    <Button variant='outlined'><DeleteIcon color='error' /></Button>
                  </td>
                </tr>
                <tr>
                <td>14</td>
                  <td>Donna Snider</td>
                  <td>Customer Support</td>
                  <td>New York</td>
                  <td>27</td>
                  <td>2011-01-25</td>
                  <td>$112,000</td>
                  <td style={{ textAlign: 'center' }}>
                    <Button variant='outlined' style={{ marginRight: '2px' }}><VisibilityIcon /></Button>
                    <Button variant='outlined'><DeleteIcon color='error' /></Button>
                  </td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>Cedric Kelly</td>
                  <td>Senior Javascript Developer</td>
                  <td>Edinburgh</td>
                  <td>22</td>
                  <td>2012-03-29</td>
                  <td>$433,060</td>
                  <td style={{ textAlign: 'center' }}>
                    <Button variant='outlined' style={{ marginRight: '2px' }}><VisibilityIcon /></Button>
                    <Button variant='outlined'><DeleteIcon color='error' /></Button>
                  </td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>Airi Satou</td>
                  <td>Accountant</td>
                  <td>Tokyo</td>
                  <td>33</td>
                  <td>2008-11-28</td>
                  <td>$162,700</td>
                  <td style={{ textAlign: 'center' }}>
                    <Button variant='outlined' style={{ marginRight: '2px' }}><VisibilityIcon /></Button>
                    <Button variant='outlined'><DeleteIcon color='error' /></Button>
                  </td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>Brielle Williamson</td>
                  <td>Integration Specialist</td>
                  <td>New York</td>
                  <td>61</td>
                  <td>2012-12-02</td>
                  <td>$372,000</td>
                  <td style={{ textAlign: 'center' }}>
                    <Button variant='outlined' style={{ marginRight: '2px' }}><VisibilityIcon /></Button>
                    <Button variant='outlined'><DeleteIcon color='error' /></Button>
                  </td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>Herrod Chandler</td>
                  <td>Sales Assistant</td>
                  <td>San Francisco</td>
                  <td>59</td>
                  <td>2012-08-06</td>
                  <td>$137,500</td>
                  <td style={{ textAlign: 'center' }}>
                    <Button variant='outlined' style={{ marginRight: '2px' }}><VisibilityIcon /></Button>
                    <Button variant='outlined'><DeleteIcon color='error' /></Button>
                  </td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>Rhona Davidson</td>
                  <td>Integration Specialist</td>
                  <td>Tokyo</td>
                  <td>55</td>
                  <td>2010-10-14</td>
                  <td>$327,900</td>
                  <td style={{ textAlign: 'center' }}>
                    <Button variant='outlined' style={{ marginRight: '2px' }}><VisibilityIcon /></Button>
                    <Button variant='outlined'><DeleteIcon color='error' /></Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
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
                <h2 style={{ marginLeft: 15 }}>Add Purchase</h2>
              </Box>
              <ClearIcon sx={{ mr: 1.5, cursor: 'pointer' }} fontSize="small" onClick={handleClose} />
            </Box>
            
            <List sx={{ px: 2, height: '500px', overflowY: 'auto' }}>
              <div className="container-fluid mt-3">
                <div className='row'>
                  <div className='col-md-4'>
                    <div className='form-group'>
                      <label htmlFor="">Supplier :</label>
                      <select className="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className='col-md-2'>
                    <div className='form-group'>
                      <label htmlFor="">Invoice Number :</label>
                      <input type="text" className='form-control' />
                    </div>
                  </div>
                  <div className='col-md-3'>
                    <div className="form-group">
                      <label htmlFor="">Payment type :</label>
                      <select className="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label htmlFor="">Date :</label>
                      <input type="date" className='form-control' />
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid">
                <div className="row mt-5">
                  <div className="col-md-12">
                    <table className="table" style={{ width: '100%' }}>
                      <thead className='border-top border-bottom border-3 border-primary'>
                        <tr>
                          <th width="15%">Medecine Name</th>
                          <th width="10%">Packing</th>
                          <th width="10%">Batch ID</th>
                          {/* <th width="10%">Quantity</th> */}
                          <th width="10%">Ex.Date</th>
                          <th width="10%">Quantity</th>
                          <th width="10%">MRP</th>
                          <th width="10%">Rate</th>
                          <th width="10%">Amount</th>
                          <th style={{ textAlign: 'center' }}>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="form-group">
                              <select className="form-select" aria-label="Default select example">
                                <option selected>Select Medecin</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </div>
                          </td>
                          <td>
                            <div className="form-group">
                              <input type="text" className="form-control" />
                            </div>
                          </td>
                          <td>
                            <div className="form-group">
                              <input type="text" className="form-control" />
                            </div>
                          </td>
                          <td>
                            <div className="form-group">
                              <input type="text" className="form-control" />
                            </div>
                          </td>
                          <td>
                            <div className="form-group">
                              <input type="text" className="form-control" />
                            </div>
                          </td>
                          <td>
                            <div className="form-group">
                              <input type="text" className="form-control" />
                            </div>
                          </td>
                          <td>
                            <div className="form-group">
                              <input type="text" className="form-control" />
                            </div>
                          </td>
                          <td>
                            <div className="form-group">
                              <input type="text" className="form-control" />
                            </div>
                          </td>
                          <td style={{ textAlign: 'center' }}>
                            <button className='btn btn-primary'><AddIcon /></button>
                            <button className='btn btn-danger'><DeleteForeverIcon /></button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="container-fluid">
                <div className="row border-bottom pb-5 justify-content-end">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="">If new medecine, generic name :</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid pt-5">
                <div className="row justify-content-end">
                  <div className="col-md-6 justify-content-end">
                    <div className="form-group">
                      <label htmlFor="">Grand Total :</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="col-md-1 mx-auto mt-4">
                  <button className="btn btn-primary px-5">Save</button>
                </div>
              </div>
            </List>
          </Box>
        </Modal>
      </Grid>
    </Grid>
  )
}

export default Purchase
