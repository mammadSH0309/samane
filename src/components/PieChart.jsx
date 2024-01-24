import React from 'react'
import Chart from 'react-apexcharts'

const datas = {
    "series": [
        28,
        14,
        38
    ],
    "labels": [
        "اصولگرا",
        "اصلاح طلب",
        "اعتدالگرا"
    ]
}



function PieChart({dataPie}) {
  
  
  return (
    <Chart
    options={
      {
        legend : {
          fontFamily : 'khameneiiRegular'
        },
          
        chart: {
          width: 380,
          type: 'pie',
        },
        labels : dataPie.labels ,
        responsive: [{
          breakpoint: 1650,
          options: {
            chart: {
              width: '100%',
              height :'100%'
              // width: 380,
              // height : 380
              
            },
            legend: {
              
              position: 'bottom',
              
            }
          }
        }],
       
      }
    }
    series={dataPie.series}
    type='pie'
    width={520}
    height={320}
    />
  )
}

export default PieChart
