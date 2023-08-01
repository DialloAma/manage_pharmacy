import React, { useEffect, useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import { Autocomplete, List, TextField } from "@mui/material";
const data = [
  { designation: "paracetamole 500mg", code: "para 500", quantite: 500,date_expi:"21-10-2023",prix:10000 },
  { designation: "paracetamole 1000mg", code: "para 1000", quantite: 50,date_expi:"21-10-2023" ,prix:10000},
  { designation: "Amoxiciline 500mg", code: "Amox 500", quantite: "10",date_expi:"21-10-2023",prix:10000 },
  { designation: "zenial 500mg", code: "para 500", quantite: "500" ,date_expi:"21-10-2023",prix:1000},
  { designation: "ampiciline 1000mg", code: "para 1000", quantite: "50",date_expi:"21-10-2023",prix:10000 },
  { designation: "perfusion 500mg", code: "Amox 500", quantite: "10" ,date_expi:"21-10-2023",prix:10000}
];
const Vente = () => {
  const [rows, setRows] = useState([1]);
  const [totaux, setTotaux] = useState(0);
  const [remise, setRemise] = useState(0);
  const [netTotal, setNetTotal] = useState(0);
  const [recu, setRecu] = useState(0);
  const [monaie, setMonaie] = useState(0);
  console.log("envoye", rows);

  //funtion ajout d'une ligne
  const addRow = () => {
    setRows((prevRows) => [
      ...prevRows,
      { designation: "", code: "", quantite: "",date_expi:"",prix:"",qtite:"",total:"" },
    ]);
  };

 //function de recuperation d'un produit et ces info
  const handleProductChange = (index, e) => {
    const { value } = e.target;
    const product = data.find((item) => item.designation === value);

    setRows((prevRows) => {
      const updatedRows = [...prevRows];
      updatedRows[index] = {
        ...updatedRows[index],
        designation: product ? product.designation : "",
        code: product ? product.code : "",
        quantite: product ? product.quantite : "",
        date_expi:product ? product.date_expi : "",
        prix:product ? product.prix : "",
      };
      return updatedRows;
    });
  };
 
  
//function pour suprimer une ligne
  const delletRow = (index) => {
    if (index !== 0) {
      setRows((prevRows) =>
        prevRows.filter((_, rowIndex) => rowIndex !== index)
      );
    }
  }
  //function pour calculer le motant total
  useEffect(() => {
    const montantTotal = rows.reduce((acc, tot) => acc + (tot.total || 0), 0);
    setTotaux(montantTotal);
    setNetTotal(montantTotal)
  }, [rows]);
//function pour la remise
useEffect(()=>{
  if(remise === ""){
    setNetTotal(totaux)
  }else{
  
      const nettotal= parseInt(totaux)*parseFloat(remise)/100
      const montant = parseInt(totaux)-parseInt(nettotal)
      setNetTotal(montant)
    
  }

},[remise])

//function pour calculer la monai
useEffect(()=>{
  if(recu === "" ){
    setMonaie(0)
  }else{
    const monaie= parseInt(recu)-parseInt(netTotal)
    setMonaie(monaie)
  }

},[recu])
  return (
    <List sx={{ px: 2, height: "600px", overflowY: "auto" }}>
      <div className="container-fluid mt-2">
        <div className="row">
          <div className="col-md-2">
            {/* <div className='form-group'>
            <label htmlFor="">Customer Name :</label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div> */}
            <div className="form-group">
              <label htmlFor="">Numéro du Patient :</label>
              <input type="text" className="form-control" />
            </div>
          </div>

          <div className="col-md-2">
            <div className="form-group">
              <label htmlFor="">Nom:</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-2">
            <div className="form-group">
              <label htmlFor="">Prénom :</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="">Payment type :</label>
              <select
                className="form-select"
                aria-label="Default select example"
              >
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
              <input type="date" className="form-control" />
            </div>
          </div>
        </div>
        {/* <div className="row mt-2">
          <div className="col-md-4">
            <button className="btn btn-primary px-5">New Customer</button>
          </div>
          <div className="col-md-2">
          <div className="form-group">
            <label htmlFor="">Contact Number :</label>
            <input type="text" className="form-control" />
          </div>
        </div>
        </div> */}
      </div>
      <div className="container-fluid">
        <div className="row mt-2">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table" style={{ width: "100%", overflowY: 'auto',marginTop:"5px" }}>
                <thead className="border-top border-bottom border-3 border-primary">
                  <tr>
                    <th width="25%">Nom Produit</th>
                    <th width="10%">Code</th>
                    <th width="8%">Ava.Qté.</th>
                    <th width="11%">Expiry</th>
                    <th width="6%">Quantité</th>
                    <th width="10%">Prix</th>
                 
                    <th width="13%">Total</th>
                    <th style={{ textAlign: "center" }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <div className="form-group">
                            <select
                              className="form-select"
                              value={row.designation || ""}
                              onChange={(e) => handleProductChange(index, e)}
                            >
                              <option value="">Select Product</option>
                              {data.map((item, idx) => (
                                <option key={idx} value={item.designation}>
                                  {item.designation}
                                </option>
                              ))}
                            </select>
                          </div>
                     
                        </td>
                        <td>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              value={row.code || ""}
                              readOnly
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              value={row.quantite || ""}
                              readOnly
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-group">
                            <input type="text" className="form-control"
                                value={row.date_expi || ""}
                                readOnly
                            />
                          </div>
                        </td>
                        <td>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              value={row.qtite || ""}
                              onChange={(e) => {
                                const value = e.target.value;
                                setRows((prevRows) => {
                                  const updatedRows = [...prevRows];
                                  updatedRows[index] = {
                                    ...updatedRows[index],
                                    qtite: value,
                                    total: parseInt(value)*parseInt(updatedRows[index].prix)
                                  };
                                  return updatedRows;
                                });
                              }}
                            />
                          </div>
                        </td>
                        
                        <td>
                          <div className="form-group">
                            <input type="text" className="form-control"
                             value={row.prix || ""}
                             readOnly
                            />
                          </div>
                        </td>
                       
                        <td>
                          <div className="form-group">
                            <input type="text" className="form-control" value={row.total || 0} 
                           
                             onChange={(e) => {
                               const value = e.target.value;
                               setRows((prevRows) => {
                                 const updatedRows = [...prevRows];
                                 updatedRows[index] = {
                                   ...updatedRows[index],
                                   total: parseInt(row.qtite)*parseInt(row.prix),
                                 };
                                 return updatedRows;
                               });
                             }}
                            readOnly />
                          </div>
                        </td>

                        <td style={{ textAlign: "center" }}>
                          <button className="btn btn-primary" style={{marginRight:'5px',background:"#179cbc"}} onClick={addRow}>
                            <AddIcon />
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={() => delletRow(index)}
                          >
                            <DeleteForeverIcon />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row border-bottom pb-2 justify-content-end">
          <div className="col-md-2">
            <div className="form-group">
              <label htmlFor="">Montant Total :</label>
              <input type="text" className="form-control"
              value={totaux}
              onChange={(e)=>{
                setTotaux(e.target.value)
              }}
              readOnly
              />
            </div>
          </div>
          <div className="col-md-2">
            <div className="form-group">
              <label htmlFor="">Remise(en %) :</label>
              <input type="text" className="form-control" value={remise} onChange={(e)=>setRemise(e.target.value)} />
            </div>
          </div>
          <div className="col-md-2">
            <div className="form-group">
              <label htmlFor="">Net Total :</label>
              <input type="text" className="form-control" value={netTotal} onChange={(e)=>setNetTotal(e.target.value)} readOnly />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-6">
            <button className="btn btn-primary px-5" style={{marginTop:'18px',background:"#179cbc"}}>Valider</button>
          </div>
          <div className="col-md-2">
            <div className="form-group">
              <label htmlFor="">Montant reçu</label>
              <input type="text" className="form-control" value={recu} onChange={(e)=>setRecu(e.target.value)} />
            </div>
          </div>
          <div className="col-md-2">
            <div className="form-group">
              <label htmlFor="">Monnaie</label>
              <input type="text" className="form-control" value={monaie} onChange={(e)=>setMonaie(e.target.value)} readOnly />
            </div>
          </div>
        </div>
      </div>
    </List>
  );
};

export default Vente;
