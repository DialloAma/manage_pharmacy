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
              <th style={{width:"25%"}} >Name & Prénoms</th>
              <th style={{width:"10%"}}>Total</th>
              <th style={{width:"5%"}}>remise %</th>
              <th style={{width:"10%"}}>Net Total</th>
              <th style={{width:"10%"}}>Motant Recu</th>
              <th style={{width:"10%"}}>Monnaie</th>
              <th style={{width:"10%"}}>Date de vente</th>
              <th style={{ textAlign: 'center' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Tiger Nixon</td>
              <td>1000000</td>
              <td>10</td>
              <td>5000000</td>
              <td>61</td>
              <td>$320,800</td>
              <td>2011-04-25</td>
              <td style={{ textAlign: 'center' }}>
                <Button variant='outlined'  style={{ marginRight: '2px', }}><VisibilityIcon /></Button>
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