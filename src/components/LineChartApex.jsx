import React from 'react'
import Chart from 'react-apexcharts'
function LineChartApex({data , params}) {
    const state  = {
          
        series: [{
            name: "روند بازدید",
            data: data?.sum_views_post_ostan
        }],
        options: {
            responsive : [
                {
                    breakpoint : 1450,
                    options : {
                        plotOptions: {
                         
                            bar: {
                            
                              width : 0
                            }, 
                          },
                          chart: {
                            width : 460
                          }, 
                          yaxis:{
                            show:true ,
                              labels:{
                                offsetX :-30,
                                maxWidth : 90,
                                rotate:0
                                                          
                            }
                          },
                          xaxis : {
                            show : false , 
                            lables : {
                                show : false,
                            }
                          }
                        
                    }
                },
            ],
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          
          
          yaxis: {
            
            labels : {
              maxWidth : 100,
              rotate : 0,
              offsetX : -35 , 
              fontFamily : 'Arial'
          }
            
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          xaxis: {
            categories: data?.date_time,
            offsetY: 45,
            offsetX : -10
          }
        },
      
      
      };

    
return (
    <div className="mixed-chart mt-1 p-5  border border-black bg-white shadow-md sm:rounded-lg  ">
        
    <Chart
    height={290}
                  
                  options={state.options} 
                  series={state.series}
                  type="line"
                  width="670"
                />
    </div>
  )
}
export default LineChartApex