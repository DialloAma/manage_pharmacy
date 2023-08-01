import { List } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const AddProduit = () => {
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
                          <label htmlFor="">Code :</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-12 mb-2">
                        <div className="form-group">
                          <label htmlFor="">Forme :</label>
                          <select className="form-select" aria-label="Default select example">
                            <option selected>Selectionnez</option>
                            <option value="1">Injectable</option>
                            <option value="2">Sirop</option>
                            <option value="3">Comprimé</option>
                            <option value="3">Rouleau</option>
                            <option value="3">Test</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12 mb-2">
                        <div className="form-group">
                          <label htmlFor="">Unité :</label>
                          <select className="form-select" aria-label="Default select example">
                            <option selected>Selectionnez</option>
                            <option value="1">Boite</option>
                            <option value="2">Comprimé</option>
                            <option value="3">Ampoule</option>
                            <option value="3">Pièce</option>
                            <option value="3">Flacon</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group mb-2">
                          <label htmlFor="">Dosage :</label>
                          <input type="text" className="form-control" />
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

export default AddProduit