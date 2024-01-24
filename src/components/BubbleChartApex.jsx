import React from 'react'
import Chart from 'react-apexcharts'
import generateData from './generateData'


// [
//   [
//       6,
//       3922,
//       3
//   ],
//   [
//       9,
//       10200,
//       3
//   ],
// ]
/// x 
/// y 
///size 

// const state = [{
//     name: 'Bubble1',
//     data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
//       min: 10,
//       max: 60
//     })
//   },
//   {
//     name: 'Bubble2',
//     data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
//       min: 10,
//       max: 60
//     })
//   },
//   {
//     name: 'Bubble3',
//     data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
//       min: 10,
//       max: 60
//     })
//   },
//   {
//     name: 'Bubble4',
//     data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
//       min: 10,
//       max: 60
//     })
//   }]


function BubbleChartApex({dataBubble}) {
  return (
    <Chart
                  
    options={{
      responsive : [
          {
              breakpoint : 1700,
              options : {
                 
                    chart: {
                    //   width : 800
                    width: '100%',
                    height :'100%'
                    },
                   
                    
                    
                  
              }
          },
      ],

      dataLabels : {
          enabled : false,
          
      },
      
      chart : {
        
        type : 'bubble'
      },
      legend : {
        fontFamily :'khameneiiRegular'
      },
      xaxis: {
        labels: {
            style : {
                fontFamily : 'khameneiiRegular'
            },
        },
        title : 'بازدید',
        tickAmount: 12,
        type: 'category',
    },
    
    yaxis: {
        title : {
            text: 'بازدید',
            style: {
                fontSize : '12px',
                fontFamily : 'khameneiiRegular'
            }
        },
        labels : {
            title : 'بازدید',
            maxWidth : 70,
            offsetX : -35
        }
    },
    }}
    series={dataBubble}
    type="bubble"
    width="1050"
    height='330'
  />

  )
}

export default BubbleChartApex
