import { List } from '@mui/material'
import React from 'react'

const AjoutCmd = () => {
  return (
    <List sx={{  height: '500px', overflowY: 'auto' }}>
              <div className="container-fluid mt-2">
                <div className="row">
                  <div className="col-md-5 mx-auto">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group mb-2">
                          <label htmlFor="">Nom du produit :</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group mb-2">
                          <label htmlFor="">Quantité :</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group mb-2">
                          <label htmlFor="">Date de command :</label>
                          <input type="date" className="form-control" />
                        </div>
                      </div>
                   
                      {/* <div className="col-md-12 d-flex aling-items-end mb-4">
                        <AddIcon color='success' />
                        <span className='text-success fw-bold'>Add New Supplier</span>
                      </div>
                      <div className="col-md-12 border-bottom border-3 border-primary"></div> */}
                      <div className="col-md-12 text-center">
                        <button className="btn btn-success mt-3 px-5" style={{width:"100%"}}>Ajouter</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </List>
  )
}

export default AjoutCmd
