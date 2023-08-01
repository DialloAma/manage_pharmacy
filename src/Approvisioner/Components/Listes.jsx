import React, { useEffect } from 'react'
import DataTable from 'datatables.net-dt';
import TABLE_FR from '../../components/elements/TableFr';

import { Box, Button, Grid, List, Modal } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Listes = () => {

    useEffect(() => {
        new DataTable('#myTable', {
          responsive: true,
          retrieve: true,
          language: TABLE_FR
        });
      }, []);
  return (
    <Grid item xs={12} md={12}>
    <div className="mx-3">
      <div className="table-responsive">
        <table id="myTable" className='table table-bordered table-striped '>
          <thead className='table-secondary'>
            <tr className='mt-2'>
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
  )
}

export default Listes