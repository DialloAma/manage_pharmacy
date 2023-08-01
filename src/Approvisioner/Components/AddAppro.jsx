import { List } from '@mui/material'
import React from 'react'

const AddAppro = () => {
  return (
    <List sx={{  height: '500px', overflowY: 'auto' }}>
              <div className="container-fluid mt-4">
                <div className="row">
                  <div className="col-md-8 mx-auto">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group mb-2">
                          <label htmlFor="">Nom du produit :</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group mb-2">
                          <label htmlFor="">Provenance :</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group mb-2">
                          <label htmlFor="">N de lot :</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group mb-2">
                          <label htmlFor="">Quantité :</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group mb-2">
                          <label htmlFor="">Date Peremption :</label>
                          <input type="date" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6 mb-2">
                        <div className="form-group">
                          <label htmlFor="">Observations :</label>
                          <select className="form-select" aria-label="Default select example">
                            <option selected>Selectionnez</option>
                            <option value="1">Bon Etat</option>
                            <option value="2">Perimer</option>
                            <option value="3">Ajustement</option>
                            
                          </select>
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

export default AddAppro
