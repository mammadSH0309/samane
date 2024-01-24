import React from 'react'
import Chart from 'react-apexcharts'
import { PiStarOfDavidDuotone } from 'react-icons/pi';
const data = {


          
    series: [{
      name: 'Series 1',
      data: [80, 50, 30, 40, 100, 20],
    }],
    options: {
      chart: {
        height: 350,
        type: 'radar',
      },
      xaxis: {
        categories: ['January', 'February', 'March', 'April', 'May', 'June']
      }
    },
  
  
  };


function RadarChart({dataRadar  , width , height}) {


  return (
    <Chart
    options={{chart: {
      height: 350,
      type: 'radar',
    },
    responsive : [
      {
          breakpoint : 1500,
          options : {
              plotOptions: {
               
                  bar: {
                  
                    width : 0
                  }, 
                },
                chart: {
                  width : 250
                }
              
          }
      },
  ],

    xaxis: {
      categories: dataRadar.categories
    }}}
    series={
      [
        {
          name : dataRadar.name,
          data : dataRadar.data
        }
      ]
    }
    type="radar" height={height} width={width}
    />
  )
}

export default RadarChart
