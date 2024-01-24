import React from 'react'
import Chart from 'react-apexcharts'

// const data = [
//     {
//         "name": "اصولگرا",
//         "data": [
//             65,
//             43,
//             22,
//             17,
//             4,
//             10,
//             12,
//             12,
//             31,
//             19
//         ]
//     },
//     {
//         "name": "اصلاح طلب",
//         "data": [
//           60,
//             40,
//             12,
//             27,
//             14,
//             9,
//             8,
//             12,
//             21,
//             29
//         ]
//     },
//     {
//         "name": "اعتدالگرا",
//         "data": [
//           15,
//             41,
//             13,
//             28,
//             15,
//             18,
//             16,
//             14,
//             22,
//             10
//         ]
//     }
// ]
const state = {
          
   
    options: {
       
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [{
        breakpoint: 1650,
        options: {
            chart: {
                width: '100%',
                height :'100%'
            },
            legend: {
              position: 'bottom'
            }
          }
        }],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10,
          
        },
      },
     
      legend: {
        fontFamily : 'khameneiiRegular',
        position: 'right',
        offsetY: 40
      },
      fill: {
        opacity: 1
      },
      yaxis: {
        title : {
            
            style: {
                fontSize : '12px',
                fontFamily : 'khameneiiRegular'
            }
        },
       
    },
    xaxis: {
      labels: {
          style : {
              fontFamily : 'khameneiiRegular'
          },
      },
      
  },
    },
    
  
  
  };

function StackedColumnsCharts({dataStacked}) {

  return (
    <Chart 
    options={{
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [{
        breakpoint: 1650,
        options: {
            chart: {
                width: '100%',
                height :'100%'
            },
            legend: {
              position: 'bottom',
              offsetY : 10
            }
          }
        }],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10,
          
        },
      },
     
      legend: {
        fontFamily : 'khameneiiRegular',
        position: 'right',
        offsetY: 40
      },
      fill: {
        opacity: 1
      },
      yaxis: {
        title : {
            
            style: {
                fontSize : '12px',
                fontFamily : 'khameneiiRegular'
            }
        },
       
    },
    xaxis: {
      categories : ['6 روز گذشته' , '5 روز گذشته' , '4 روز گذشته' , '3 روز گذشته' , '2 روز گذشته' , '1 روز گذشته ', 'امروز'],
      labels: {
          style : {
              fontFamily : 'khameneiiRegular'
          },
      },
      
  },
    }}
    series={dataStacked}
    width={1000}
    height={320}
    type='bar'
    />
  )
}

export default StackedColumnsCharts
