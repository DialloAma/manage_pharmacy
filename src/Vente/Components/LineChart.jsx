import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ReactApexChart from 'react-apexcharts'
import { BASE_URL_SANS_DIABETO } from '../../../EndPoint'

const LineChart = ({statistiqueConsultation,statistiqueHospitalisation}) => {
  const medecin = localStorage.getItem("staff")
  const doctor= JSON.parse(medecin)
  const today = new Date();
  const year = today.getFullYear();
const [loading,setLoading]=useState(false)
const [kpiData,setKpiData]=useState({})

const iddep="640f2fa32380a911c7a34985"
const iddoc="6414b4f2dc78419e103c2c0b"
const idHosp="640f2c5a2380a911c7a34964"

// useEffect(()=>{
//   const getStatistiqueMedecin=async(iddoc,idhosp,anne)=>{
//      setLoading(true)
//      try {
//        const {data} = await axios.get(`${BASE_URL_SANS_DIABETO}department/countKpiDepartmentByHospital/${iddoc}/${iddep}/${idhosp}/${anne}`)
//          setKpiData(data)
//          setLoading(false)
//         console.log(kpiData)
//      } catch (error) {
//        console.log(error)
//      }
//    }
//    getStatistiqueMedecin(iddoc, iddep, idHosp, year)
// },[iddoc,iddep,idHosp,year])

//
    const series= [{
        name: 'Consultations',
        data: (statistiqueConsultation ?? []).map(({ count }) => count)
      }, {
        name: 'Hospitalisations',
        data: (statistiqueHospitalisation ?? []).map(({ count }) => count)
      }]
      const options={
        chart: {
          height: 150,
          type: 'area',
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
      
        xaxis: {
          
          categories: ["Jan", "Fev", "Mars", "Avr", "Mai", "Jun", "Juil","Aout","Sep","Oct","Nov","Dec"]
        },
        yaxis:{
            show:false
        }
       
      }
  return (
    <div id="chart">
    <ReactApexChart options={options} series={series} type="area" height={120} />
  </div>
  )
}

export default LineChart