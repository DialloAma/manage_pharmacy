import { Autocomplete, Box, Grid, Paper, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const years = ["2023", "2024", "2025", "2026", "2027", "2028"];
const jours = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
];
const months = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

const TopBar = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();

  const [jour, setJour] = useState(day);
  const [mois, setMois] = useState(months[month]);
  const [anne, setAnne] = useState(year);

  //function de recuperation du mois en entier
  const getMonthNumber = (monthName) => {
    const monthNumber = months.indexOf(monthName) + 1;
    return monthNumber < 10 ? `0${monthNumber}` : `${monthNumber}`;
  };
  const [moisInt, setMoisInt] = useState(getMonthNumber(months[month]));
  const handleMonthChange = (event, newEvent) => {
    const monthNumber = getMonthNumber(newEvent);
    setMois(newEvent);
    setMoisInt(monthNumber);
  };
  const currentDate = `${anne}-${moisInt}-${jour}`;
  console.log("day ", currentDate);
  useEffect(() => {
    setJour(day);
    setMois(months[month]);
    setAnne(year);
  }, []);
  return (
    <Grid container>
        <Grid item sm={12} xs={12} md={12} >
        <Box sx={{ display: "flex",justifyContent:"flex-end",margin:"10px" }}>
          <Autocomplete
            size="small"
            disablePortal
            id="combo-box-demo"
            options={jours}
            value={jour}
            onChange={(event, newEvent) => {
              setJour(newEvent);
            }}
            sx={{ width: 90, bgcolor: "#fff", mr: 1 }}
            getOptionLabel={(option) => option.toString()}
            renderInput={(params) => <TextField {...params} label="Jour" />}
          />
          <Autocomplete
            size="small"
            disablePortal
            id="combo-box-demo"
            options={months}
            value={mois}
            onChange={(event, newEvent) => {
              console.log("newEvent", newEvent);
              handleMonthChange(event, newEvent);
            }}
            sx={{ width: 170, bgcolor: "#fff", mr: 1 }}
            renderInput={(params) => <TextField {...params} label="Mois" />}
          />
          <Autocomplete
            size="small"
            disablePortal
            id="combo-box-demo"
            options={years}
            value={anne}
            onChange={(event, newevent) => setAnne(newevent)}
            getOptionLabel={(option) => option.toString()}
            sx={{ width: 120, bgcolor: "#fff" }}
            renderInput={(params) => <TextField {...params} label="Années" />}
          />
        </Box>
        </Grid>
      
      <Grid container spacing={4}>
        <Grid item sm={7} xs={12} md={7}>
          <Grid container spacing={4}>
            <Grid item sm={3} xs={6} md={3}>
              <Paper
                sx={{
                  width: "100%",
                  height: "7rem",
                  background: "white",
                  padding: "5px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
                elevation={0}
              >
                <img
                  // src={pat}
                  style={{ height: "3rem", objectFit: "contain" }}
                />
                <h2 className="titre">
                  {/* {kpitopAdmin?.data?.consulteCount &&
                    kpitopAdmin?.data?.consulteCount}{" "}
                  /{" "}
                  {kpitopAdmin?.data?.patientCount &&
                    kpitopAdmin?.data?.patientCount} */}
                </h2>
                {/* <p className="soustitre">Patients enrolés</p> */}
              </Paper>
            </Grid>
            <Grid item sm={3} xs={12} md={3}>
              <Paper
                sx={{
                  width: "100%",
                  height: "7rem",
                  background: "white",
                  padding: "5px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
                elevation={0}
              >
                <img
                  //src={lit}
                  style={{ height: "3rem", objectFit: "contain" }}
                />
                <h2 className="titre">
                  {/* {kpitopAdmin?.data?.hospitalisation &&
                    kpitopAdmin?.data?.hospitalisation} */}
                </h2>
                {/* <p className="soustitre">Patients Hospitalisés</p> */}
              </Paper>
            </Grid>
            <Grid item sm={3} xs={6} md={3}>
              <Paper
                sx={{
                  width: "100%",
                  height: "7rem",
                  background: "white",
                  padding: "5px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
                elevation={0}
              >
                <img
                  // src={revuCarte}
                  style={{ height: "3rem", objectFit: "contain" }}
                />
                <h2 className="titre">
                  {/* {kpitopAdmin?.data?.examens_realise &&
                    kpitopAdmin?.data?.examens_realise}{" "}
                  /{" "}
                  {kpitopAdmin?.data?.demande_examens &&
                    kpitopAdmin?.data?.demande_examens} */}
                </h2>
                {/* <p className="soustitre">Examens Labo </p> */}
              </Paper>
            </Grid>
            <Grid item sm={3} xs={6} md={3}>
              <Paper
                sx={{
                  width: "100%",
                  height: "7rem",
                  background: "white",
                  padding: "5px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
                elevation={0}
              >
                <img
                  // src={argent}
                  style={{ height: "3rem", objectFit: "contain" }}
                />
                <h2 className="titre">
                  {/* {kpitopAdmin?.data?.imagerie_realise &&
                    kpitopAdmin?.data?.imagerie_realise}{" "}
                  /{" "}
                  {kpitopAdmin?.data?.demande_imagerie &&
                    kpitopAdmin?.data?.demande_imagerie} */}
                </h2>
                {/* <p className="soustitre">Examens Radio</p> */}
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={5} xs={12} md={5}>
          <Paper
            sx={{
              height: "7rem",
              background: "white",
              padding: "5px",

              borderRadius: "10px",
            }}
            elevation={0}
          >
            {/* <LineChart
              statistiqueConsultation={
                kpitopAdmin.data?.statistiqueConsultation
              }
              statistiqueHospitalisation={
                kpitopAdmin.data?.statistiqueHospitalisation
              }
            /> */}
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TopBar;
